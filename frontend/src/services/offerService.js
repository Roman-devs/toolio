import axios from 'axios'
import axiosConfig from "./axiosConfig";

const offerUrl = "/offers"
const byAuth = "myoffers"
axios.defaults.headers.common = {
    "Content-Type": "application/json"
}

export const postOffer = (offerDTO) =>
    axiosConfig.axiosInstance
        .post(offerUrl, offerDTO)
        .then((response) => response.data);

export const getAllOffersByAuth = () =>
    axiosConfig.axiosInstance
        .get(`${offerUrl}/${byAuth}`).then((response) => response.data)

export const getAllOffers = () =>
    axiosConfig.axiosInstance
        .get(offerUrl)
        .then((response) => response.data)