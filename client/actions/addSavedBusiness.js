import { ADD_SAVED_BUSINESS } from "./actionTypes";

export function addSavedBusiness(business) {
  return {
    type: ADD_SAVED_BUSINESS,
    payload: business
  }
}