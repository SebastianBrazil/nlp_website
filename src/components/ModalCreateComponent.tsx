import { IGalleryObject, IModalCreateProps } from '@/interfaces/interface'
import React, { useEffect, useState } from 'react'
import DummyDisplayComponent from './DummyDisplayComponent';
import { createNewGalleryGroup } from '@/utils/utils-gallery';

const ModalCreateComponent = (props: IModalCreateProps) => {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [singleTag, setSingleTag] = useState<string>("");
    const [tags, setTags] = useState<string[]>([]);
    const [photos, setPhotos] = useState<string[]>([]);

    const [titleError, setTitleError] = useState<boolean>(false);
    const [descriptionError, setDescriptionError] = useState<boolean>(false);
    const [tagError, setTagError] = useState<boolean>(false);
    const [photoError, setPhotoError] = useState<boolean>(false);
    const [hasBeenWarned, setHasBeenWarned] = useState<boolean>(false);

    const [isEnabled, setIsEnabled] = useState<boolean>(true)

    const closeModal = () => {
        props.setIsModalOpen(false);
        document.body.classList.remove("overflow-hidden");
    }

    const submitAddGallery = async () => {
        const time = new Date();

        let data: IGalleryObject = {
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

        if (props.isPrivate === true) {
            data.isPrivateNote = true;
        }

        if (hasBeenWarned === false) {
            let isValid: boolean = true;

            if (data.title === "") {
                setTitleError(true);
                setHasBeenWarned(true);
                isValid = false;
            }
            if (data.description === "") {
                setDescriptionError(true);
                setHasBeenWarned(true);
                isValid = false;
            }
            if (data.tags.length === 0) {
                setTagError(true);
                setHasBeenWarned(true);
                isValid = false;
            }
            if (data.photos.length === 0) {
                setPhotoError(true);
                setHasBeenWarned(true);
                isValid = false;
            }

            if (isValid) {
                submitData(data);
            }
        } else {
            submitData(data);
        }
    }

    const submitData = async (passedData: IGalleryObject) => {
        setIsEnabled(false);

        try {
            const response = await createNewGalleryGroup(passedData);
            if (response) {
                closeModal();

                setTitle("");
                setDescription("");
                setSingleTag("");
                setTags([]);
                setPhotos([]);
            }
        } catch (e) {
            // console.log("Uh: " + e);
        }

        setIsEnabled(true);
    }

    const pressedEnterTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            addTags();
        }
    }

    const addTags = () => {
        let formatTag = singleTag.trim();

        if (formatTag !== "" && tags.indexOf(formatTag) === -1) {
            setTags(prevTags => [...prevTags, formatTag]);
            setSingleTag("");
            setHasBeenWarned(false);
        }
    }

    const removeTags = (tagToDelete: string) => {
        setTags(prevTags => {
            const updatedTags = prevTags.filter(tag => tag !== tagToDelete);
            return updatedTags;
        });

        setHasBeenWarned(false);
    }

    const addImg = (e: React.ChangeEvent<HTMLInputElement>) => {
        let reader = new FileReader();
        let file = e.target.files?.[0];

        if (file) {
            reader.readAsDataURL(file);
            reader.onload = () => {
                setPhotos(prevImgs => [...prevImgs, reader.result as string]);
            };
            setHasBeenWarned(false);
        }
    }

    const removePhotos = (photoToDelete: string) => {
        setPhotos(prevPhotos => {
            const updatedPhotos = prevPhotos.filter(photo => photo !== photoToDelete);
            return updatedPhotos;
        });

        setHasBeenWarned(false);
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
            <div className='bg-white z-30 w-[90%] max-w-[1728px] rounded-xl left-0 right-0 my-20 mx-auto'>
                <div className="w-full h-[95%] grid">
                    <form id='galForm' action={() => submitAddGallery()}>
                        <div className='grid justify-center mt-10 mb-6'>
                            <label className='mb-2 text-3xl font-gilda text-center' htmlFor="title">Title</label>
                            <input onChange={(e) => { setTitle(e.target.value); setHasBeenWarned(false); }} value={title} placeholder='Title' name="title" id='title' className='pl-2 text-2xl border border-black w-[600px] font-gilda' type="text" />
                        </div>

                        <div className='grid justify-center my-6'>
                            <label className='mb-2 text-3xl font-gilda text-center' htmlFor="description">Description</label>
                            <textarea placeholder='Description' rows={5} onChange={(e) => { setDescription(e.target.value); setHasBeenWarned(false); }} value={description} name="description" id='description' className='pl-2 text-2xl border border-black w-[600px] font-gilda'></textarea>
                        </div>

                        <div className='grid justify-center my-6'>
                            <label className='mb-2 text-3xl font-gilda text-center' htmlFor="tag">Tags</label>
                            <div className='flex justify-between w-[600px]'>
                                <input onChange={(e) => { setSingleTag(e.target.value); setHasBeenWarned(false); }} onKeyUp={(e) => pressedEnterTag(e)} value={singleTag} placeholder='Single Tag' name="tag" id='tag' className='pl-2 w-[70%] text-2xl border border-black font-gilda' type="text" />
                                <button type='button' onClick={() => { addTags(); }} className='bg-[#0e2b8d] text-[#EEEEEE] px-3 font-gilda py-0 text-2xl tracking-wider rounded-full ml-3'>Add Tag</button>
                            </div>

                            <div className='flex h-auto flex-wrap w-[600px]'>
                                {
                                    tags.length > 0 && tags.map((tag, index) => {
                                        return (
                                            <div className='flex mr-3 mt-4 py-2 px-4 rounded-2xl bg-[#EEEEEE] border-2 border-black' key={index}>
                                                <button type='button' onClick={() => { removeTags(tag) }} className='mr-2'>
                                                    <svg className='grid self-center' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" /></svg>
                                                </button>

                                                <p className='text-[#222831] text-2xl font-gilda'>{tag}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <div className='grid justify-center'>
                            <label className='mb-2 text-3xl font-gilda text-center' htmlFor="image">Add Images</label>
                            <input onChange={(e) => addImg(e)} name="image" id='image' className='pl-2 py-2 text-2xl border bg-white border-black font-gilda' type="file" />

                            <div className='flex h-auto flex-wrap w-[600px]'>
                                {
                                    photos.length > 0 && photos.map((photo, index) => {
                                        return (
                                            <div className='flex mr-3 mt-4 py-2 px-4 rounded-2xl bg-[#EEEEEE] border-2 border-black' key={index}>
                                                <button type='button' onClick={() => { removePhotos(photo) }} className='mr-2'>
                                                    <svg className='grid self-center' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" /></svg>
                                                </button>

                                                <p className='text-[#222831] text-2xl font-gilda'>Image {index + 1}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <div className='grid justify-center'>
                            <p className='text-[#222831] mt-8 font-gilda text-4xl'>* How It Looks *</p>
                        </div>

                        <DummyDisplayComponent modifyShow={false} displayedTitle={title} displayedDescription={description} displayedTags={tags} displayedPhotos={photos} />

                        {
                            hasBeenWarned === true &&
                            <div>
                                {
                                    titleError && <p className='text-[#ad3232] text-3xl font-gilda text-center'>Warning: Title Is Empty</p>
                                }
                                {
                                    photoError && <p className='text-[#ad3232] text-3xl font-gilda text-center'>Warning: No Photos Added</p>
                                }
                                {
                                    descriptionError && <p className='text-[#b1a10f] text-3xl font-gilda text-center'>Warning: Description Is Empty</p>
                                }
                                {
                                    tagError && <p className='text-[#b1a10f] text-3xl font-gilda text-center'>Warning: No Tags Assigned</p>
                                }

                                <p className='text-3xl font-gilda text-center'>Press Submit Again To Bypass Warning</p>
                            </div>
                        }

                        <div className='flex justify-center my-6'>
                            {
                                isEnabled ?
                                    <input type='submit' className='bg-[#0e2b8d] cursor-pointer text-[#EEEEEE] py-2 px-6 text-2xl rounded-3xl font-gilda' />
                                    :
                                    <button type='button' className='bg-[#0e2b8d] text-[#EEEEEE] py-2 px-6 text-2xl rounded-3xl font-gilda'>Submitting, Please Wait</button>
                            }
                        </div>
                    </form>
                </div>

                <div className='grid justify-center pb-6'>
                    <button type='button' className='text-2xl w-min bg-[#EEEEEE] cursor-pointer text-[#222831] py-2 px-8 rounded-3xl font-gilda' onClick={() => { closeModal() }}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default ModalCreateComponent