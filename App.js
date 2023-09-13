import React from 'react';
import {Provider} from 'react-redux';
import store from './Redux/Store';
import Tab from './Navigation/Tab';
import {NavigationContainer} from '@react-navigation/native';
import Calender from './Screens/Calender';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Calender />
      </Provider>
    </NavigationContainer>
  );
};
export default App;
