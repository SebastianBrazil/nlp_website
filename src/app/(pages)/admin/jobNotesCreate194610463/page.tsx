"use client"

import GalleryCardComponent from '@/components/GalleryCardComponent'
import GalleryDisplayComponent from '@/components/GalleryDisplayComponent'
import LayoutComponent from '@/components/LayoutComponent'
import ModalCreateComponent from '@/components/ModalCreateComponent'
import { IGalleryCreate } from '@/interfaces/interface'
import { getJobNotesPage } from '@/utils/utils'
import React, { useEffect, useState } from 'react'

const Page = () => {
    const [checkToken, setCheckToken] = useState<boolean>()
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isPhotosLoaded, setIsPhotosLoaded] = useState<boolean>(false);
    const [photoGal, setPhotoGal] = useState<IGalleryCreate[]>();
    const [pageCount, setPageCount] = useState<number>(1);
    const [pageAmount, setPageAmount] = useState<number>(1);

    const [topTitle, setTopTitle] = useState<string>("");
    const [topDescription, setTopDescription] = useState<string>("");
    const [topTags, setTopTags] = useState<string[]>([]);
    const [topPhotos, setTopPhotos] = useState<string[]>([]);

    useEffect(() => {
        const asyncGet = async () => {
            try {
                const retrievedData: IGalleryCreate[] = await getJobNotesPage(String(pageCount))
                if (retrievedData.length > 0) {
                    let swappedData: IGalleryCreate[] = [];

                    for (let i = retrievedData.length; i > 0; i--) {
                        swappedData.push(retrievedData[i - 1])
                    }

                    setPhotoGal(swappedData);
                }

                // const pAmount: number = await getJobNotesPageAmount();
                // console.log(pAmount)
                // if (pAmount > 0) {
                //     setPageAmount(pAmount);
                //     console.log("Set Amount")
                // }

                setIsPhotosLoaded(true);
            } catch (e) {
                alert(e);
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

    const openCreateModal = () => {
        setIsModalOpen(true);
        document.body.classList.add("overflow-hidden");
    }

    return (
        <>
            {
                checkToken === undefined &&
                <LayoutComponent passState="dummyAdmin" isHero={false} heroTags="" heroSrc="n/a" heroAlt="No Image" >
                    <div className="flex justify-center my-10">
                        <main className="w-[70%]">
                            <p className='text-xl font-gilda text-center'>Verifying Authorization...</p>
                        </main>
                    </div>
                </LayoutComponent>
            }
            {
                checkToken === false &&
                <LayoutComponent passState="public" isHero={false} heroTags="" heroSrc="n/a" heroAlt="No Image" >
                    <div className="flex justify-center my-10">
                        <main className="w-[70%]">
                            <p className='text-xl font-gilda text-center'>Access Denied. Please Return To Main Website</p>
                        </main>
                    </div>
                </LayoutComponent>
            }
            {
                checkToken === true &&
                <LayoutComponent passState="admin" isHero={false} heroTags="" heroSrc="n/a" heroAlt="No Image" >
                    {isModalOpen && <ModalCreateComponent isPrivate={true} setIsModalOpen={setIsModalOpen} />}

                    <div className="flex justify-center my-10">
                        <main className="w-[70%]">

                            <p className='text-xl font-gilda text-center'>Admin Job Notes</p>

                            <button onClick={() => { openCreateModal() }} className='bg-slate-400 mb-10'>Create Personal Note</button>

                            {
                                isPhotosLoaded ?
                                    photoGal ?
                                        <div className='grid grid-cols-3'>
                                            {photoGal.map((photo, index) => {
                                                return (
                                                    <div className='col-span-1 pb-5' key={index}>
                                                        {/* <GalleryCardComponent setTopTitle={setTopTitle} setTopDescription={setTopDescription} setTopTags={setTopTags} setTopPhotos={setTopPhotos} setIsModalOpen={setIsModalOpen} title={photo.title} description={photo.description} tags={photo.tags} photos={photo.photos} /> */}
                                                    </div>
                                                )
                                            })}

                                            {/* <div className='flex'>
                                                <button onClick={() => { decreasePageCount() }}>{"<"}</button>
                                                <p>{String(pageCount)}</p>
                                                <button onClick={() => { increasePageCount() }}>{">"}</button>
                                            </div> */}
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
                    {/* {isModalOpen && topTitle !== "" && topDescription !== "" && topTags.length !== 0 && topPhotos.length !== 0 && <GalleryDisplayComponent setTopTitle={setTopTitle} setTopDescription={setTopDescription} setTopTags={setTopTags} setTopPhotos={setTopPhotos} setIsModalOpen={setIsModalOpen} isAdminEdit={false} topTitle={topTitle} topDescription={topDescription} topTags={topTags} topPhotos={topPhotos} />} */}
                </LayoutComponent>
            }
        </>
    )
}

export default Page