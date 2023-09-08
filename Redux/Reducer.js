const ProfileReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_PROFILE_SUCCESS': {
      return action.payload;
    }
    default:
      return state;
  }
};

const AddressReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_ADDRESS_SUCCESS': {
      return action.payload;
    }
    default:
      return state;
  }
};

export {ProfileReducer, AddressReducer};
