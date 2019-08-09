import React from 'react';
import { connect } from 'react-redux';
import ResultList from './ResultList';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function CreatePage(props) {
  return (
    <div>
      <h3>Saved Restaurants</h3>
      <ResultList businesses={props.savedBusinesses} listType={'create'}/>

      <Button onClick={() => create(props.savedBusinesses)}>
        CREATE
      </Button>
    </div>
  );
}

function create(savedBusinesses) {
  const businesses = savedBusinesses.map( (business) => {
    const { formatted_address } = business.location;
    const img_url = business.photos[0];
    const {name, alias, rating, review_count, price, url} = business;
    return {
      name,
      alias,
      rating,
      review_count,
      price,
      formatted_address,
      img_url,
      url,
    }
  });

  axios.post('api/create', {
    businesses
  }).then((res) => {
    return (
      <Redirect to='/home' />
    );
  }).catch((err) => {
    console.log(err);
  })
}

export default connect(
  (state) => {
    return {
      savedBusinesses: state.savedBusinesses
    }
  }, null
)(CreatePage);