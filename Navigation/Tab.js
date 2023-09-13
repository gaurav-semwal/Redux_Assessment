/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from '../Screens/Profile';
import Address from '../Screens/Address';
import Calender from '../Screens/Calender';
import {Location, User} from '../Svg/index';

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
      <TabBar.Screen
        name="Calender"
        component={Calender}
        options={{
          headerShown: false,
          tabBarIcon: () => <User width={27} height={27} color={'blue'} />,
        }}
      />
    </TabBar.Navigator>
  );
};
export default Tab;
