import axios from 'axios'

const inquiryUrl = "/inquiries"

export default function inquiryService(){
    export const postInquiry = (newInquiry) =>
            axios.post(inquiryUrl, { newInquiry })
            .then((response) => response.data)

}