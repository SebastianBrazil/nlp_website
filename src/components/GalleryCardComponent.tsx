import Image from 'next/image'
import React from 'react'

const GalleryCardComponent = () => {
    return (
        <div className='border rounded-3xl border-[#222831] w-[320px] h-[320px]'>
            <div className="w-full h-[80%] bg-[#222831] rounded-t-3xl grid place-items-center">
                <Image className="rounded-3xl p-1 max-h-[256px] w-auto" width={350} height={350} placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPs/w8AAiMBkMscdekAAAAASUVORK5CYII=" loading="lazy" src={"/assets/heroPlaceholder.png"} alt="Home Image" />
                {/* <Image className="rounded-3xl p-1 max-h-[256px] w-auto" width={350} height={350} placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPs/w8AAiMBkMscdekAAAAASUVORK5CYII=" loading="lazy" src={"/assets/tallimg.jpg"} alt="Home Image" /> */}
            </div>

            <div className='grid items-center'>
                <button className='bg-[#372abc] text-white font-gilda tracking-wide mx-10 mt-5 rounded-full'>Click Here To Expand</button>
            </div>
        </div>
    )
}

export default GalleryCardComponent