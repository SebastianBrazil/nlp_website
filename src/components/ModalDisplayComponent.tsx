"use client"

import { IModalDisplayProps } from '@/interfaces/interface'
import Image from 'next/image';
import React, { useState } from 'react'

const ModalDisplayComponent = (props: IModalDisplayProps) => {
    const [photoIter, setPhotoIter] = useState<number>(0);

    const closeModal = () => {
        props.setIsModalOpen(false);

        props.setTopTitle("");
        props.setTopDescription("");
        props.setTopTags([]);
        props.setTopPhotos([]);

        document.body.classList.remove("overflow-hidden");
    }

    return (
        <div className='fixed inset-0 bg-black z-20 bg-opacity-40'>
            <div className='bg-white z-30 w-[90%] h-[90%] absolute top-0 left-0 bottom-0 right-0 m-auto'>
                <div className="w-full h-[74%] bg-[#222831] grid place-items-center">
                    {
                        props.topPhotos.length > 0 ?
                            <Image className="p-1 w-auto max-h-[500px]" width={1920} height={1080} loading="lazy" src={props.topPhotos[photoIter]} alt="Home Image" />
                            :
                            <Image className="p-1 w-auto max-h-[500px]" width={1920} height={1080} loading="lazy" src={"/assets/heroPlaceholder.png"} alt="Home Image" />
                    }
                </div>

                <div className='w-full h-[6%] bg-[#222831] flex justify-center'>
                    {
                        props.topPhotos.length > 1 && photoIter > 0 && <button className='font-gilda text-[#EEEEEE]' type='button' onClick={() => { setPhotoIter(photoIter - 1) }}>Go back</button>
                    }
                    {
                        props.topPhotos.length > 1 && photoIter < props.topPhotos.length - 1 && <button className='font-gilda text-[#EEEEEE]' type='button' onClick={() => { setPhotoIter(photoIter + 1) }}>Go Forward</button>
                    }
                </div>

                <p>Title: {props.topTitle}</p>
                <p>Description: {props.topDescription}</p>
                <div className='flex'>
                    <p>Tags:</p>
                    {props.topTags.map((tag, index) => {
                        return (
                            <p className='ml-1' key={index}>{tag}</p>
                        )
                    })}
                </div>

                <div className='grid items-center'>
                    <button className='' onClick={() => { closeModal() }}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default ModalDisplayComponent
