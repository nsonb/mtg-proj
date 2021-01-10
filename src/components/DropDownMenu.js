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
           <button className='hover' style={displayButton}>{value}</button>
           {display !== true ? null : <div style={dropdown}>{renderedList}</div>}
           
        </div>
    )
}
//<div style={dropdown}>{renderedList}</div>
export default DropDownMenu;

const style = {
    zIndex: '5',
    width: '100%',
    padding: '8px',
    paddingLeft: 0,
    position: 'relative'
}

const displayButton = {
    width: '100%'
}

const dropdown = {
    position: 'absolute',
    top: '2em',
    left: '0em',
    width: '500%'
}