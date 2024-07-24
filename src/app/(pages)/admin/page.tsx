import LayoutPublic from '@/components/LayoutPublic'
import React from 'react'

const page = () => {
    return (
        <LayoutPublic>
            <div>
                <div className="flex justify-center my-10">
                    <main className="w-[70%] grid justify-center">

                        <p className='text-xl font-gilda text-center pb-10'>Admin Login</p>
                        
                        <p className='text-xl font-gilda text-center'>Username</p>
                        <input className='border border-black' type="text" />

                        <p className='text-xl font-gilda text-center'>Password</p>
                        <input className='border border-black' type="text" />

                        <button className='mt-10 bg-gray-400'>Enter</button>
                    </main>
                </div>
            </div>
        </LayoutPublic>
    )
}

export default page
