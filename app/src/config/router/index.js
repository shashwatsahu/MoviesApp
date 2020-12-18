import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MoviesList from '../../components/moviesList/MoviesList.component';
import ShortList from '../../components/shortList/ShortList.component';
import {NavigationContainer} from '@react-navigation/native';
import {ic_heart} from '../../assets/images/ic_heart';
import {ic_home} from '../../assets/images/ic_home';
import Scaling from '../../assets/device/normalize';
import colors from '../../assets/colors';

const {heightScale} = Scaling;
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      tabBarOptions={{
        activeTintColor: colors.purple,
        inactiveTintColor: colors.veryLightBlue,
      }}>
      <Tab.Screen
        name="Home"
        component={MoviesList}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Image
              style={[styles.tabImage, {tintColor: color}]}
              source={ic_heart}
              resizeMode={'contain'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ShortLists"
        component={ShortList}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Image
              style={[styles.tabImage, {tintColor: color}]}
              source={ic_home}
              resizeMode={'contain'}
            />
          ),
        }}
      />
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

const styles = StyleSheet.create({
  tabImage: {
    height: heightScale(12),
    tintColor: colors.veryLightBlue,
  },
});
