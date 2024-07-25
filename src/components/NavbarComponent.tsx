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
                <div className='h-[110px] w-screen bg-[#222831]'>
                    <div className='h-[110px] flex justify-between'>
                        <div className='grid items-center'>
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
                            <a onClick={() => { goToHome() }} className='cursor-pointer text-[#EEEEEE] text-7xl pl-10 font-gilda tracking-wide'>NLP</a>
                        </div>
                        <div className='grid items-center mr-10'>
                            <button onClick={() => { goToContact() }} className='bg-[#ad3232] text-[#EEEEEE] font-beau py-2 text-4xl px-10 tracking-wider rounded-full'>Contact</button>
                        </div>
                    </div>
                </div>
                <nav>
                    <div className='w-screen h-[60px] bg-[#EEEEEE] flex justify-center'>
                        <div className='w-[450px] grid items-center'>
                            <div className='flex justify-between'>
                                <a className='cursor-pointer tracking-wide font-beau text-3xl' onClick={() => { goToHome() }}>Home</a>
                                <a className='cursor-pointer tracking-wide font-beau text-3xl' onClick={() => { goToAbout() }}>About Us</a>
                                <a className='cursor-pointer tracking-wide font-beau text-3xl' onClick={() => { goToGallery() }}>Gallery</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default NavbarComponent
