"use client"

import HeroComponent from '@/components/HeroComponent'
import LayoutPublic from '@/components/LayoutPublic'
import Image from 'next/image'
import React from 'react'

const Page = () => {
    return (
        <LayoutPublic>
            <div>
                <HeroComponent classTags={""} src={"/assets/heroPlaceholder.png"} alt={"Hero Timage"} />
                <div className="flex justify-center my-10">
                    <main className="w-[70%]">

                        <div className="">
                            <p className="text-xl font-gilda">This is the Gallery page.</p>
                        </div>

                        <div className='border rounded-3xl border-black w-[300px] h-[400px]'>
                            <div className="w-full h-1/2 relative">
                                <Image
                                    fill={true}
                                    placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPs/w8AAiMBkMscdekAAAAASUVORK5CYII="
                                    loading="lazy"
                                    className="rounded-t-3xl"
                                    src={"/assets/heroPlaceholder.png"}
                                    alt="Home Image"
                                // sizes="50vw"
                                />
                            </div>
                        </div>

                    </main>
                </div>
            </div>
        </LayoutPublic>
    )
}

export default Page
