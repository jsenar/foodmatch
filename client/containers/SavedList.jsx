import { connect } from 'react-redux';
import ResultList from '../components/ResultList';

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
(ResultList);