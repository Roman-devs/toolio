import axios from 'axios'

const inquiryUrl = "/inquiries"

    export const postInquiry = (newInquiry) =>
            axios.post(inquiryUrl, { newInquiry })
            .then((response) => response.data)
