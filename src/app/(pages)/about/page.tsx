"use client"

import HeroComponent from '@/components/HeroComponent'
import LayoutPublic from '@/components/LayoutPublic'
import React from 'react'

const page = () => {
    return (
        <LayoutPublic>
            <div>
                <HeroComponent classTags={""} src={"/assets/heroPlaceholder.png"} alt={"Hero Timage"} />
                <div className="flex justify-center my-10">
                    <main className="w-[70%]">

                        <div className="grid grid-cols-2">
                            <p className="text-xl font-gilda">This is the About page.</p>

                            {/* <div className="col-span-1"></div> */}
                        </div>

                    </main>
                </div>
            </div>
        </LayoutPublic>
    )
}

export default page
