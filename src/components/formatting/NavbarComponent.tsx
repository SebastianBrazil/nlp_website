"use client"

import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'

const NavbarComponent = ({ checkState }: { "checkState": string }) => {
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
            {
                checkState === "public" ?
                    <header>
                        <div className='h-[110px] w-full bg-[#222831]'>
                            <div className='h-[110px] flex justify-between'>
                                <div className='grid items-center'>
                                    {/* <div className="w-full h-[500px] relative">
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
                                    <button onClick={() => { goToContact() }} className='bg-[#ad3232] text-[#EEEEEE] font-beau py-0 text-[44px] px-10 tracking-wider rounded-full'>Contact</button>
                                </div>
                            </div>
                        </div>
                        <nav>
                            <div className='w-full h-[60px] bg-[#EEEEEE] flex justify-center'>
                                <div className='w-[450px] grid items-center'>
                                    <div className='flex justify-between'>
                                        <a className='text-[#222831] cursor-pointer tracking-wide font-beau text-4xl' onClick={() => { goToHome() }}>Home</a>
                                        <a className='text-[#222831] cursor-pointer tracking-wide font-beau text-4xl' onClick={() => { goToAbout() }}>About Us</a>
                                        <a className='text-[#222831] cursor-pointer tracking-wide font-beau text-4xl' onClick={() => { goToGallery() }}>Gallery</a>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </header>
                    :
                    checkState === "dummyAdmin" ?
                        <header>
                            <div className='h-[110px] w-full bg-[#222831]'>
                                <div className='h-[110px] flex justify-between'>
                                    <div className='grid items-center'>
                                        {/* <div className="w-full h-[500px] relative">
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
                                        <p className='text-[#EEEEEE] text-7xl pl-10 font-gilda tracking-wide'>NLP</p>
                                    </div>
                                    <div className='grid items-center mr-10'>
                                        <p className='text-[#EEEEEE] font-beau tracking-wider py-0 text-[44px] px-10 rounded-full'>Administrator</p>
                                    </div>
                                </div>
                            </div>
                            <nav>
                                <div className='w-full h-[60px] bg-[#EEEEEE] flex justify-center'>
                                    <div className='w-[550px] grid items-center'>
                                        <div className='flex justify-between'>
                                            <p className='text-[#222831] font-gilda tracking-wide text-3xl'>Home</p>
                                            <p className='text-[#222831] font-gilda tracking-wide text-3xl'>Gallery</p>
                                            <p className='text-[#222831] font-gilda tracking-wide text-3xl'>Job Notes</p>
                                            <p className='text-[#222831] font-gilda tracking-wide text-3xl'>Sign Out</p>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </header>
                        :
                        checkState === "admin" &&
                        <header>
                            <div className='h-[110px] w-full bg-[#222831]'>
                                <div className='h-[110px] flex justify-between'>
                                    <div className='grid items-center'>
                                        {/* <div className="w-full h-[500px] relative">
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
                                <div className='w-full h-[60px] bg-[#EEEEEE] flex justify-center'>
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
            }
        </>
    )
}

export default NavbarComponent
