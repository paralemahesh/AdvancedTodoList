import React from 'react';
import './SearchBar.css';
import 'font-awesome/css/font-awesome.min.css';

const Searchbar = ({searchTodos}) => {
    return (
        <div className='searchBarContainer'>
            <div className='searchBar'><input id="searchBox" onChange={(e) => searchTodos(e.target.value)}></input></div>
            <span onClick={() => {const searchBox = document.querySelector("#searchBox"); searchBox.value = ''; searchTodos(""); }}>
                <i className='fas fa-window-close'></i>
            </span>
        </div>
    )
}

export default Searchbar;