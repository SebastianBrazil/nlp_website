"use client"

import GalleryCardComponent from '@/components/GalleryCardComponent'
import GalleryDisplayComponent from '@/components/GalleryDisplayComponent'
import LayoutComponent from '@/components/formatting/LayoutComponent'
import { IGalleryObject, IRequestObject, IResponseObject } from '@/interfaces/interface'
import { getGalleryPage } from '@/utils/utils-gallery'
import React, { useEffect, useState } from 'react'

const Page = () => {
    const [isPhotosLoaded, setIsPhotosLoaded] = useState<boolean>(false);
    const [photoGal, setPhotoGal] = useState<IGalleryObject[]>();
    const [pageCount, setPageCount] = useState<number>(1);
    const [pageAmount, setPageAmount] = useState<number>(1);
    const [renderSubmit, setRenderSubmit] = useState<boolean>(false);

    const [filterTag, setFilterTag] = useState<string>("");
    const [filterTitle, setFilterTitle] = useState<string>("");

    const [displayedPhotoGroup, setDisplayedPhotoGroup] = useState<IGalleryObject>();

    useEffect(() => {
        const asyncGet = async () => {
            try {
                let requestData: IRequestObject = {
                    isPeNo: false,
                    isDe: false,
                    pageCount: pageCount.toString(),
                    filterTag: filterTag,
                    filterTitle: filterTitle,
                }

                const retrievedData: IResponseObject = await getGalleryPage(requestData);

                if (retrievedData.items.length > 0) {
                    let swappedData: IGalleryObject[] = [];

                    for (let i = retrievedData.items.length; i > 0; i--) {
                        swappedData.push(retrievedData.items[i - 1])
                    }

                    setPhotoGal(swappedData);

                    setDisplayedPhotoGroup(swappedData[0])
                }

                if (retrievedData.totalPages > 0) {
                    setPageAmount(retrievedData.totalPages);
                }

                setIsPhotosLoaded(true);
            } catch (e) {
                // alert(e);
            }
        }

        asyncGet();
    }, [pageCount, renderSubmit])

    const increasePageCount = () => {
        if (pageCount < pageAmount) {
            setPageCount(pageCount + 1);
        }
    }

    const decreasePageCount = () => {
        if (pageCount > 1) {
            setPageCount(pageCount - 1);
        }
    }

    return (
        <LayoutComponent isHero={true} passState="public" heroTags="" heroSrc="/assets/heroPlaceholder.png" heroAlt="Hero Image" >
            <div className="flex justify-center my-10">
                <main className="w-full max-w-[1920px]">

                    <div className="flex justify-center mb-10">
                        <p className="text-4xl font-gilda">Here you can find examples of the work NLP has done for its clients.</p>
                    </div>

                    {
                        isPhotosLoaded ?
                            photoGal ?
                                <div>
                                    <div className='flex justify-center'>
                                        <div className='grid w-[95%] grid-cols-11'>
                                            <div className='col-span-9'>
                                                <div className='grid grid-cols-9'>
                                                    {photoGal.map((photoGroup, index) => {
                                                        return (
                                                            <div className='col-span-1' key={index}>
                                                                <GalleryCardComponent setDisplayedPhotoGroup={setDisplayedPhotoGroup} photoGroup={photoGroup} />
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>

                                            <div className='col-span-2'>
                                                <div className='flex'>
                                                    <button onClick={() => { decreasePageCount() }}>{"<"}</button>
                                                    <p>{String(pageCount)}</p>
                                                    <button onClick={() => { increasePageCount() }}>{">"}</button>
                                                </div>
                                                <input value={filterTitle} onChange={(e) => { setFilterTitle(e.target.value) }} placeholder='Title' className='w-full border border-black' type="text" />
                                                <input value={filterTag} onChange={(e) => { setFilterTag(e.target.value) }} placeholder='Tags' className='w-full border border-black' type="text" />
                                                <button onClick={() => { setRenderSubmit(!renderSubmit) }} type='button'>check</button>
                                                <button onClick={() => { setFilterTitle(""); setFilterTag(""); setRenderSubmit(!renderSubmit) }} type='button'>reset</button>
                                            </div>
                                        </div>
                                    </div>

                                    {
                                        displayedPhotoGroup && <GalleryDisplayComponent renderSubmit={null} setRenderSubmit={null} modifyShow={false} displayedPhotoGroup={displayedPhotoGroup} />
                                    }
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
