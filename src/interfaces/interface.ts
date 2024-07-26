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
}

export interface IGalleryDisplayProps {
    setIsModalOpen: Dispatch<SetStateAction<boolean>>
}

export interface IGalleryCreate {
    id: number,
    title: string, 
    description: string,
    tags: string[],

    photo1: string,
    photo2: string,
    photo3: string,
    photo4: string,
    photo5: string,
    photo6: string,
    photo7: string,
    photo8: string,
    photo9: string,

    createdOn: Date,
    updatedOn: Date,
    IsPrivateNote: boolean
    IsDeleted: boolean
}