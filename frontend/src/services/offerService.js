import axios from 'axios'
import axiosConfig from "./axiosConfig";

const offerUrl = "/offers"
const byAuth = "receivedoffers"
const byAuthMade = "madeoffers"
const byUserId = "userids"
axios.defaults.headers.common = {
    "Content-Type": "application/json"
}

export const postOffer = (offerDTO) =>
    axiosConfig.axiosInstance
        .post(offerUrl, offerDTO)
        .then((response) => response.data);

export const getAllReceivedOffersByAuth = () =>
    axiosConfig.axiosInstance
        .get(`${offerUrl}/${byAuth}`).then((response) => response.data)

export const getAllMadeOffersByAuth = () =>
    axiosConfig.axiosInstance
        .get(`${offerUrl}/${byAuthMade}`).then((response) => response.data)

export const getAllOffers = () =>
    axiosConfig.axiosInstance
        .get(offerUrl)
        .then((response) => response.data)

export const postUserNameByUserId = (offer) =>
    axiosConfig.axiosInstance
        .post(`${offerUrl}/${byUserId}`, offer)
        .then((response) => response.data)