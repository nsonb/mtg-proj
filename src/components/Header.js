import React from 'react';

const Header = () => {
    const style = {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100vw',
        height: '3em',
        zIndex: '5',
        background: 'black',
        color: 'white'
    }
    return (
        <div style = {style}>
            header
        </div>
    )
}

export default Header;