import React from 'react';
import Search from './Search'

const Header = () => {
    const style = {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100vw',
        height: '4em',
        zIndex: '5',
        background: 'black',
        color: 'white'
    }
    return (
        <div style = {style}>
            <Search/>
        </div>
    )
}

export default Header;