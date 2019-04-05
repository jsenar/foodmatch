import React from 'react';
import SearchForm from './SearchForm';
import axios from 'axios';
import { connect } from 'react-redux';
import ResultList from './ResultList';
import { data } from '../testData';
import { Link } from 'react-router-dom';

class SearchPage extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      queriedBusinesses: [],
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
        <Link to='/create'>View Saved Restaurants</Link>
        <ResultList businesses={this.state.queriedBusinesses} />
      </div>
    );
  }
}

export default connect(
  (state) => {
    return {
      savedBusinesses: state.savedBusinesses
    }
  }, null
)(SearchPage);