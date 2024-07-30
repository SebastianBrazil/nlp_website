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

export interface IModalDisplayProps {
    setIsModalOpen: Dispatch<SetStateAction<boolean>>
    setTopTitle: Dispatch<SetStateAction<string>>
    setTopDescription: Dispatch<SetStateAction<string>>
    setTopTags: Dispatch<SetStateAction<string[]>>
    setTopPhotos: Dispatch<SetStateAction<string[]>>

    isAdminEdit: boolean,
    topTitle: string, 
    topDescription: string,
    topTags: string[],
    topPhotos: string[],
}

export interface IGalleryDisplayProps {
    setIsModalOpen: Dispatch<SetStateAction<boolean>>
    setTopTitle: Dispatch<SetStateAction<string>>
    setTopDescription: Dispatch<SetStateAction<string>>
    setTopTags: Dispatch<SetStateAction<string[]>>
    setTopPhotos: Dispatch<SetStateAction<string[]>>

    title: string, 
    description: string,
    tags: string[],
    photos: string[],
}

export interface IGalleryCreate {
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