import axios from 'axios';

const URL = 'https://api.magicthegathering.io/v1/'

// get random cards
export const getRandomCards = async ( number = 34) => {
    const res = await axios.get(URL + 'cards', {
        params: {
            random: true,
            pageSize: number
        }
    });
    console.log(res);
    return res;
}

export const getCardsWithParam = async () => {
    return
}

