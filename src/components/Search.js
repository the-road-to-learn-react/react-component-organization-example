import React from 'react';

const Search = ({ value, onSearch, children }) =>
  <div>
    {children} <input
      value={value}
      onChange={onSearch}
      type="text"
    />
  </div>

export default Search;
