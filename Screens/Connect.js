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
          onChangeText={(text) => 
            this.setState({inputIp: text})
          }
        />

        <Button style= {{padding : 20}}
            title="Connect!"
            onPress= {() => this.tryToConnect(this.state.inputIp)}
        />
        <Button style= {{padding : 20}}
            title="Log is socket connected!"
            onPress= {() => 
              console.log('Is socket connected ' + this.socket.connected)
            }
        />
        
      </View>
    );
  }
  

  onConnect = data => {
    this.setState(data);
  };

  tryToConnect(ipaddress){

    if (this.state.socketConnected == false){
      if(this.validateIPaddress(ipaddress)){
      
        this.socket = SocketIOClient('http://' + ipaddress + ':3000')
      }
      setTimeout(() => {
        this.isConnected()
      }, 500)
    }
    
  }

  isConnected() {

    if (this.socket.connected){
      this.setState({
        socketConnected : true
      })
      this.props.navigation.navigate('HomeScreen', {
        socket: this.socket,
        onConnect: this.onConnect,
      })
    }else{
      this.setState({
        socketConnected : false
      })
      alert("Couldn't connect, is the IP address correct?")
    }


  }

  validateIPaddress(ipaddress) {  
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {
      return (true)  
    }  
    return (false)  
  }  

  constructor(props) {
    super(props);

    //this.socket = 2 

    this.state = {
      inputIp: "127.0.0.1",
      socketConnected : false,
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
