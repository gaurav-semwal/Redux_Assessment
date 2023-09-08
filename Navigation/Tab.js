/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from '../Screens/Profile';
import Address from '../Screens/Address';
import {Location, User} from '../Asset/index';

const TabBar = createBottomTabNavigator();

const Tab = () => {
  return (
    <TabBar.Navigator>
      <TabBar.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: () => <User width={27} height={27} color={'blue'} />,
        }}
      />
      <TabBar.Screen
        name="Address"
        component={Address}
        options={{
          headerShown: false,
          tabBarIcon: () => <Location width={27} height={27} color={'green'} />,
        }}
      />
    </TabBar.Navigator>
  );
};
export default Tab;
