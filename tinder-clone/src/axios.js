import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinder-clone-custom.herokuapp.com/'
})

export default instance;