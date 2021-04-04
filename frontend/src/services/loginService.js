import axios from "axios";


const loginUrl = '/auth/login'
export const loginUser = (loginDTO) =>
    axios.post(loginUrl, loginDTO).then((response) => response.data);