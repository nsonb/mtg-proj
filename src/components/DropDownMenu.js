import React, {useState} from 'react';

const DropDownMenu = ({value, list, change}) => {
    const [display, setDisplay] = useState(false);
    const renderedList = list.map((item) => {
        return (
            <button 
                className='hover' 
                onClick={() => {change(item);setDisplay(!display)}} 
                key={item+1}> 
                {item} 
            </button>
        )
    })
    return (
        <div style={style} onMouseEnter = {() => {setDisplay(!display)}} onMouseLeave = {() => {setDisplay(!display)}} >
           <button className='hover'>{value}</button>
           {display !== true ? null : <div style={dropdown}>{renderedList}</div>}
           
        </div>
    )
}
//<div style={dropdown}>{renderedList}</div>
export default DropDownMenu;

const style = {
    zIndex: '5',
    padding: '8px',
    position: 'relative'
}

const dropdown = {
    position: 'absolute',
    top: '2em',
    left: '0.5em'
}