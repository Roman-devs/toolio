import axios from 'axios'

export const axiosInstance = axios.create();

export function setAxiosAuthToken(token) {
    axiosInstance.defaults.headers.common.Authorization = 'Bearer ' + token
}
