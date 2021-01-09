import React from 'react';
import Search from './Search'
import Filter from './Filter'

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
            <Filter/>
        </div>
    )
}

export default Header;