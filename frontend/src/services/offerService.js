import axios from 'axios'
import axiosConfig from "./axiosConfig";

const offerUrl = "/offers"
axios.defaults.headers.common = {
    "Content-Type": "application/json"
}

export const postOffer = (offerDTO) =>
    axiosConfig.axiosInstance
        .post(offerUrl, offerDTO)
        .then((response) => response.data);

export const getOffers = () =>
    axiosConfig.axiosInstance
        .get(offerUrl)
        .then((response) => response.data)