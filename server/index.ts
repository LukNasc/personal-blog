import axios from 'axios';

const Api = axios.create({
    baseURL: "https://personal-blog-lucas-api.herokuapp.com"
})

export default Api;