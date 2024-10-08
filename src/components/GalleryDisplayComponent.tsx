import { IGalleryDisplayProps } from '@/interfaces/interface'
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'
import ModalModifyComponent from './ModalModifyComponent';

const GalleryDisplayComponent = (props: IGalleryDisplayProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [startX, setStartX] = useState<number>(0);
    const [scrollLeft, setScrollLeft] = useState<number>(0);

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleMouseDown = (e: MouseEvent) => {
        e.preventDefault();
        if (containerRef.current) {
            setIsDragging(true);
            setStartX(e.pageX - containerRef.current.offsetLeft);
            setScrollLeft(containerRef.current.scrollLeft);
        }
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (isDragging && containerRef.current) {
            e.preventDefault();
            const x = e.pageX - containerRef.current.offsetLeft;
            const walk = (x - startX) * 2;
            const container = containerRef.current;
            const maxScrollLeft = container.scrollWidth - container.clientWidth - 1;

            let newScrollLeft = scrollLeft - walk;
            newScrollLeft = Math.max(0, Math.min(newScrollLeft, maxScrollLeft));
            container.scrollLeft = newScrollLeft;
        };
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleTouchStart = (e: TouchEvent) => {
        e.preventDefault();
        if (containerRef.current) {
            setIsDragging(true);
            setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
            setScrollLeft(containerRef.current.scrollLeft);
        }
    };

    const handleTouchMove = (e: TouchEvent) => {
        if (isDragging && containerRef.current) {
            e.preventDefault();
            const x = e.touches[0].pageX - containerRef.current.offsetLeft;
            const walk = (x - startX) * 2;
            const container = containerRef.current;
            const maxScrollLeft = container.scrollWidth - container.clientWidth - 1;

            let newScrollLeft = scrollLeft - walk;
            newScrollLeft = Math.max(0, Math.min(newScrollLeft, maxScrollLeft));
            container.scrollLeft = newScrollLeft;
        };
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            container.addEventListener('mousedown', handleMouseDown);
            container.addEventListener('mousemove', handleMouseMove);
            container.addEventListener('mouseup', handleMouseUp);
            container.addEventListener('mouseleave', handleMouseUp);

            container.addEventListener('touchstart', handleTouchStart);
            container.addEventListener('touchmove', handleTouchMove);
            container.addEventListener('touchend', handleTouchEnd);

            return () => {
                container.removeEventListener('mousedown', handleMouseDown);
                container.removeEventListener('mousemove', handleMouseMove);
                container.removeEventListener('mouseup', handleMouseUp);
                container.removeEventListener('mouseleave', handleMouseUp);

                container.removeEventListener('touchstart', handleTouchStart);
                container.removeEventListener('touchmove', handleTouchMove);
                container.removeEventListener('touchend', handleTouchEnd);
            };
        };
    }, [isDragging, startX, scrollLeft]);

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            container.scrollLeft = 0;
        };
    }, [props])

    const openModModal = () => {
        setIsModalOpen(true);
        document.body.classList.add("overflow-hidden");
    }

    return (
        <div className='flex justify-center'>
            <div className='w-[95%] py-5'>
                <p className='mb-2 w-full text-[#222831] font-gilda text-4xl text-center'>Images: {props.displayedPhotoGroup.photos.length}</p>

                <div ref={containerRef} className="w-full h-[750px] border-4 border-black bg-[#222831] rounded-xl flex place-items-center overflow-x-auto galleryScroll">

                    {
                        props.displayedPhotoGroup.photos.length === 0 ?
                            <Image className="block mx-auto w-[5%] px-5 min-w-min h-[710px]" width={1500} height={800} loading="lazy" src={"/assets/noImg.png"} alt="No Image Available" />
                            :
                            props.displayedPhotoGroup.photos.length > 0 ?
                                props.displayedPhotoGroup.photos.map((photo, index) => {
                                    return (
                                        <Image key={index} className="block mx-auto w-[5%] px-5 min-w-min h-[710px]" width={1500} height={800} loading="lazy" src={photo} alt="Gallery Image" />
                                    )
                                })
                                :
                                <p className='w-full text-[#EEEEEE] font-gilda text-5xl text-center'>Error Displaying Gallery Images</p>
                    }
                </div>

                <div className='flex justify-center'>
                    <div className='w-[70%]'>
                        <div className='flex h-auto flex-wrap'>
                            {props.displayedPhotoGroup.tags.length > 0 ?
                                props.displayedPhotoGroup.tags.map((tag, index) => {
                                    return (
                                        <p className='mr-3 mt-4 py-2 px-4 rounded-2xl bg-[#EEEEEE] text-[#222831] border-2 border-black text-3xl font-gilda' key={index}>{tag}</p>
                                    )
                                })
                                :
                                <p className='mr-3 mt-4 py-2 px-4 rounded-2xl bg-[#EEEEEE] text-[#222831] border-2 border-black text-3xl font-gilda'>Untagged</p>
                            }
                        </div>

                        {
                            props.displayedPhotoGroup.title === "" ?
                                <p className='text-5xl font-gilda pt-6'>Title: No Title</p>
                                :
                                <p className='text-5xl font-gilda pt-6'>Title: {props.displayedPhotoGroup.title}</p>
                        }
                        {
                            props.displayedPhotoGroup.description === "" ?
                                <p className='text-3xl pt-6 font-gilda'>Description: No Description</p>
                                :
                                <p className='text-3xl pt-6 font-gilda'>Description: {props.displayedPhotoGroup.description}</p>
                        }

                        {
                            props.modifyShow === true && props.renderSubmit !== null && props.setRenderSubmit !== null &&
                            <div>
                                <button onClick={() => { openModModal() }} className='bg-[rgb(14,43,141)] cursor-pointer mt-6 text-[#EEEEEE] py-2 px-6 text-2xl rounded-3xl font-gilda'>Modify</button>
                                {isModalOpen && <ModalModifyComponent setRenderSubmit={props.setRenderSubmit} renderSubmit={props.renderSubmit} setIsModalOpen={setIsModalOpen} displayedPhotoGroup={props.displayedPhotoGroup} />}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GalleryDisplayComponent
