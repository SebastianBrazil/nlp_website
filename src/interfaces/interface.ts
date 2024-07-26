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
    isModalOpen: boolean,
    setIsModalOpen: Dispatch<SetStateAction<boolean>>
}

export interface IGalleryDisplayProps {
    isModalOpen: boolean,
    setIsModalOpen: Dispatch<SetStateAction<boolean>>
}