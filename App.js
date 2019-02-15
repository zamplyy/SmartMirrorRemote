import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Connect from './Screens/Connect';
import Home from './Screens/Home';
export default class App extends React.Component {
  render() {
    return (
      <AppContainer
        /*ref={nav => {
          this.navigator = nav;
        }}*/
      />
    );
  }

  constructor(props) {
    super(props);
    this.state = { 
      
    };
  }
}

const AppNavigator = createStackNavigator(
  {
    HomeScreen: Home,
    ConnectScreen: Connect,
  },
  {
    initialRouteName: 'ConnectScreen',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const AppContainer = createAppContainer(AppNavigator);

