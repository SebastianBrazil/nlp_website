import React from 'react'

const FooterComponent = () => {
    return (
        <>
            <footer>
                <div className='bg-[#222831] w-full h-[150px] text-center flex flex-col justify-center'>
                    <p className='text-[#EEEEEE] font-gilda text-sm pb-4'>All Rights Reserved</p>
                    <p className='text-[#EEEEEE] font-gilda text-sm'>Suggestions or issues with the website? Email <a className='underline' href="mailto:sebastianbsanchez67@gmail.com">sebastianbsanchez67@gmail.com</a></p>
                    {/* <p className='text-white font-gilda text-sm'>Made by <a className='underline' href="https://www.code-chronicles-sebastian.dev">Sebastian B.</a> in Next.js</p> */}
                    <p className='text-[#EEEEEE] font-gilda text-sm'>Made in Next.js</p>
                </div>
            </footer>
        </>
    )
}

export default FooterComponent
