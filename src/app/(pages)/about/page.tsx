"use client"

import HeroComponent from '@/components/HeroComponent'
import React from 'react'

const page = () => {
    return (
        <div>
            {/* <HeroComponent fill={true} priority={true} classTags={""} src={"/assets/heroPlaceholder.png"} alt={"Hero Timage"} sizes={"100vw"} /> */}
            <div className="flex justify-center my-10">
                <main className="w-[80%]">

                    <div className="grid grid-cols-2">
                        <p className="col-span-1 font-martel">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        <div className="col-span-1"></div>
                    </div>

                </main>
            </div>
        </div>
    )
}

export default page
