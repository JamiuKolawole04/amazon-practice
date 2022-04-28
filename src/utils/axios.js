import axios from 'axios';

const instance = axios.create({
    baseURL: "https://amazon-server-practice.herokuapp.com/" // THE API (backend) URL
});

export default instance;