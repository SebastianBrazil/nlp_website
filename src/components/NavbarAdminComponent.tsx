"use client"

import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'

const NavbarAdminComponent = () => {
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
                    <div className='flex justify-between'>
                        <div>
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
                            <p className='text-white'>No Limits Painting</p>
                        </div>
                        <div>
                            <button className='bg-red-400'>Contact</button>
                        </div>
                    </div>
                </div>
                <nav>
                    <div className='w-screen h-[60px] bg-[#EEEEEE] flex justify-center'>
                        <div className='w-96 grid items-center'>
                            <div className='flex justify-between'>
                                <a className='cursor-pointer font-gilda text-2xl' onClick={() => { goToHome() }}>Home</a>
                                <a className='cursor-pointer font-gilda text-2xl' onClick={() => { goToAbout() }}>About Us</a>
                                <a className='cursor-pointer font-gilda text-2xl' onClick={() => { goToGallery() }}>Gallery</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default NavbarAdminComponent
