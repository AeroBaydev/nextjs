const API_BASE_URL = 'https://api.aerobay.in/api'; // For internal API calls (adjust as needed)
import axios from 'axios';

// Create an instance of axios
const apiClient = axios.create({
    baseURL: API_BASE_URL, // Base URL for internal API
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkFlcm9iYXlAeW9wbWFpbC5jb20iLCJpYXQiOjE3MzczNTAwNzUsImV4cCI6MTczNzM1MzY3NX0.nUjsmRduZs43YFjUOrLDoc0GxjRKiVPIpfnAtCMvnvA`
    },
});

// Add a request interceptor to include token
apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('authToken'); // Example: Retrieve token from localStorage
        if (token) {
            config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkFlcm9iYXlAeW9wbWFpbC5jb20iLCJpYXQiOjE3MzczNTAwNzUsImV4cCI6MTczNzM1MzY3NX0.nUjsmRduZs43YFjUOrLDoc0GxjRKiVPIpfnAtCMvnvA`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

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
