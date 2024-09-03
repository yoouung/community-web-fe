import axios from "axios";

const base = "http://localhost:8000";

const authHeader = (config) => {
    // const token = localStorage.getItem("token");
    // if (token) {
    //     config.headers["Authorization"] = `Bearer ${token}`;
    // }
    // return config;
};

const useApi = axios.create({
    baseURL: base,
    headers: {
        ...authHeader.headers,
        "Content-Type": "application/json;charset=UTF-8",
    },
});

useApi.interceptors.request.use(authHeader, (error) => {
    return Promise.reject(error);
});

export default useApi;
