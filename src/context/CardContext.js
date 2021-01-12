import React, { createContext,  useState } from 'react';
import { getCardsWithParam, getRandomCards, getPageLastParam } from '../axios/api';

export const CardsContext = createContext();
export const CardsContextProvider = (props) => {
    const [ cards, setCards ] = useState(null);
    const [ totalCard, setTotalCard ] = useState(1)
    const [ maxPage, setMaxPage ] = useState(1);

    const initCards = () => {
        getRandomCards().then((res) => {
            setTotalCard(res.headers["total-count"]);
            setCards(res.data.cards);
        });
    }

    const setCardsWithParam = (params) => {
        getCardsWithParam(params).then((res) => {
            setTotalCard(res.headers["total-count"]);
            setCards(res.data.cards);
        });
    }

    const getPage = (page) => {
        getPageLastParam(page).then((res) => {
            setTotalCard(res.headers["total-count"]);
            setCards(res.data.cards);
        });
    }

    return (
        <CardsContext.Provider value={{cards, initCards, setCardsWithParam, getPage, totalCard}}>
            {props.children}
        </CardsContext.Provider>
    );
}