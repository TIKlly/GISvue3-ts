
import axios from 'axios';
const http = axios.create({
    baseURL: '',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Max-Age': '86400',
        'Access-Control-Expose-Headers': 'Content-Length, X-JSON',
    },
    timeout: 5000,

})


http.interceptors.request.use(
    config => {
        config.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token')
        return config

    },
    error => {
        return Promise.reject(error)
    }
)

http.interceptors.response.use(
    response => {
        if ([401, 403, 500, 404, 400, 200, 201].includes(response.status)) {
            localStorage.removeItem('token');
            if (response.status !== 202) {
                // window.location.href = '/login';
            }
        }
        return response
    }
    , error => {
        return Promise.reject(error)
    }
)


export default http;
