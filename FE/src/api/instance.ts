import axios from 'axios';

const instance = axios.create({
    baseURL: "https://be.miguwebdev.site/api"
})

export default instance