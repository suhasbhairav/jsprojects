import axios from 'axios';

var axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
    config => {
        const token = window.accessToken ? window.accessToken: 'dummy_token';
        config.headers['Authorization'] = 'Bearer ' + token;
        console.log(config);
        return config;
    },
    error => {
        console.log(error);
        Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use((response) => {
    console.log(response);
    return response
}, function (error){
    return Promise.reject(error);
});

export default axiosInstance;