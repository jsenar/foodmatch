import React from 'react';
import SearchForm from './SearchForm';

function search({term, location}) {
  console.log(term);
  console.log(location);
}

function GroupCreate() {
  return (
    <div>
      <h3>Search for Restaurants</h3>
      <SearchForm search={search}/>
      {/* Search List */}
      {/* Search Results */}
    </div>
  );
}



export default GroupCreate;