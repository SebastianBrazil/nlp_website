import { Dispatch, SetStateAction } from "react"

export interface HeroProps {
    classTags: string,
    src: string,
    alt: string,
}

export interface IToken {
    token: string
}

export interface ISubmitData {
    username: string,
    password: string
}

export interface IDummyDisplayProps {
    displayedTitle: string, 
    displayedDescription: string,
    displayedTags: string[],
    displayedPhotos: string[],
    modifyShow: boolean
}

export interface IGalleryDisplayProps {
    displayedPhotoGroup: IGalleryObject,
    renderSubmit: boolean | null,
    setRenderSubmit: Dispatch<SetStateAction<boolean>> | null,
    modifyShow: boolean
}

export interface IModalCreateProps {
    isPrivate: boolean,
    renderSubmit: boolean,
    setRenderSubmit: Dispatch<SetStateAction<boolean>>,
    setIsModalOpen: Dispatch<SetStateAction<boolean>>
}

export interface IModalModifyProps {
    renderSubmit: boolean,
    setRenderSubmit: Dispatch<SetStateAction<boolean>>,
    setIsModalOpen: Dispatch<SetStateAction<boolean>>,
    displayedPhotoGroup: IGalleryObject
}

export interface IGalleryCardProps {
    setDisplayedPhotoGroup: Dispatch<SetStateAction<IGalleryObject | undefined>>,
    photoGroup: IGalleryObject
}

export interface IGalleryObject {
    id: number,
    title: string,
    description: string,
    tags: string[],
    photos: string[],
    createdOn: Date,
    updatedOn: Date,
    isPrivateNote: boolean,
    isDeleted: boolean
}

export interface IRequestObject {
    isPeNo: boolean,
    isDe: boolean,
    pageCount: string,
    filterTag?: string,
    filterTitle?: string,
    [key: string]: string | boolean | undefined;
}

export interface IResponseObject {
    items: IGalleryObject[],
    totalPages: number
}

export interface IModalToast {
    setOpenToast: Dispatch<SetStateAction<boolean>>,
    openToast: boolean,
    innerText: string,
}