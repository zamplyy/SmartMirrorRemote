import React from 'react';
import { StyleSheet, Text, View, FlatList, Switch, ScrollView, TouchableHighlight} from 'react-native';
import { ListItem, Button, Header, Icon} from 'react-native-elements';
import Setting from '../Components/Setting'
import { AsyncStorage } from "react-native"

export default class Settings extends React.Component {
   
  render() {
    return (
      <View style= {{flex: 1}}>
         <Header
          placement="left"
          statusBarProps={{ barStyle: 'light-content' }}
          barStyle="light-content" // or directly
          centerComponent={{ text: 'Settings', style: { color: '#fff', fontWeight: 'bold', fontSize: 20 } }}
          containerStyle={{
            backgroundColor: '#007769',
            justifyContent: 'space-around',
          }}
        />
        <ScrollView style={{backgroundColor: '#E1E2E1'}}>
          <Setting title= "Brightness">
            <View style={{flexDirection: "row", justifyContent: 'space-between'}}>
            <TouchableHighlight onPress={ () => console.log('Pressed Brightness 1')}>
              <Icon
                name= 'brightness-1'
                type='material'
                size= {40}
                color='#ffffff'
              />
            </TouchableHighlight>
            <TouchableHighlight onPress={() => console.log('Pressed Brightness 2')}>
            <Icon
              name= 'brightness-2'
              type='material'
              size= {40}
              color='#ffffff'
            />
            </TouchableHighlight>
            <TouchableHighlight onPress={() => console.log('Pressed Brightness 3')}>
              <Icon
                name= 'brightness-3'
                type='material'
                size= {40}
                color='#ffffff'
              />
            </TouchableHighlight>
          </View>
          </Setting>
          <Setting title="Logoff">
            <Button style={{}}
              buttonStyle={{backgroundColor: '#007769'}}
              title="Close Connection to Raspberry Pi"
              onPress = {() => this.closeConnect()}
            />
          </Setting>
          <Setting title="Restart">
            <Button style={{}}
              buttonStyle={{backgroundColor: '#007769'}}
              title="Restart the MagicMirror"
              onPress = {() => this.restartMagicMirror()}
            />
          </Setting>
          <Setting title="Resend getLayout">
            <Button style={{}}
              buttonStyle={{backgroundColor: '#007769'}}
              title="Resend"
              onPress = {() => global.socket.emit('getLayout')}
            />
          </Setting>

          <Setting title="IP-Address">
            <View style={{flexDirection: "row", justifyContent: 'space-between'}}>
              <Text>Hide/Show IP-Address</Text>
              <Switch onValueChange = {this.toggleIpSwitch} value = {this.state.ipSwitchValue}/>
            </View>
          </Setting>

          
        </ScrollView>
      </View>
    );
  }

  toggleIpSwitch = (value) => {
    this.setState({ipSwitchValue: value})
    global.socket.emit("toggleIp", value)
  }

  async removeItemValue(key) {
    try {
      await AsyncStorage.removeItem(key, (err) => {
        console.log('done removing ' + key)
      });
      return true;
    }
    catch(exception) {
      alert(exception)
      return false;
    }
  }

  
  async closeConnect(){

    let flag = await this.removeItemValue('IPaddress')

    if (flag == true) {
      global.socket.disconnect()
      this.props.navigation.navigate('ConnectScreen')
    }
  }

  restartMagicMirror(){

    global.socket.emit("restart", "")
    global.socket.disconnect()
    this.props.navigation.navigate('ConnectScreen')
  }


  constructor(props) { 
    super(props);
    this.state = {
        ipSwitchValue:true,
    };
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop      : 30,
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