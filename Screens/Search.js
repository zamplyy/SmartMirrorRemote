import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import { Button, Avatar , Input} from 'react-native-elements';

export default class Search extends React.Component {

  render() {
    return (
      <View style= {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>
          You're on the search screen
      </Text>
      </View>
    );
  }
  constructor(props) {
    super(props);
    this.state = { 
    };
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryColor: {
    color : '#00838f'
  },
  primaryLightColor: {
    color : '#4fb3bf'
  },
  primaryDarkColor: {
    color : '#005662'
  },
  primaryTextColor: {
    color : '#ffffff'
  },
});
