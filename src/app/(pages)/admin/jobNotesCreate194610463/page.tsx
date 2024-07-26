"use client"

import LayoutAdmin from '@/components/LayoutAdmin'
import LayoutDummyAdmin from '@/components/LayoutDummyAdmin'
import LayoutPublic from '@/components/LayoutPublic'
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
                <LayoutDummyAdmin>
                    <div>
                        <div className="flex justify-center my-10">
                            <main className="w-[70%]">
                                <p className='text-xl font-gilda text-center'>Verifying Authorization...</p>
                            </main>
                        </div>
                    </div>
                </LayoutDummyAdmin>
            }
            {
                checkToken === false &&
                <LayoutPublic>
                    <div>
                        <div className="flex justify-center my-10">
                            <main className="w-[70%]">
                                <p className='text-xl font-gilda text-center'>Access Denied. Please Return To Main Website</p>
                            </main>
                        </div>
                    </div>
                </LayoutPublic>
            }
            {
                checkToken === true &&
                <LayoutAdmin>
                    <div>
                        <div className="flex justify-center my-10">
                            <main className="w-[70%]">

                                <p className='text-xl font-gilda text-center'>Admin Job Notes</p>

                            </main>
                        </div>
                    </div>
                </LayoutAdmin>
            }
        </>
    )
}

export default Page
