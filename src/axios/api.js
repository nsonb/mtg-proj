import axios from 'axios';

const cardURL = 'https://api.magicthegathering.io/v1/cards?contains=imageUrl';
let lastParam = {}

// get random cards
export const getRandomCards = async ( number = 34) => {
    lastParam = {
        random: false,
        pageSize: number,
    }
    const res = await axios.get(cardURL, {
        params: lastParam
    });
    console.log(res);
    return res;
}

// get list of cards with params
export const getCardsWithParam = async (params, number= 30, page = 1) => {
    params.pageSize = number;
    params.page = page;
    params.contains = 'imageUrl';
    lastParam = params;
    const res = await axios.get(cardURL, {
        params: params
    });
    return res;
}

export const getPageLastParam = async (page = 1) => {
    lastParam.page = page;
    console.log(lastParam);
    const res = await axios.get(cardURL, {
        params: lastParam
    });
    console.log(res);
    return res;
}

