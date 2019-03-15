import React from 'react';
import SearchForm from './SearchForm';
import axios from 'axios';
import ResultList from './ResultList';
import { data } from '../testData';

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
    if (data && term === "test") {
      this.setState({queriedBusinesses: data});
      return;
    }

    const locale = 'en_US';
    axios.post('/api/search', {
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
        <ResultList businesses={this.state.queriedBusinesses} />
      </div>
    );
  }
}

export default GroupCreate;