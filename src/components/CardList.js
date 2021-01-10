import React, { useState, useEffect, useContext } from 'react';
import Card from './Card';
import { CardsContext } from '../context/CardContext'

const CardList = () => {
    const { initCards, cards, getPage } = useContext(CardsContext);
    const [ page, setPage] = useState(1);
    let renderedList;
    useEffect(() => {
        initCards();
    }, [])

    renderedList = cards === null ? null : cards.map(card => {
        if(card.multiverseid !== undefined) {
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
            <button 
                className='hover' 
                onClick={() => {
                    console.log(page)
                    setPage(page+1)
                    getPage(page)
                }}
            > next page </button>
            <button 
                className='hover' 
                onClick={() => {
                    console.log(page)
                    setPage(page-1)
                    getPage(page)
                }}
            > previous page </button>
            {renderedList}
        </div>
    )
}



export default CardList;