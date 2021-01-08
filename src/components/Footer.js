import React from 'react';

const Footer = () => {
    const style = {
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '100vw',
        height: '3em',
        zIndex: '5',
        background: 'black',
        color: 'white'
    }
    return (
        <div style = {style}>
            Footer
        </div>
    )
}

export default Footer;