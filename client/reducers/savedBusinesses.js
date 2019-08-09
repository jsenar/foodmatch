import { ADD_SAVED_BUSINESS, REMOVE_SAVED_BUSINESS } from '../actions/actionTypes';

export function savedBusinesses(state = [], action) {
  switch (action.type) {
    case ADD_SAVED_BUSINESS:
      return [...state, action.payload ];
    case REMOVE_SAVED_BUSINESS:
      let newArray = state.slice()
      newArray.splice(action.payload, 1)
      return newArray  
    default: 
      return state;
  }
}