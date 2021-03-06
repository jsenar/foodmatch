import { ADD_SAVED_BUSINESS, REMOVE_SAVED_BUSINESS } from "./actionTypes";

export function addSavedBusiness(business) {
  return {
    type: ADD_SAVED_BUSINESS,
    payload: business
  }
}

export function removeSavedBusiness(index) {
  return {
    type: REMOVE_SAVED_BUSINESS,
    payload: index
  }
}