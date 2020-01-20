import React, { useState } from 'react';

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState('');

  return(
    <div className="search-bar">
      <input type="text"
        value={ searchTerm }
        onChange={(event) => { setSearchTerm(event.target.value) }}
      />
      <button 
        type="button"
        onClick={() => props.onClick(searchTerm)}
      >Search!</button>
    </div>
  );
};

export default SearchBar;
