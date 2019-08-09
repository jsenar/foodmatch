import React from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { removeSavedBusiness } from '../actions/savedBusiness';

export function DeleteButton(props) {
  let index = props.savedBusinesses.find(business => business.alias === props.business.alias);
  
  return  (
    <Button 
      onClick={() => props.removeSavedBusiness(index)}>
      Remove
    </Button>
  )
}

export default connect(
  (state) => {
    return {
      savedBusinesses: state.savedBusinesses
    }
  }, 
  (dispatch) => {
    return {
      removeSavedBusiness: index => {
        dispatch(removeSavedBusiness(index))
      }
    }
  })
(DeleteButton);