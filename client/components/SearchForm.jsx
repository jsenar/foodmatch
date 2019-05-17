import React, { useState } from 'react';
import { useSearchForm } from './CustomHooks';

export function SearchForm(props) {

  function search() {
    props.search({ term: inputs.term, location: inputs.location })
  }

  const initialState = { term: '', location: ''}

  const {inputs, handleInputChange, handleSubmit} = useSearchForm(initialState, search);
  
  return (
    <div id="search-form">
      <form onSubmit={handleSubmit}>
        <label>Search:
          <input 
            name="term" 
            type="text" 
            value={inputs.term} 
            onChange={handleInputChange} />
        </label>
        <label>Location (City and Zip Code):
          <input 
            name="location" 
            type="text" 
            value={inputs.location} 
            onChange={handleInputChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default SearchForm;
