import { IGalleryObject, IRequestObject } from "@/interfaces/interface";

const urlG: string = "https://nlp-db-api.azurewebsites.net/";

export const createNewGalleryGroup = async (passedData: IGalleryObject) => {
    const res = await fetch(urlG + "NLP_Gallery/AddGalleryItem", {
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

    return await res.json();
};

export const modifyGalleryGroup = async (passedData: IGalleryObject) => {
    const res = await fetch(urlG + "NLP_Gallery/UpdateGalleryItem", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(passedData),
    });

    if (!res.ok) {
        const message = "An error has Occurred: " + res.status;
        throw new Error(message);
    }

    return await res.json();
};

export const getGalleryPage = async (request: IRequestObject) => {
    const urlR = new URL(urlG + "NLP_Gallery/GetGalleryItems");

    Object.keys(request).forEach(key => {
        const value = request[key];

        if (value !== undefined) {
            urlR.searchParams.append(key, value.toString());
        }
    });

    const res = await fetch(urlR);
    return await res.json();
}

export const returnAllTags = async () => {
    const res = await fetch(urlG + "NLP_Gallery/ReturnAllTags");
    return await res.json();
}

export const removeGalleryItem = async (passedData: IGalleryObject) => {
    const res = await fetch(urlG + "NLP_Gallery/RemoveGalleryItem", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(passedData),
    });

    if (!res.ok) {
        const message = "An error has Occurred: " + res.status;
        throw new Error(message);
    }

    return await res.json();
};

export const PermDeleteItem = async (passedData: IGalleryObject) => {
    const res = await fetch(urlG + "NLP_Gallery/PermDeleteItem", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(passedData),
    });

    if (!res.ok) {
        const message = "An error has Occurred: " + res.status;
        throw new Error(message);
    }

    return await res.json();
};

// const pageCount = '1';
// const filterTag = 'October 2019'; // Contains space
// const filterTitle = 'sunset'; // No special characters
// const params: IResponseObject = {
//     pageCount: encodeURIComponent(pageCount), // Though pageCount is numeric, encoding is good practice
//     filterTag: encodeURIComponent(filterTag), // Encodes spaces as %20
//     filterTitle: encodeURIComponent(filterTitle), // No special characters but good practice
//     isPeNo: true, // Boolean value
//     isDe: false   // Another boolean value
// };



// const URLD = new URL('http://api.example.com/api/gallery/GetGalleryItems');

// // Append parameters to the URL
// Object.keys(params).forEach(key => {
//     const value = params[key];
//     if (value !== undefined) {
//         URLD.searchParams.append(key, value.toString());
//     }
// });

// console.log(URLD.toString());