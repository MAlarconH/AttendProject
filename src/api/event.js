import { BASE_API } from "../utils/constants"

export async function getEventApi() {
    try {
        const url = `${BASE_API}/api/events/`;
        const response = await fetch(url);
        const result = await response.json();

        return result;
    } catch (error) {
        throw error;
    }
}

export async function addEventApi(data, token) {
    try {
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("time", data.time);
        formData.append("date", data.date);
        formData.append("category", data.category);
        formData.append("active", data.active);

        const url = `${BASE_API}/api/events/`
        const params = {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formData
        };

        const response = await fetch(url, params);
        const result = await response.json();
        
        return result;

    } catch (error) {
        throw error
    }
} 