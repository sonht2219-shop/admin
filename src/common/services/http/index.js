import axios from 'axios';
import {apiURL} from "@/common/environtments";
import {buildRequestHeaders} from "@/common/services/helper";
const http = axios.create({
    baseURL: apiURL,
    timeout: 2 * 60 * 1000,
})

const errorHandler = (error) => Promise.reject(error)

http.interceptors.request.use((config) => ({
    ...config,
    headers: buildRequestHeaders()
}), errorHandler)

http.interceptors.response.use((response) => Promise.resolve(response), errorHandler)

export default http
