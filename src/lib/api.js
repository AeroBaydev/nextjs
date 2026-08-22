import axios from "axios";

const API_BASE_URL = (
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:5050/api"
).replace(/\/$/, "");

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

export async function fetchData(endpoint, options = {}) {
    try {
        const response = await apiClient.get(endpoint, options);
        return response.data;
    } catch (error) {
        console.error('API fetch error:', error.response || error.message);
        throw error.response ? error.response.data : error.message;
    }
}

export async function postData(endpoint, data, options = {}) {
    try {
        const response = await apiClient.post(endpoint, data, options);
        return response.data;
    } catch (error) {
        console.error('API post error:', error.response || error.message);
        throw error.response ? error.response.data : error.message;
    }
}
