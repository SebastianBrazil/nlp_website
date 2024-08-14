"use client"

import LayoutComponent from '@/components/formatting/LayoutComponent'
import React, { useEffect, useState } from 'react'

const Page = () => {
    const [checkToken, setCheckToken] = useState<boolean>()

    useEffect(() => {
        if (sessionStorage.getItem("NLP_LoginToken")) {
            setCheckToken(true);
        } else {
            setCheckToken(false);
        }
    }, [])

    return (
        <>
            {
                checkToken === undefined &&
                <LayoutComponent passState="dummyAdmin" isHero={false} heroTags="" heroSrc="n/a" heroAlt="No Image" >
                    <div className="flex justify-center my-10">
                        <main className="w-[70%]">
                            <p className='text-xl font-gilda text-center'>Verifying Authorization...</p>
                        </main>
                    </div>
                </LayoutComponent>
            }
            {
                checkToken === false &&
                <LayoutComponent passState="public" isHero={false} heroTags="" heroSrc="n/a" heroAlt="No Image" >
                    <div className="flex justify-center my-10">
                        <main className="w-[70%]">
                            <p className='text-xl font-gilda text-center'>Access Denied. Please Return To Main Website</p>
                        </main>
                    </div>
                </LayoutComponent>
            }
            {
                checkToken === true &&
                <LayoutComponent passState="admin" isHero={false} heroTags="" heroSrc="n/a" heroAlt="No Image" >
                    <div className="flex justify-center my-10">
                        <main className="w-[70%]">

                            <p className='text-5xl font-gilda text-center'>Admin Landing Page</p>
                            <p className='text-3xl pt-5 font-gilda text-center'>Signed in successfully - Welcome!</p>

                        </main>
                    </div>
                </LayoutComponent>
            }
        </>
    )
}

export default Page
