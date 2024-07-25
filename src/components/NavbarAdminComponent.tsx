"use client"

import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'

const NavbarAdminComponent = () => {
    const router = useRouter();

    const goToAdminHome = () => {
        router.push('/admin/landing');
    }

    const goToAdminGallery = () => {
        router.push('/admin/galleryMod');
    }

    const goToJobNotes = () => {
        router.push('/admin/jobNotes');
    }

    const signOut = () => {
        router.push('/');
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
                            <a onClick={() => { goToAdminHome() }} className='cursor-pointer text-[#EEEEEE] text-7xl pl-10 font-gilda tracking-wide'>NLP</a>
                        </div>
                        <div className='grid items-center mr-10'>
                            <p className='text-white font-beau tracking-wider py-2 text-5xl px-10 rounded-full'>Administer</p>
                        </div>
                    </div>
                </div>
                <nav>
                    <div className='w-screen h-[60px] bg-[#EEEEEE] flex justify-center'>
                        <div className='w-[500px] grid items-center'>
                            <div className='flex justify-between'>
                                <a className='cursor-pointer font-gilda tracking-wide text-2xl' onClick={() => { goToAdminHome() }}>Home</a>
                                <a className='cursor-pointer font-gilda tracking-wide text-2xl' onClick={() => { goToAdminGallery() }}>Gallery</a>
                                <a className='cursor-pointer font-gilda tracking-wide text-2xl' onClick={() => { goToJobNotes() }}>Job Notes</a>
                                <a className='cursor-pointer font-gilda tracking-wide text-2xl' onClick={() => { signOut() }}>Sign Out</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default NavbarAdminComponent
