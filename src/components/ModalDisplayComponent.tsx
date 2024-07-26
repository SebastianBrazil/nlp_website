import { IModalDisplayProps } from '@/interfaces/interface'
import Image from 'next/image';
import React from 'react'

const ModalDisplayComponent = (props: IModalDisplayProps) => {
    const closeModal = () => {
        props.setIsModalOpen(false);
        document.body.classList.remove("overflow-hidden");
    }

    return (
        <div className='fixed inset-0 bg-black z-20 bg-opacity-40'>
            <div className='bg-white z-30 w-[90%] h-[90%] absolute top-0 left-0 bottom-0 right-0 m-auto'>
                <div className="w-full h-[90%] bg-[#222831] grid place-items-center">
                    {/* <Image className="p-1 w-auto max-h-[800px]" width={1920} height={1080} loading="lazy" src={"/assets/heroPlaceholder.png"} alt="Home Image" /> */}
                    <Image className="p-1 w-auto max-h-[800px]" width={1920} height={1080} loading="lazy" src={"/assets/tallimg.png"} alt="Home Image" />
                </div>

                <div className='grid items-center'>
                    <button className='pt-8' onClick={() => { closeModal() }}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default ModalDisplayComponent
