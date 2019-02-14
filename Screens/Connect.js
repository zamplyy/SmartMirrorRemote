import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input} from 'react-native-elements';

export default class Home extends React.Component {

  static navigationOptions = {
    title: 'Connect To Your RPi',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {
    return (
      <View style= {{flex:'1', justifyContent: 'center' }}>
        
        <Input style= {{padding : 20}}
          placeholder='Your Raspberry Pi:s IP'
          shake={true}
        />

        <Button style= {{padding : 20}}
            title="Connect!"
            onPress= {() => this.props.navigation.navigate('HomeScreen')}
        />
        
        
      </View>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      inputIp: "",
      
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
