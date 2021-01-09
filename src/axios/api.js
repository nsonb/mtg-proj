import axios from 'axios';

const URL = 'https://api.magicthegathering.io/v1/'

// get random cards
export const getRandomCards = ( number = 34) => {
    return axios.get(URL + 'cards', {
        params: {
            random: true,
            pageSize: number
        }
    })
    .then((res) => {
        console.log(res)
        return res;
    })
}

