import { IGalleryCreate, IModalCreateProps } from '@/interfaces/interface'
import { createNewGalleryGroup } from '@/utils/utils';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import GalleryDisplayComponent from './GalleryDisplayComponent';

const ModalCreateComponent = (props: IModalCreateProps) => {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [singleTag, setSingleTag] = useState<string>("");
    const [tags, setTags] = useState<string[]>([]);
    const [photos, setPhotos] = useState<string[]>([]);
    const [imgIterate, setImgIterate] = useState<number>(0);

    const closeModal = () => {
        props.setIsModalOpen(false);
        document.body.classList.remove("overflow-hidden");
    }

    const submitAddGallery = async () => {
        const time = new Date();

        let submitData: IGalleryCreate = {
            id: 0,
            title: title,
            description: description,
            tags: tags,
            photos: photos,

            createdOn: time,
            updatedOn: time,
            isPrivateNote: false,
            isDeleted: false
        }

        if(props.isPrivate === true){
            submitData.isPrivateNote = true;
        }

        try {
            const response = await createNewGalleryGroup(submitData);
            closeModal();

            setTitle("");
            setDescription("");
            setSingleTag("");
            setTags([]);
            setPhotos([]);
            setImgIterate(0);
        } catch (e) {
            console.log("Uh: " + e);
        }
    }

    const pressedEnterTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            addTags();
        }
    }

    const addTags = () => {
        setTags(prevTags => [...prevTags, singleTag]);
        setSingleTag("");
    }

    const handleImg = (e: React.ChangeEvent<HTMLInputElement>) => {
        let reader = new FileReader();
        let file = e.target.files?.[0];

        if (file) {
            reader.readAsDataURL(file);
            reader.onload = () => {
                setPhotos(prevImgs => [...prevImgs, reader.result as string]);
            };
        }
    }

    useEffect(() => {
        const form = document.getElementById("galForm");
        const inputs = form?.querySelectorAll("input");

        inputs?.forEach(input => {
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                }
            });
        });
    }, []);

    return (
        <div className='fixed overflow-scroll inset-0 bg-black z-20 bg-opacity-40'>
            <div className='bg-[#EEEEEE] z-30 w-[90%] left-0 right-0 my-20 mx-auto'>
                <div className="w-full h-[95%] grid">
                    <form id='galForm' action={() => submitAddGallery()}>
                        <div className='grid'>
                            <label className='text-xl font-gilda text-center' htmlFor="title">Title</label>
                            <input onChange={(e) => { setTitle(e.target.value) }} value={title} placeholder='Title' name="title" id='title' className='pl-2 border border-black w-full font-gilda' type="text" />
                        </div>

                        <div className='grid'>
                            <label className='text-xl font-gilda text-center' htmlFor="description">Description</label>
                            <input onChange={(e) => { setDescription(e.target.value) }} value={description} placeholder='Description' name="description" id='description' className='pl-2 border border-black w-full font-gilda' type="text" />
                        </div>

                        <div className='grid'>
                            <label className='text-xl font-gilda text-center' htmlFor="tag">Tags</label>
                            <input onChange={(e) => { setSingleTag(e.target.value) }} onKeyUp={(e) => pressedEnterTag(e)} value={singleTag} placeholder='Tags' name="tag" id='tag' className='pl-2 border border-black w-full font-gilda' type="text" />
                        </div>

                        <div className='grid mb-5'>
                            <label className='text-xl font-gilda text-center' htmlFor="image">Add Imgs</label>
                            <input onChange={(e) => handleImg(e)} name="image" id='image' className='pl-2 border bg-white border-black w-full font-gilda' type="file" />
                        </div>

                        {/* <div className='flex'>
                            {
                                photos.length > 1 && imgIterate > 0 && <button type='button' onClick={() => { setImgIterate(imgIterate - 1) }}>Go back</button>
                            }
                            {
                                photos.length > 0 && <Image width={200} height={200} className='mb-10 w-[200px] h-[200px]' src={photos[imgIterate]} alt="bruh" />
                            }
                            {
                                photos.length > 1 && imgIterate < photos.length - 1 && <button type='button' onClick={() => { setImgIterate(imgIterate + 1) }}>Go Forward</button>
                            }
                        </div> */}

                        <GalleryDisplayComponent displayedTitle={title} displayedDescription={description} displayedTags={tags} displayedPhotos={photos} />

                        <div className='flex justify-center'>
                            <input type='submit' className='bg-gray-400 py-2 px-6 rounded-3xl font-gilda' />
                        </div>
                    </form>
                </div>

                <div className='grid items-center'>
                    <button className='' onClick={() => { closeModal() }}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default ModalCreateComponent
