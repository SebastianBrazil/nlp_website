import { IGalleryCreate, IModalDisplayProps } from '@/interfaces/interface'
import { createNewGalleryGroup } from '@/utils/utils';
import Image from 'next/image';
import React, { useState } from 'react'

const ModalCreateComponent = (props: IModalDisplayProps) => {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");

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
            tags: [""],

            photo1: "",
            photo2: "",
            photo3: "",
            photo4: "",
            photo5: "",
            photo6: "",
            photo7: "",
            photo8: "",
            photo9: "",

            createdOn: time,
            updatedOn: time,
            IsPrivateNote: false,
            IsDeleted: false
        }

        try {
            const response = await createNewGalleryGroup(submitData);
            console.log(response);
        } catch (e) {
            console.log("Uh: " + e);
        }
    }

    return (
        <div className='fixed inset-0 bg-black z-20 bg-opacity-40'>
            <div className='bg-white z-30 w-[90%] h-[90%] absolute top-0 left-0 bottom-0 right-0 m-auto'>
                <div className="w-full h-[90%] bg-[#222831] grid place-items-center">
                    <form action={() => submitAddGallery()}>
                        <div className='grid'>
                            <label className='text-xl font-gilda text-center' htmlFor="username">Title</label>
                            <input autoComplete='on' onChange={(e) => { setTitle(e.target.value) }} value={title} placeholder='Username' name="username" id='username' className='pl-2 border border-black w-full font-gilda' type="text" />
                        </div>

                        <div className='grid'>
                            <label className='text-xl font-gilda text-center' htmlFor="password">Description</label>
                            <input autoComplete='on' onChange={(e) => { setDescription(e.target.value) }} value={description} placeholder='Password' name="password" id='password' className='pl-2 border border-black w-full font-gilda' type="password" />
                        </div>

                        <div className='flex justify-center mt-10'>
                            <button type='submit' className='bg-gray-400 py-2 px-6 rounded-3xl font-gilda'>Enter</button>
                        </div>


                    </form>
                </div>

                <div className='grid items-center'>
                    <button className='pt-8' onClick={() => { closeModal() }}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default ModalCreateComponent
