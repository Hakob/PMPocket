import React from 'react';
// import {StyleSheet, Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

import HomeScreen from './src/components/HomeScreen';
import AboutScreen from './src/components/AboutScreen';
import TestScreen from './src/components/TestScreen';
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createMaterialTopTabNavigator(
  {
    'English to German': {
      screen: HomeScreen,
    },
    'German to English': {
      screen: AboutScreen,
    },
    Test: {
      screen: TestScreen,
    },
  },
  {
    initialRouteName: 'English to German',
    contentOptions: {
      activeTintColor: '#e90063',
    },
    tabBarOptions: {
      labelStyle: {
        fontSize: 14,
      },
      style: {
        backgroundColor: '#128C7E',
      },
    },
  },
);

const AppContainer = createAppContainer(AppNavigator);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
