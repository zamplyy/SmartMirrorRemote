import React from 'react';
import { YellowBox } from 'react-native';

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

YellowBox.ignoreWarnings([
    'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?'
]);

const AppContainer = createAppContainer(AppNavigator);

