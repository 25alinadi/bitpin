import axios from "axios";

const BASE_URL = "https://api.bitpin.ir/v1/";
const httpClient = axios.create({
    baseURL: BASE_URL,
    headers:{
        'Content-Type': "application/json"
    }
})

export default httpClient;
