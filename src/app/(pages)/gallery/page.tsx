"use client"

import GalleryCardComponent from '@/components/GalleryCardComponent'
import HeroComponent from '@/components/HeroComponent'
import LayoutPublic from '@/components/LayoutPublic'
import React from 'react'

const Page = () => {
    return (
        <LayoutPublic>
            <div>
                <HeroComponent classTags={""} src={"/assets/heroPlaceholder.png"} alt={"Hero Timage"} />
                <div className="flex justify-center my-10">
                    <main className="w-[70%] max-w-[1344px]">

                        <div className="flex justify-center mb-10">
                            <p className="text-2xl font-gilda">Here you can find examples of the work NLP has done for its clients.</p>
                        </div>

                        <div className='flex justify-between'>
                            <GalleryCardComponent />
                            <GalleryCardComponent />
                            <GalleryCardComponent />
                        </div>

                    </main>
                </div>
            </div>
        </LayoutPublic>
    )
}

export default Page
