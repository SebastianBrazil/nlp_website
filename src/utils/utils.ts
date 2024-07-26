import { IGalleryCreate, ISubmitData, IToken } from "@/interfaces/interface";

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

export const createNewGalleryGroup = async (passedData: IGalleryCreate) => {
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
