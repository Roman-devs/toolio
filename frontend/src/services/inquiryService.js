import axios from 'axios'
import * as axiosConfig from "./axiosConfig";

const inquiryUrl = "/inquiries"
const userInquiries = "userinquiries"
axios.defaults.headers.common = {
    "Content-Type": "application/json"
}
export const postInquiry = (newInquiry) =>
    axiosConfig.axiosInstance
    .post(inquiryUrl, newInquiry)
        .then((response) => response.data)

export const getInquiries = () =>
    axiosConfig.axiosInstance
        .get(inquiryUrl)
        .then((response) => response.data)

export const getUserInquiries = () =>
    axiosConfig.axiosInstance
        .get(`${inquiryUrl}/${userInquiries}`)
        .then((response) => response.data)

export const getInquiryById = (uuid) =>
    axiosConfig.axiosInstance
        .get(`${inquiryUrl}/${uuid}`)
        .then((response) => response.data)
