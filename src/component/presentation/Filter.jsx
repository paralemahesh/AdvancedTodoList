import React from 'react';

const Filter = props => {
    return (
        <button 
            className={props.isActive ? 'active link': 'link'}
            onClick={() => props.onClickHandler(props.type)}
            disabled={props.isActive}>
                {props.children}
        </button>
    )
}

export default Filter;