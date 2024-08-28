"use client"

import GalleryCardComponent from '@/components/GalleryCardComponent'
import LayoutComponent from '@/components/formatting/LayoutComponent'
import ModalCreateComponent from '@/components/ModalCreateComponent'
import { IGalleryObject, IRequestObject, IResponseObject } from '@/interfaces/interface'
import { getGalleryPage } from '@/utils/utils-gallery'
import React, { useEffect, useState } from 'react'
import GalleryDisplayComponent from '@/components/GalleryDisplayComponent'
import ModalToastComponent from '@/components/ModalToastComponent'

const Page = () => {
    const [checkToken, setCheckToken] = useState<boolean>()
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [renderSubmit, setRenderSubmit] = useState<boolean>(false);

    const [isPhotosLoaded, setIsPhotosLoaded] = useState<boolean>(false);
    const [photoGal, setPhotoGal] = useState<IGalleryObject[]>();
    const [pageCount, setPageCount] = useState<number>(1);
    const [pageAmount, setPageAmount] = useState<number>(1);

    const [filterTag, setFilterTag] = useState<string>("");
    const [filterTitle, setFilterTitle] = useState<string>("");
    const [displayedPhotoGroup, setDisplayedPhotoGroup] = useState<IGalleryObject>();

    const [openToast, setOpenToast] = useState<boolean>(false);
    const [innerText, setInnerText] = useState<string>();

    useEffect(() => {
        const asyncGet = async () => {
            try {
                let requestData: IRequestObject = {
                    isPeNo: true,
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
                setInnerText("An Error Has Occurred While Trying To Load The Job Notes, Please Try Again Later");
                setOpenToast(true);
            }
        }

        if (checkToken === true) {
            asyncGet();
        } else {
            if (sessionStorage.getItem("NLP_LoginToken")) {
                setCheckToken(true);
                asyncGet();
            } else {
                setCheckToken(false);
            }
        }
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
    const openCreateModal = () => {
        setIsModalOpen(true);
        document.body.classList.add("overflow-hidden");
    }

    return (
        <>
            {
                checkToken === undefined &&
                <LayoutComponent passState="dummyAdmin" isHero={false} heroTags="" heroSrc="n/a" heroAlt="No Image" >
                    <div>
                        <div className="flex justify-center my-10">
                            <main className="w-[70%]">
                                <p className='text-xl font-gilda text-center'>Verifying Authorization...</p>
                            </main>
                        </div>
                    </div>
                </LayoutComponent>
            }
            {
                checkToken === false &&
                <LayoutComponent passState="public" isHero={false} heroTags="" heroSrc="n/a" heroAlt="No Image" >
                    <div>
                        <div className="flex justify-center my-10">
                            <main className="w-[70%]">
                                <p className='text-xl font-gilda text-center'>Access Denied. Please Return To Main Website</p>
                            </main>
                        </div>
                    </div>
                </LayoutComponent>
            }
            {
                checkToken === true &&
                <LayoutComponent passState="admin" isHero={false} heroTags="" heroSrc="n/a" heroAlt="No Image" >
                    {isModalOpen && <ModalCreateComponent renderSubmit={renderSubmit} setRenderSubmit={setRenderSubmit} isPrivate={true} setIsModalOpen={setIsModalOpen} />}

                    <div>
                        <div className="flex justify-center my-10">
                            <main className="w-full max-w-[1920px]">
                                <p className='text-5xl font-gilda text-center'>Admin Job Notes</p>

                                <div className='flex justify-center my-6'>
                                    <button onClick={() => { openCreateModal() }} className='py-2 px-4 rounded-2xl bg-[#EEEEEE] text-[#222831] border-2 border-black text-2xl font-gilda'>Create Personal Note</button>
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
                                                            <div className='grid grid-cols-3'>
                                                                <div className='col-span-1 flex justify-center'>
                                                                    {
                                                                        pageCount < pageAmount ?
                                                                            <button className='' onClick={() => { decreasePageCount() }}>{"<"}</button>
                                                                            :
                                                                            <button className='text-gray-300 cursor-not-allowed' onClick={() => { decreasePageCount() }}>{"<"}</button>
                                                                    }
                                                                </div>
                                                                <div className='col-span-1 flex justify-center'>
                                                                    <p>{String(pageCount)}</p>
                                                                </div>
                                                                <div className='col-span-1 flex justify-center'>
                                                                    {
                                                                        pageCount > 1 ?
                                                                            <button className='' onClick={() => { increasePageCount() }}>{">"}</button>
                                                                            :
                                                                            <button className='text-gray-300 cursor-not-allowed' onClick={() => { increasePageCount() }}>{">"}</button>
                                                                    }
                                                                </div>
                                                            </div>

                                                            <input value={filterTitle} onChange={(e) => { setFilterTitle(e.target.value) }} placeholder='Title' className='w-full border border-black' type="text" />
                                                            <input value={filterTag} onChange={(e) => { setFilterTag(e.target.value) }} placeholder='Tags' className='w-full border border-black my-2' type="text" />

                                                            {
                                                                filterTag === "" && filterTitle === "" ?
                                                                    <div className='flex justify-between'>
                                                                        <button className=' ' onClick={() => { setRenderSubmit(!renderSubmit) }} type='button'>Filter</button>
                                                                        <button className='' onClick={() => { setFilterTitle(""); setFilterTag(""); setRenderSubmit(!renderSubmit) }} type='button'>Clear</button>
                                                                    </div>
                                                                    :
                                                                    <div className='flex justify-between'>
                                                                        <button onClick={() => { setRenderSubmit(!renderSubmit) }} type='button'>Filter</button>
                                                                        <button className='' onClick={() => { setFilterTitle(""); setFilterTag(""); setRenderSubmit(!renderSubmit) }} type='button'>Clear</button>
                                                                    </div>
                                                            }
                                                        </div>
                                                    </div>
                                                </div>

                                                {
                                                    displayedPhotoGroup && <GalleryDisplayComponent renderSubmit={renderSubmit} setRenderSubmit={setRenderSubmit} modifyShow={true} displayedPhotoGroup={displayedPhotoGroup} />
                                                }
                                            </div>
                                            :
                                            <div>
                                                <div className='flex justify-center'>
                                                    <div className='w-[95%]'>
                                                        <p className='text-center text-2xl font-gilda'>There are no notes avaiable right now</p>
                                                    </div>
                                                </div>
                                            </div>
                                        :
                                        <div>
                                            <div className='flex justify-center'>
                                                <div className='w-[95%]'>
                                                    <p className='text-center text-2xl font-gilda'>Loading Notes...</p>
                                                </div>
                                            </div>
                                        </div>
                                }

                                {
                                    openToast && innerText &&
                                    <ModalToastComponent innerText={innerText} openToast={openToast} setOpenToast={setOpenToast} />
                                }
                            </main>
                        </div>
                    </div>
                </LayoutComponent>
            }
        </>
    )
}

export default Page
