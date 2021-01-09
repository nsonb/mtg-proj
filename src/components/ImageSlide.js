import React from 'react';
import background from '../img/background.jpg'

const ImageSlide = () => {

    const style = {
        position: 'absolute',
        top: 0, 
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: '-5',
        overflow: 'hidden'
    }

    const backgroundStyle = {
        minWidth: '100%',
        height: '100%',
        objectFit: 'cover'
    }

    return (
        <div style={style}>
            <img style = {backgroundStyle} src={background} alt = 'background decor'/>
        </div>
    )
}



export default ImageSlide;