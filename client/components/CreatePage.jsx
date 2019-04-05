import React from 'react';
import { connect } from 'react-redux';
import ResultList from './ResultList';

function CreatePage(props) {
  return (
    <div>
      <h3>Saved Restaurants</h3>
      <ul>
        {props.savedBusinesses.map((business) => {
          return (
            <li key={business.alias}>
              {business.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default connect(
  (state) => {
    return {
      savedBusinesses: state.savedBusinesses
    }
  }, null
)(CreatePage);