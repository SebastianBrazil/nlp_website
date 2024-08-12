import { IGalleryObject, ISubmitData, IToken } from "@/interfaces/interface";

const url = "https://nlp-db-api.azurewebsites.net/";

export const login = async (loginUser: ISubmitData) => {
    const res = await fetch(url + "NLP_User/Login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(loginUser),
    });

    if (!res.ok) {
        const message = "An error has Occurred: " + res.status;
        throw new Error(message);
    }

    const data: IToken = await res.json();
    return data;
};

export const createNewGalleryGroup = async (passedData: IGalleryObject) => {
    const res = await fetch(url + "NLP_Gallery/AddGalleryItem", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(passedData),
    });

    if (!res.ok) {
        const message = "An error has Occurred: " + res.status;
        throw new Error(message);
    }

    const data: IToken = await res.json();
    return data;
};

export const modifyGalleryGroup = async (passedData: IGalleryObject) => {
    const res = await fetch(url + "NLP_Gallery/AddGalleryItem", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(passedData),
    });

    if (!res.ok) {
        const message = "An error has Occurred: " + res.status;
        throw new Error(message);
    }

    const data: IToken = await res.json();
    return data;
};

export const getGalleryPage = async (pageCount: string) => {
    const res = await fetch(url + "NLP_Gallery/GetGalleryItemsPerPage/" + pageCount);
    const data = await res.json();
    return data;
}

export const getGalleryPageAmount = async () => {
    const res = await fetch(url + "NLP_Gallery/GetGalleryPageAmount");
    const data = await res.json();
    return data;
}

export const getJobNotesPage = async (pageCount: string) => {
    const res = await fetch(url + "NLP_Gallery/GetPersonalNoteItemsPerPage/" + pageCount);
    const data = await res.json();
    return data;
}

export const getJobNotesPageAmount = async () => {
    const res = await fetch(url + "NLP_Gallery/GetPersonalNotePageAmount");
    const data = await res.json();
    return data;
}