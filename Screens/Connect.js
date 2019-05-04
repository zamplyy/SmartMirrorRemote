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
      <View style= {{flex:1 , justifyContent: 'center' , backgroundColor : '#E1E2E1'}}>
        
        <Input style= {{padding : 20}}
          placeholder='Your Raspberry Pi:s IP'
          onChangeText={(text) => 
            this.setState({inputIp: text})
          }
        />

        <Button style= {{padding : 20}}
            buttonStyle={{backgroundColor: '#004a3f'}}
            title="Connect!"
            onPress= {() => this.tryToConnect(this.state.inputIp)}
        />
        
      </View>
    );
  }
  tryToConnect(ipaddress){

    if (this.state.socketConnected == false){
      if(this.validateIPaddress(ipaddress)){
        global.socket = SocketIOClient('http://' + ipaddress + ':18000')

        setTimeout(() => {
          this.isConnected()
        }, 400)
      }
      else {
        alert('Please input a correct IP:adress, eg 192.168.0.1')
      }
    }
  }

  isConnected() {
    if(typeof global.socket === "undefined"){
      return;
    }

    if (global.socket.connected){
      this.setState({
        socketConnected : true
      })
      this.props.navigation.navigate('Tabs', {
        socket: global.socket,
      })
    }else{
      this.setState({
        socketConnected : false
      })
      alert("Couldn't connect, is the IP address correct? Or server middleware running?")
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

    global.socket;

    this.state = {
      inputIp: "192.168.10.201",
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
