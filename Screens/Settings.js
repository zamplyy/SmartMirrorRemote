import React from 'react';
import { StyleSheet, Text, View, FlatList, Switch, ScrollView, TouchableHighlight} from 'react-native';
import { ListItem, Button, Header, Icon} from 'react-native-elements';
import Setting from '../Components/Setting'

export default class Settings extends React.Component {
   
  render() {
    return (
      <View style= {{flex: 1}}>
         <Header
          placement="left"
          statusBarProps={{ barStyle: 'light-content' }}
          barStyle="light-content" // or directly
          rightComponent={{ icon: 'home', style: { color: '#fff' } }}
          leftComponent={{ icon: 'home', style: { color: '#fff' } }}
          centerComponent={{ text: 'Settings', style: { color: '#fff', fontWeight: 'bold', fontSize: 20 } }}
          containerStyle={{
            backgroundColor: '#3D6DCC',
            justifyContent: 'space-around',
          }}
        />
        <ScrollView >
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
              title="Close Connection to Raspberry Pi"
              onPress = {() => this.closeConnect()}
            />
          </Setting>
          <Setting title="Activate/inactivate">
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</Text>
          </Setting>
        </ScrollView>
      </View>
    );
  }
  
  closeConnect(){
    global.socket.disconnect()
    this.props.navigation.navigate('ConnectScreen')
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