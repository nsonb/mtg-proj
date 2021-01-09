import React, {useState, useEffect} from 'react';
import Card from './Card';
import { getRandomCards } from '../axios/api';

const CardList = () => {
    const [cards, setCards] = useState(null);
    let renderedList;
    
    useEffect(() => {
        getRandomCards().then((data) => {
            setCards(data.data.cards);
        });
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
            {renderedList}
        </div>
    )
}



export default CardList;