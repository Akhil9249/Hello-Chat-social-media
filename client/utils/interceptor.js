import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:3000/user",
});

// 401 - UnAuthorised
//GET RESPONSE
//POST REQUEST

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        // console.log("error.response.status");
        if (error.response.status === 401) {
            const response = await axiosInstance("/refresh-token");
            logcalStorage.setItem("token", response.data.accessToken);
            window.location.reload();
            // localStorage.clear()
            // window.location.href = "/"
        }
        return Promise.reject(error);
    }
);

// Attach Token
axiosInstance.interceptors.request.use(
    (request) => {
        console.log("it is interceptor");
        const token = localStorage.getItem("token");
        console.log(token,"====token");
        // if (!token) {
        //     return;
        // }
        if (token) {
            request.withCredentials = true;
            request.headers.Authorization = token;
        }
        //    console.log(request);
        return request;
    },
    (error) => error
);
