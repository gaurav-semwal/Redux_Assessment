import React from 'react';
import {Provider} from 'react-redux';
import store from './Redux/Store';
import Tab from './Navigation/Tab';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Tab />
      </Provider>
    </NavigationContainer>
  );
};
export default App;
