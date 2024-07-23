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
                            <p className="col-span-1 font-martel">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                            <div className="col-span-1"></div>
                        </div>

                    </main>
                </div>
            </div>
        </LayoutPublic>
    )
}

export default page
