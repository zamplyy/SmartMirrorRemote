import React from 'react';
import { YellowBox } from 'react-native';

import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import { FontAwesome } from "react-native-vector-icons";
import Connect from './Screens/Connect';
import Home from './Screens/Home';
import Settings from './Screens/Settings';
import Search from './Screens/Search';
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

const AppNavigator = createBottomTabNavigator(
  {
    HomeScreen: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="home" size={30} color={tintColor} />
        )
      }
    },
    ConnectScreen: {
      screen: Connect,
      navigationOptions: {
        tabBarLabel: "Connect",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="plug" size={30} color={tintColor} />
        )
      }
    },
    SearchScreen: {
      screen: Search,
      navigationOptions: {
        tabBarLabel: "Search",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="search" size={30} color={tintColor} />
        )
      }
    },
    SettingsScreen: {
      screen: Settings,
      navigationOptions: {
        tabBarLabel: "Settings",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="wrench" size={30} color={tintColor} />
        )
      }
    },
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

