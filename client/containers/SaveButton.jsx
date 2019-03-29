import React from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { addSavedBusiness } from '../actions/addSavedBusiness';

export function SaveButton(props) {
  return  (
    <React.Fragment>
      <Button onClick={() => props.addSavedBusiness(props.business)}>Save to Group</Button>
    </React.Fragment> 
  )
}

export default connect(
  null, 
  (dispatch) => {
    return {
      addSavedBusiness: business => {
        dispatch(addSavedBusiness(business))
      }
    }
  })
(SaveButton);