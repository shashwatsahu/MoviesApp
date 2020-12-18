import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MoviesList from '../../components/moviesList/MoviesList.component';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName={'Home'}>
      <Tab.Screen name="Home" component={MoviesList} />
      <Tab.Screen name="Settings" component={MoviesList} />
    </Tab.Navigator>
  );
}

export default function AppStackEntry() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
