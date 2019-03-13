import React from 'react';
import { YellowBox } from 'react-native';

import { createBottomTabNavigator, createAppContainer, createSwitchNavigator, createStackNavigator} from "react-navigation";
import { FontAwesome } from "react-native-vector-icons";
import Connect from './Screens/Connect';
import Home from './Screens/Home';
import Settings from './Screens/Settings';
import Search from './Screens/Search';
import Configuration from './Screens/Configuration';
export default class App extends React.Component {
  render() {
    return (
      <AppContainer
      />
    );
  }

  constructor(props) {
    super(props);
    this.state = { 
      
    };
  }
}
const Tabs = createBottomTabNavigator(
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
);
const AppNavigator = createSwitchNavigator({
  ConnectScreen: {
    screen: Connect,
  },
  Tabs,
})

YellowBox.ignoreWarnings([
    'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?'
]);

const AppContainer = createAppContainer(AppNavigator);