import React, { createContext,  useState } from 'react';
import { getCardsWithParam, getRandomCards } from '../axios/api';

export const CardsContext = createContext();
export const CardsContextProvider = (props) => {
    const [ cards, setCards ] = useState(null);


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

    return (
        <CardsContext.Provider value={{cards, initCards, setCardsWithParam}}>
            {props.children}
        </CardsContext.Provider>
    );
}