"use client"

import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'

const NavbarAdminComponent = () => {
    const router = useRouter();

    const goToAdminHome = () => {
        router.push('/admin/landingHere992341653');
    }

    const goToAdminGallery = () => {
        router.push('/admin/galleryMod572061057');
    }

    const goToJobNotes = () => {
        router.push('/admin/jobNotesCreate194610463');
    }

    const signOut = () => {
        sessionStorage.removeItem("NLP_LoginToken");
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
                            <p className='text-[#EEEEEE] font-beau tracking-wider py-0 text-[44px] px-10 rounded-full'>Administrator</p>
                        </div>
                    </div>
                </div>
                <nav>
                    <div className='w-screen h-[60px] bg-[#EEEEEE] flex justify-center'>
                        <div className='w-[550px] grid items-center'>
                            <div className='flex justify-between'>
                                <a className='text-[#222831] cursor-pointer font-gilda tracking-wide text-3xl' onClick={() => { goToAdminHome() }}>Home</a>
                                <a className='text-[#222831] cursor-pointer font-gilda tracking-wide text-3xl' onClick={() => { goToAdminGallery() }}>Gallery</a>
                                <a className='text-[#222831] cursor-pointer font-gilda tracking-wide text-3xl' onClick={() => { goToJobNotes() }}>Job Notes</a>
                                <a className='text-[#222831] cursor-pointer font-gilda tracking-wide text-3xl' onClick={() => { signOut() }}>Sign Out</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default NavbarAdminComponent
