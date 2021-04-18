import axios from 'axios';

// base URL to make requests

const instance = axios.create({
    baseURL: "https://master-blog-api.herokuapp.com/api"
});

export default instance;