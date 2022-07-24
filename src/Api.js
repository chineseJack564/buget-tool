import axios from "axios";

const API = axios.create({
    baseURL: "https://glou-back.herokuapp.com/"
})

export default API;