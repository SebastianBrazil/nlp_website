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

export interface IGalleryDisplayProps {
    displayedTitle: string, 
    displayedDescription: string,
    displayedTags: string[],
    displayedPhotos: string[],
    modifyShow: boolean
}

export interface IModalCreateProps {
    isPrivate: boolean,
    setIsModalOpen: Dispatch<SetStateAction<boolean>>
}

export interface IGalleryCardProps {
    setDisplayedTitle: Dispatch<SetStateAction<string>>,
    setDisplayedDescription: Dispatch<SetStateAction<string>>,
    setDisplayedTags: Dispatch<SetStateAction<string[]>>,
    setDisplayedPhotos: Dispatch<SetStateAction<string[]>>,

    title: string,
    description: string,
    tags: string[],
    photos: string[]
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