import React, { useState, useEffect, useContext } from 'react';
import Card from './Card';
import { CardsContext } from '../context/CardContext'

const CardList = () => {
    const { initCards, cards, getPage, totalCard } = useContext(CardsContext);
    let renderedCard = 0;
    let renderedList;
    useEffect(() => {
        initCards();
    }, [])

    renderedList = cards === null ? null : cards.map(card => {
        if(card.multiverseid !== undefined) {
            renderedCard++;
            return <Card card = {card} key={card.id}/>
        } else {
            return null
        }
        
    })
    const style = {
        display: 'flex',
        flexWrap: 'wrap',
        height: '92%',
        width: '92%',
        overflowY: 'scroll',
        overflowX: 'hidden',
        padding: '4%',
        paddingTop: '1%'
    }

    return (
        <div style={style}>
            <p>{renderedCard} of {totalCard} results.</p>
            <button 
                className='hover' 
                onClick={() => {
                }}
            > next page </button>
            <button 
                className='hover' 
                onClick={() => {
                }}
            > previous page </button>
            {renderedList}
        </div>
    )
}



export default CardList;