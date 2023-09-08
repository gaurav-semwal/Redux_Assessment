import thunk from 'redux-thunk';
import {AddressReducer, ProfileReducer} from './Reducer';
import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  Profile: ProfileReducer,
  Address: AddressReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
