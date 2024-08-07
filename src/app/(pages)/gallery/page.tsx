"use client"

import GalleryCardComponent from '@/components/GalleryCardComponent'
import LayoutComponent from '@/components/LayoutComponent'
import GalleryDisplayComponent from '@/components/GalleryDisplayComponent'
import { IGalleryCreate } from '@/interfaces/interface'
import { getGalleryPage, getGalleryPageAmount } from '@/utils/utils'
import React, { useEffect, useState } from 'react'

const Page = () => {
    const [isPhotosLoaded, setIsPhotosLoaded] = useState<boolean>(false);
    const [photoGal, setPhotoGal] = useState<IGalleryCreate[]>();
    const [pageCount, setPageCount] = useState<number>(1);
    const [pageAmount, setPageAmount] = useState<number>(1);

    const [displayedTitle, setDisplayedTitle] = useState<string>("");
    const [displayedDescription, setDisplayedDescription] = useState<string>("");
    const [displayedTags, setDisplayedTags] = useState<string[]>([]);
    const [displayedPhotos, setDisplayedPhotos] = useState<string[]>([]);

    useEffect(() => {
        const asyncGet = async () => {
            try {
                const retrievedData: IGalleryCreate[] = await getGalleryPage(String(pageCount))
                if (retrievedData.length > 0) {
                    let swappedData: IGalleryCreate[] = [];

                    for (let i = retrievedData.length; i > 0; i--) {
                        swappedData.push(retrievedData[i - 1])
                    }

                    setPhotoGal(swappedData);

                    setDisplayedTitle(swappedData[0].title)
                    setDisplayedPhotos(swappedData[0].photos);
                    setDisplayedDescription(swappedData[0].description);
                    setDisplayedTags(swappedData[0].tags);
                }

                const pAmount: number = await getGalleryPageAmount();
                if (pAmount > 0) {
                    setPageAmount(pAmount);
                }

                setIsPhotosLoaded(true);
            } catch (e) {
                alert(e);
            }
        }

        asyncGet();
    }, [pageCount])

    const increasePageCount = () => {
        if (pageCount < pageAmount) {
            setPageCount(pageCount + 1);
            console.log("increased")
        }
    }

    const decreasePageCount = () => {
        if (pageCount > 1) {
            setPageCount(pageCount - 1);
            console.log("decreased")
        }
    }

    return (
        <LayoutComponent isHero={true} passState="public" heroTags="" heroSrc="/assets/heroPlaceholder.png" heroAlt="Hero Image" >
            <div className="flex justify-center my-10">
                <main className="w-full max-w-[1920px]">

                    <div className="flex justify-center mb-10">
                        <p className="text-2xl font-gilda">Here you can find examples of the work NLP has done for its clients.</p>
                    </div>

                    {
                        isPhotosLoaded ?
                            photoGal ?
                                <div>
                                    <div className='flex justify-center'>
                                        <div className='grid w-[95%] grid-cols-11'>
                                            {photoGal.map((photoGroup, index) => {
                                                return (
                                                    <div className='col-span-1' key={index}>
                                                        <GalleryCardComponent setDisplayedTitle={setDisplayedTitle} setDisplayedDescription={setDisplayedDescription} setDisplayedTags={setDisplayedTags} setDisplayedPhotos={setDisplayedPhotos} title={photoGroup.title} description={photoGroup.description} tags={photoGroup.tags} photos={photoGroup.photos} />
                                                    </div>
                                                )
                                            })}

                                            {/* <div className='flex'>
                                                    <button onClick={() => { decreasePageCount() }}>{"<"}</button>
                                                    <p>{String(pageCount)}</p>
                                                    <button onClick={() => { increasePageCount() }}>{">"}</button>
                                                </div> */}
                                        </div>
                                    </div>
                                    {displayedTitle !== "" && displayedPhotos.length > 0 && <GalleryDisplayComponent displayedTitle={displayedTitle} displayedDescription={displayedDescription} displayedTags={displayedTags} displayedPhotos={displayedPhotos} />}
                                </div>
                                :
                                <div>
                                    <div className='flex justify-center'>
                                        <div className='w-[95%]'>
                                            <p className='text-center text-2xl font-gilda'>There are no photos avaiable right now</p>
                                        </div>
                                    </div>
                                </div>
                            :
                            <div>
                                <div className='flex justify-center'>
                                    <div className='w-[95%]'>
                                        <p className='text-center text-2xl font-gilda'>Loading Gallery...</p>
                                    </div>
                                </div>
                            </div>
                    }
                </main>
            </div>
        </LayoutComponent>
    )
}

export default Page
