import { BASE_API } from "../utils/constants"

export async function getCategoriasApi() {
    try {
        
        const url = `${BASE_API}/api/categorias/`;
        const response = await fetch(url);
        const result = await response.json();

        return result;

    } catch (error) {
        throw error 
    }
}

export async function addCategoryApi(data, token) {
    try {

        const formData= new FormData();
        formData.append('image', data.image);
        formData.append('title', data.title);

        const url = `${BASE_API}/api/categorias/`
        const params = {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: formData,
        };

        const response = await fetch(url, params);
        const result = await response.json();

        return result;

    } catch (error) {
        throw error
    }
}

export async function updateCategoryApi(id, data, token) {

    try {

        const formdata = new FormData();
        formdata.append('title', data.title);
        if(data.image) formdata.append('image', data.image);
        
        const url = `${BASE_API}/api/categorias/${id}/`;
        const params = {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: formdata
        }

        const response = await fetch(url, params);
        const result = await response.json();

        return result;

    } catch (error) {
        throw error
    }
}

export async function deleteCategoryApi(id, token) {
    try {
        const url = `${BASE_API}/api/categorias/${id}/`
        const params = {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        const response = await fetch(url, params);
        const result = await response.json();

        return result;
    } catch (error) {
        throw error
    }
}