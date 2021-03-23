import axios from 'axios'

const inquiryUrl = "/inquiries"
axios.defaults.headers.common = {
    "Content-Type": "application/json"
}
export const postInquiry = (newInquiry) =>
    axios.post(inquiryUrl, newInquiry)
        .then((response) => response.data)

export const getInquiries = () =>
    axios.get(inquiryUrl).then((response) => response.data)
