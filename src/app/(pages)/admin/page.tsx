"use client"

import LayoutComponent from '@/components/LayoutComponent';
import { ISubmitData, IToken } from '@/interfaces/interface';
import { login } from '@/utils/utils';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const Page = () => {
    const [usernameVar, setUsernameVar] = useState<string>("");
    const [passwordVar, setPasswordVar] = useState<string>("");
    const router = useRouter();

    const submitLoginAttempt = async () => {
        const submitData: ISubmitData = {
            username: usernameVar,
            password: passwordVar
        }

        try {
            let token: IToken = await login(submitData);
            if (token.token != null) {
                sessionStorage.setItem("NLP_LoginToken", token.token);
                router.push('/admin/landingHere992341653');
            } else {
                console.log("failed token")
            }
        } catch (e) {
            console.log("failed login")
        }
    }

    const pressedEnterPassword = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            submitLoginAttempt()
        }
    }

    useEffect(() => {
        const form = document.getElementById("loginForm");
        const inputs = form?.querySelectorAll("input");

        inputs?.forEach(input => {
            input.addEventListener('keydown', (event) => {
                if (event.key === 'Enter') {
                    event.preventDefault();
                }
            });
        });
    }, []);

    return (
        <LayoutComponent passState="public" isHero={false} heroTags="" heroSrc="n/a" heroAlt="No Image" >
            <div className="flex justify-center my-10">
                <main className="w-[70%] grid justify-center">

                    <p className='text-2xl font-gilda text-center pb-1'>Admin Login</p>
                    <p className='font-gilda text-center pb-10'>If you got here by accident, feel free to return to Home</p>

                    <form id='loginForm' action={() => submitLoginAttempt()}>
                        <div className='grid'>
                            <label className='text-xl font-gilda text-center' htmlFor="username">Username</label>
                            <input autoComplete='on' onChange={(e) => { setUsernameVar(e.target.value) }} value={usernameVar} placeholder='Username' name="username" id='username' className='pl-2 border border-black w-full font-gilda' type="text" />
                        </div>

                        <div className='grid'>
                            <label className='text-xl font-gilda text-center' htmlFor="password">Password</label>
                            <input onKeyUp={(e) => pressedEnterPassword(e)} autoComplete='on' onChange={(e) => { setPasswordVar(e.target.value) }} value={passwordVar} placeholder='Password' name="password" id='password' className='pl-2 border border-black w-full font-gilda' type="password" />
                        </div>

                        <div className='flex justify-center mt-10'>
                            <button type='submit' className='bg-gray-400 py-2 px-6 rounded-3xl font-gilda'>Enter</button>
                        </div>
                    </form>

                </main>
            </div>
        </LayoutComponent>
    )
}

export default Page
