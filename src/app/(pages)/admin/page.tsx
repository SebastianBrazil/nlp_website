'use client'

import LayoutPublic from '@/components/LayoutPublic'
import { ISubmitData, IToken } from '@/interfaces/interface';
import { login } from '@/utils/utils';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const page = () => {
    const [usernameVar, setUsernameVar] = useState<string>("");
    const [passwordVar, setPasswordVar] = useState<string>("");
    const router = useRouter();

    const submitLoginAttempt = async () => {
        console.log(usernameVar);
        console.log(passwordVar);

        const submitData: ISubmitData = {
            username: usernameVar,
            password: passwordVar
        }

        try {
            let token: IToken = await login(submitData);
            if (token.token != null) {
                sessionStorage.setItem("Token", token.token);
                router.push('/admin/landing');
            } else {
                console.log("failed token")
            }
        } catch (e) {
            console.log("failed login")
        }
    }

    return (
        <LayoutPublic>
            <div>
                <div className="flex justify-center my-10">
                    <main className="w-[70%] grid justify-center">

                        <p className='text-xl font-gilda text-center pb-10'>Admin Login</p>

                        <form action={() => submitLoginAttempt()}>
                            <div className='grid'>
                                <label className='text-xl font-gilda text-center' htmlFor="username">Username</label>
                                <input onChange={(e) => { setUsernameVar(e.target.value) }} value={usernameVar} placeholder='Username' name="username" id='username' className='pl-2 border border-black w-full font-gilda' type="text" />
                            </div>

                            <div className='grid'>
                                <label className='text-xl font-gilda text-center' htmlFor="password">Password</label>
                                <input onChange={(e) => { setPasswordVar(e.target.value) }} value={passwordVar} placeholder='Password' name="password" id='password' className='pl-2 border border-black w-full font-gilda' type="password" />
                            </div>

                            <div className='flex justify-center mt-10'>
                                <button type='submit' className='bg-gray-400 py-2 px-6 rounded-3xl'>Enter</button>
                            </div>
                        </form>

                    </main>
                </div>
            </div>
        </LayoutPublic>
    )
}

export default page
