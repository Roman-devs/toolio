import axios from 'axios'
import axiosConfig from "./axiosConfig";

const inquiryUrl = "/inquiries"
axios.defaults.headers.common = {
    "Content-Type": "application/json"
}
export const postInquiry = (newInquiry) =>
    axiosConfig.axiosInstance
    .post(inquiryUrl, newInquiry)
        .then((response) => response.data)

export const getInquiries = () =>
    axiosConfig.axiosInstance.get(inquiryUrl).then((response) => response.data)

export const getInquiryById = (uuid) =>
    axiosConfig.axiosInstance.get(`${inquiryUrl}/${uuid}`).then((response) => response.data)
