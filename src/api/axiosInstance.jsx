import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://lmsapi-production.up.railway.app/api/', 
});


export default axiosInstance;