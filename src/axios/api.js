import axios from 'axios';

const URL = 'https://api.magicthegathering.io/v1/'

// get random 100 cards
export const getRandomCards = () => {
    return axios.get(URL + 'cards', {
        params: {
            random: true,
            pageSize: 33
        }
    })
    .then((res) => {
        console.log(res)
        return res;
    })
}