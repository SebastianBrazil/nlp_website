import { IModalDisplayProps } from '@/interfaces/interface'
import React from 'react'

const ModalDisplayComponent = (props: IModalDisplayProps) => {
    return (
        <div className='fixed inset-0 opacity-25 bg-black z-20'>
            <div className='bg-white z-30 w-20 h-20 absolute top-0 left-0 bottom-0 right-0 m-auto'>
                <button onClick={() => { props.setIsModalOpen(!props.isModalOpen) }}>p</button>
            </div>
        </div>
    )
}

export default ModalDisplayComponent
