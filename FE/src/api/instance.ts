import axios from 'axios';

const instance = axios.create({
    baseURL: "https://be-portfolio-m169aig7p-migu03.vercel.app/api"
})

export default instance