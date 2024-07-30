"use client"

import GalleryCardComponent from '@/components/GalleryCardComponent'
import HeroComponent from '@/components/HeroComponent'
import LayoutPublic from '@/components/LayoutPublic'
import ModalDisplayComponent from '@/components/ModalDisplayComponent'
import { IGalleryCreate } from '@/interfaces/interface'
import { getGalleryPage } from '@/utils/utils'
import React, { useEffect, useState } from 'react'

const Page = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isPhotosLoaded, setIsPhotosLoaded] = useState<boolean>(false);
    const [photoGal, setPhotoGal] = useState<IGalleryCreate[]>();
    const [pageCount, setPageCount] = useState<number>(1);

    const [topTitle, setTopTitle] = useState<string>("");
    const [topDescription, setTopDescription] = useState<string>("");
    const [topTags, setTopTags] = useState<string[]>([]);
    const [topPhotos, setTopPhotos] = useState<string[]>([]);

    useEffect(() => {
        const asyncGet = async () => {
            try {
                const retrievedData: IGalleryCreate[] = await getGalleryPage(String(pageCount))
                if (retrievedData.length > 0) {
                    let swappedData: IGalleryCreate[] = [];

                    for (let i = retrievedData.length; i > 0; i--) {
                        swappedData.push(retrievedData[i-1])
                    }

                    setPhotoGal(swappedData);
                }
                setIsPhotosLoaded(true);
            } catch (e) {
                alert(e);
            }
        }

        asyncGet();
    }, [pageCount])

    return (
        <LayoutPublic>
            <div>
                <HeroComponent classTags={""} src={"/assets/heroPlaceholder.png"} alt={"Hero Timage"} />
                <div className="flex justify-center my-10">
                    <main className="w-[70%] max-w-[1344px]">

                        <div className="flex justify-center mb-10">
                            <p className="text-2xl font-gilda">Here you can find examples of the work NLP has done for its clients.</p>
                        </div>

                        {
                            isPhotosLoaded ?
                                photoGal ?
                                    <div className='grid grid-cols-3'>
                                        {photoGal.map((photo, index) => {
                                            return (
                                                <div className='col-span-1 pb-5' key={index}>
                                                    <GalleryCardComponent setTopTitle={setTopTitle} setTopDescription={setTopDescription} setTopTags={setTopTags} setTopPhotos={setTopPhotos} setIsModalOpen={setIsModalOpen} title={photo.title} description={photo.description} tags={photo.tags} photos={photo.photos} />
                                                </div>
                                            )
                                        })}
                                    </div>
                                    :
                                    <div>
                                        <p>There are no photos available right now</p>
                                    </div>
                                :
                                <div>
                                    <p>Loading Gallery...</p>
                                </div>
                        }
                    </main>
                </div>
            </div>
            {isModalOpen && topTitle !== "" && topDescription !== "" && topTags.length !== 0 && topPhotos.length !== 0 && <ModalDisplayComponent setTopTitle={setTopTitle} setTopDescription={setTopDescription} setTopTags={setTopTags} setTopPhotos={setTopPhotos} setIsModalOpen={setIsModalOpen} isAdminEdit={false} topTitle={topTitle} topDescription={topDescription} topTags={topTags} topPhotos={topPhotos} />}
        </LayoutPublic>
    )
}

export default Page
