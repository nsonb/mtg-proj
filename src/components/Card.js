import React from 'react';

const Card = ({card}) => {
    const style = {
        margin: '0.2em'
    }

    const imageStyle = {
        width: '250px'
    }
    return (
        <div key={card.id} style={style} className='hover'> 
            <p>{card.name}</p>
            <img src = {card.imageUrl} alt={`'art for card ${card.name}`} style = {imageStyle}/>
        </div>
    )
}

export default Card;