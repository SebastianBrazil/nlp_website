import { IModalDisplayProps } from '@/interfaces/interface'
import React from 'react'

const ModalDisplayComponent = (props: IModalDisplayProps) => {
    const closeModal = () => {
        props.setIsModalOpen(false);
        document.body.classList.remove("overflow-hidden");
    }

    return (
        <div className='fixed inset-0 opacity-40 bg-black z-20'>
            <div className='bg-white z-30 w-20 h-20 absolute top-0 left-0 bottom-0 right-0 m-auto'>
                <button onClick={() => { closeModal() }}>p</button>
            </div>
        </div>
    )
}

export default ModalDisplayComponent
