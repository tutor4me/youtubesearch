import React, { useState } from 'react';

const SearchBar = ({ defaultSearchTerm, onSearchSubmit }) => {
  const [term, setTerm] = useState('');

  const onSubmitForm = (e) => {
    e.preventDefault();
    onSearchSubmit(term);
  };

  return (
    <div className='search-bar ui segment'>
      <form className='ui form' onSubmit={onSubmitForm}>
        <div className='field'>
          <label>Search Videos: </label>
          <input
            type='text'
            placeholder={defaultSearchTerm}
            value={term}
            onChange={(e) => {
              setTerm(e.target.value);
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
