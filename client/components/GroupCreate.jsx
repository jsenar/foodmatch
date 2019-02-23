import React from 'react';
import SearchForm from './SearchForm';
import axios from 'axios';

class GroupCreate extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      queriedBusinesses: [],
      savedBusinesses: []
    };

    this.search = this.search.bind(this);
  }

  search({term, location}) {
    const locale = 'en_US';
    axios.post('/api/search',{
      term,
      location,
      locale
    }).then((res) => {
      this.setState({queriedBusinesses: res.data.search.business});
    }).catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <div>
        <h3>Search for Restaurants</h3>
        <SearchForm search={this.search}/>
        {/* {this.state.queriedBusinesses.map( (business) => {
          return (
            <h4 key={business.alias}>{business.name}</h4>
          )
        })} */}
        {/* Search Results */}
      </div>
    );
  }
}

export default GroupCreate;