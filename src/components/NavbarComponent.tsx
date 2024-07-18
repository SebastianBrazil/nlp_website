"use client"

import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'

const NavbarComponent = () => {
    const router = useRouter();

    const goToHome = () => {
      router.push('/');
    }

    const goToGallery = () => {
      router.push('/gallery');
    }
  
    const goToAbout = () => {
      router.push('/about');
    }
  
    const goToContact = () => {
      router.push('/contact');
    }

    return (
        <>
            <header>
                <div className='h-[110px] w-screen bg-[#343434]'>
                    {/* <div className="w-screen h-[500px] relative">
                        <Image
                            fill={true}
                            placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPs/w8AAiMBkMscdekAAAAASUVORK5CYII="
                            priority={true}
                            className=""
                            src={"/assets/heroPlaceholder.png"}
                            alt="Hero Image"
                            sizes="100vw"
                        />
                    </div> */}
                    <p>bruh</p>
                </div>
                <nav>
                    <div className='w-screen h-[60px] bg-slate-300 flex justify-center'>
                        <div className='w-96 grid items-center'>
                            <div className='flex justify-around'>
                            <a className='cursor-pointer' onClick={()=>{goToHome()}}>Home</a>
                            <a className='cursor-pointer' onClick={()=>{goToAbout()}}>About Us</a>
                            <a className='cursor-pointer' onClick={()=>{goToGallery()}}>Gallery</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default NavbarComponent
