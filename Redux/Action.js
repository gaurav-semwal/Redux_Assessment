import axios from 'axios';

export const getaddressdata = () => {
  return dispatch => {
    axios
      .get('https://random-data-api.com/api/v2/addresses')
      .then(response => {
        dispatch({type: 'FETCH_ADDRESS_SUCCESS', payload: response.data});
      })
      .catch(error => {
        console.error('Error fetching address data:', error);
      });
  };
};
export const getprofiledata = () => {
  return dispatch => {
    axios
      .get('https://random-data-api.com/api/v2/users')
      .then(response => {
        dispatch({type: 'FETCH_PROFILE_SUCCESS', payload: response.data});
      })
      .catch(error => {
        console.error('Error', error);
      });
  };
};
