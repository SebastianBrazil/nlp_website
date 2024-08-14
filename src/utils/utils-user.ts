import { IResponseObject, ISubmitData, IToken } from "@/interfaces/interface";

const urlU: string = "https://nlp-db-api.azurewebsites.net/";

export const login = async (loginUser: ISubmitData) => {
    const res = await fetch(urlU + "NLP_User/Login", {
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