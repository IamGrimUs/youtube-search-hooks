import React, { useState } from 'react';

const SearchBar = ({ onSearchSubmit }) => {
  const [input, setInput] = useState('');

  const onInputChange = e => {
    setInput(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    onSearchSubmit(input);
  };

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <label>Video Search</label>
          <input onChange={onInputChange} value={input} placeholder="Search..." type="text" id="searchTerm" name="searchTerm" />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
