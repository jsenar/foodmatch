import React from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { addSavedBusiness } from '../actions/addSavedBusiness';

export function SaveButton(props) {
  return  (
    <Button 
      onClick={() => props.addSavedBusiness(props.business)}
      disabled={props.savedBusinesses.find(business => business.alias === props.business.alias)}>
      Save to Group
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
      addSavedBusiness: business => {
        dispatch(addSavedBusiness(business))
      }
    }
  })
(SaveButton);