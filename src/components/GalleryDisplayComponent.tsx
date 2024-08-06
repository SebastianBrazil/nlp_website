import { IGalleryDisplayProps } from '@/interfaces/interface'
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'

const GalleryDisplayComponent = (props: IGalleryDisplayProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [startX, setStartX] = useState<number>(0);
    const [scrollLeft, setScrollLeft] = useState<number>(0);

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

    return (
        <div className='flex justify-center'>
            <div className='w-[95%] py-5'>
                <div ref={containerRef} className="w-full h-[800px] border-4 border-black bg-[#222831] flex place-items-center overflow-x-scroll">
                    {
                        props.displayedPhotos.length === 0 ?
                            <Image className="px-5 w-auto h-[760px]" width={1500} height={800} loading="lazy" src={"/assets/noImg.png"} alt="No Image Available" />
                            :
                            props.displayedPhotos.length === 1 ?
                                props.displayedPhotos.map((photo, index) => {
                                    return (
                                        <div key={index} className='w-full flex justify-center overflow-x-auto'>
                                            <Image className="px-5 w-auto h-[760px]" width={1500} height={800} loading="lazy" src={photo} alt="Gallery Image" />
                                        </div>
                                    )
                                })
                                :
                                props.displayedPhotos.length > 1 ?
                                    props.displayedPhotos.map((photo, index) => {
                                        return (
                                            <Image key={index} className="galleryScroll px-5 w-auto h-[760px]" width={1500} height={800} loading="lazy" src={photo} alt="Gallery Image" />
                                        )
                                    })
                                    :
                                    <p className='w-full text-[#EEEEEE] font-gilda text-5xl text-center'>Error Displaying Gallery Images</p>
                    }
                </div>

                <p>Title: {props.displayedTitle}</p>
                {
                    props.displayedDescription === "" ?
                        <p>Description: No Description</p>
                        :
                        <p>Description: {props.displayedDescription}</p>
                }
                <div className='flex'>
                    <p>Tags:</p>
                    {props.displayedTags.length > 0 ?
                        props.displayedTags.map((tag, index) => {
                            return (
                                <p className='ml-1' key={index}>{tag}</p>
                            )
                        })
                        :
                        <p>N/A</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default GalleryDisplayComponent
