import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Text } from 'react-native';

import Login from './screens/Login';
import Home from './screens/Home';

const Routes = createStackNavigator({
  Login:{
    screen: Login,
  },
  Home: {
    screen: Home,
  }
}, {
  initialRouteName: 'Login',
  defaultNavigationOptions: {
    header: null,
  }
})

export default createAppContainer(Routes);
