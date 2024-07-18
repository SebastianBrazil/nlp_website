import Image from 'next/image'
import React from 'react'

const HeroComponent = () => {
    return (
        <>
            <section>
                <div>
                    <Image width={1920} height={500} className='w-screen h-[500px]' src={'/assets/placeholder.png'} alt="Hero Image" />
                </div>
            </section>
        </>
    )
}

export default HeroComponent
