import React from 'react';
import './SearchBar.css';

const Searchbar = ({searchTodos}) => {
    return (
        <div className='searchBarContainer'>
            <div className='searchBar'><input id="searchBox" onChange={(e) => searchTodos(e.target.value)}></input></div>
        </div>
    )
}

export default Searchbar;