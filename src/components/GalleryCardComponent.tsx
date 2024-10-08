import { IGalleryCardProps } from '@/interfaces/interface'
import Image from 'next/image'
import React from 'react'

const GalleryCardComponent = (props: IGalleryCardProps) => {

    const setNewGroup = () => {
        props.setDisplayedPhotoGroup(props.photoGroup);
    }

    return (
        <div onClick={() => { setNewGroup() }} className='w-[120px] h-[120px]'>
            {
                props.photoGroup.photos.length > 0 ?
                    <div className="w-full h-full bg-[#222831] rounded-3xl grid place-items-center">
                        <Image className="rounded-3xl p-1 max-h-[120px] w-auto" width={350} height={350} loading="lazy" src={props.photoGroup.photos[0]} alt="Gallery Showcase Image" />
                    </div>
                    :
                    <div className="w-full h-full bg-[#222831] rounded-3xl grid place-items-center">
                        <Image className="rounded-3xl p-1 max-h-[256px] w-auto" width={350} height={350} loading="lazy" src={"/assets/noImg.png"} alt="No Image Available" />
                    </div>
            }
        </div>
    )
}

export default GalleryCardComponent