import { IGalleryDisplayProps } from '@/interfaces/interface'
import Image from 'next/image'
import React from 'react'

const GalleryCardComponent = (props: IGalleryDisplayProps) => {

    const openModal = () => {
        document.body.classList.add("overflow-hidden");
        
        props.setTopTitle(props.title);
        props.setTopDescription(props.description);
        props.setTopTags(props.tags);
        props.setTopPhotos(props.photos);

        props.setIsModalOpen(true);
    }

    return (
        <div className='border rounded-3xl border-[#222831] w-[320px] h-[320px]'>
            {
                props.photos.length > 0 ?
                    <div className="w-full h-[80%] bg-[#222831] rounded-t-3xl grid place-items-center">
                        <Image className="rounded-3xl p-1 max-h-[256px] w-auto" width={350} height={350} loading="lazy" src={props.photos[0]} alt="Home Image" />
                    </div>
                    :
                    <div className="w-full h-[80%] bg-[#222831] rounded-t-3xl grid place-items-center">
                        <Image className="rounded-3xl p-1 max-h-[256px] w-auto" width={350} height={350} loading="lazy" src={"/assets/heroPlaceholder.png"} alt="Home Image" />
                    </div>
            }

            <p className='font-gilda text-black text-center pt-1'>{props.title}</p>

            <div className='grid items-center'>
                <button onClick={() => { openModal() }} className='bg-[#372abc] text-[#EEEEEE] font-gilda tracking-wide mx-10 mt-1 rounded-full'>Click Here To Expand</button>
            </div>
        </div>
    )
}

export default GalleryCardComponent