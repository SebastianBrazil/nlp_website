"use client"

import LayoutComponent from '@/components/LayoutComponent';
import { ISubmitData, IToken } from '@/interfaces/interface';
import { login } from '@/utils/utils';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const Page = () => {
    const [usernameVar, setUsernameVar] = useState<string>("");
    const [passwordVar, setPasswordVar] = useState<string>("");
    const [loginFailed, setLoginFailed] = useState<boolean>(false)
    const [tokenFailed, setTokenFailed] = useState<boolean>(false)

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
                setTokenFailed(true);
            }
        } catch (e) {
            setLoginFailed(true);
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

                    <p className='text-5xl font-gilda text-center pb-1'>Admin Login</p>
                    <p className='font-gilda text-3xl text-center pb-10'>If you got here by accident, feel free to return to Home</p>

                    <form id='loginForm' action={() => submitLoginAttempt()}>
                        <div className='grid justify-center mb-6'>
                            <label className='text-3xl mb-2 font-gilda text-center' htmlFor="username">Username</label>
                            <input autoComplete='on' onChange={(e) => { setUsernameVar(e.target.value); setLoginFailed(false); setTokenFailed(false); }} value={usernameVar} placeholder='Username' name="username" id='username' className='pl-2 border text-2xl border-black w-64 font-gilda' type="text" />
                        </div>

                        <div className='grid justify-center'>
                            <label className='text-3xl mb-2 font-gilda text-center' htmlFor="password">Password</label>
                            <input onKeyUp={(e) => pressedEnterPassword(e)} autoComplete='on' onChange={(e) => { setPasswordVar(e.target.value); setLoginFailed(false); setTokenFailed(false); }} value={passwordVar} placeholder='Password' name="password" id='password' className='pl-2 border text-2xl border-black w-64 font-gilda' type="password" />
                        </div>

                        <div className='grid justify-center h-[32px] my-4'>
                            {
                                loginFailed && <p className='text-2xl font-gilda text-[#ad3232]'>Username or Password is Incorrect</p>
                            }
                            {
                                tokenFailed && <p className='text-2xl font-gilda text-[#ad3232]'>Login Failed. Please Try Again</p>
                            }
                        </div>

                        <div className='flex justify-center mt-4'>
                            <button type='submit' className='bg-gray-400 py-2 px-6 rounded-3xl font-gilda'>Enter</button>
                        </div>
                    </form>

                </main>
            </div>
        </LayoutComponent>
    )
}

export default Page
