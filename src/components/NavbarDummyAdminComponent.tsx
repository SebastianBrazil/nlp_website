"use client"

import React from 'react'

const NavbarDummyAdminComponent = () => {
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
                            <p className='text-[#EEEEEE] text-7xl pl-10 font-gilda tracking-wide'>NLP</p>
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
                                <p className='text-[#222831] font-gilda tracking-wide text-3xl'>Home</p>
                                <p className='text-[#222831] font-gilda tracking-wide text-3xl'>Gallery</p>
                                <p className='text-[#222831] font-gilda tracking-wide text-3xl'>Job Notes</p>
                                <p className='text-[#222831] font-gilda tracking-wide text-3xl'>Sign Out</p>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default NavbarDummyAdminComponent
