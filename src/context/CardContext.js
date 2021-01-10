import React, { createContext,  useState } from 'react';
import { getCardsWithParam, getRandomCards, getPageLastParam } from '../axios/api';

export const CardsContext = createContext();
export const CardsContextProvider = (props) => {
    const [ cards, setCards ] = useState(null);
    const [ maxPage, setMaxPage ] = useState(1);

    const initCards = () => {
        getRandomCards().then((data) => {
            setCards(data.data.cards);
        });
    }

    const setCardsWithParam = (params) => {
        getCardsWithParam(params).then((data) => {
            setCards(data.data.cards);
        });
    }

    const getPage = (page) => {
        getPageLastParam(page).then((data) => {
            setCards(data.data.cards);
        });
    }

    return (
        <CardsContext.Provider value={{cards, initCards, setCardsWithParam, getPage}}>
            {props.children}
        </CardsContext.Provider>
    );
}