import { ADD_SAVED_BUSINESS } from 'client/actions/actionTypes';

export function savedBusinesses(state = [], action) {
  switch (action.type) {
    case ADD_SAVED_BUSINESS:
      return [...state, action.payload ];
    default: 
      return state;
  }
}