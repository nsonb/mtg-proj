import axios from 'axios';

const URL = 'https://api.magicthegathering.io/v1/'

export default axios.create({
    baseURL = URL
})