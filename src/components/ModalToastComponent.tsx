import { IModalToast } from '@/interfaces/interface'
import React from 'react'

const ModalToastComponent = (props: IModalToast) => {

  const closeToast = () => {
    props.setOpenToast(!props.openToast)
  }

  return (
    <div className='fixed z-50 left-0 right-0 mx-auto top-[6rem]'>
      <div className='flex justify-center'>
        <div className='bg-white w-[35%] px-6 py-3 z-30 rounded-xl grid justify-center'>
          <p className='text-center font-gilda text-2xl'>{props.innerText}</p>

          <div className='flex justify-center'>
            <button onClick={() => closeToast()} className='w-min mt-3 text-lg font-gilda bg-[#EEEEEE] cursor-pointer text-[#222831] py-2 px-8 rounded-3xl' type='button'>Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalToastComponent