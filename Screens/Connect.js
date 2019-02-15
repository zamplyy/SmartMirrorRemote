import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input} from 'react-native-elements';
import SocketIOClient from 'socket.io-client';

export default class Home extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Connect to your RPi',
      
    };
  };
  render() {
    return (
      <View style= {{flex:'1', justifyContent: 'center' }}>
        
        <Input style= {{padding : 20}}
          placeholder='Your Raspberry Pi:s IP'
          onChangeText={(text) => this.setState({inputIp: text})}
        />

        <Button style= {{padding : 20}}
            title="Connect!"
            onPress= {() => this.props.navigation.navigate('HomeScreen')}
        />
        <Button style= {{padding : 20}}
            title="Log ip!"
            onPress= {() => 
              console.log(this.ValidateIPaddress(this.state.inputIp))
            }
        />
        
        
      </View>
    );
  }

  ValidateIPaddress(ipaddress) {  
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {
      this.socket.emit('message', this.state.inputIp);
      return (true)  
    }  
    alert("You have entered an invalid IP address!")  
    return (false)  
  }  

  constructor(props) {
    super(props);

    this.socket = SocketIOClient('http://localhost:3000');
    

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
