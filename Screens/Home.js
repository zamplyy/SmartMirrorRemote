import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, SafeAreaView} from 'react-native';
import { Button, Avatar, Header , Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import SortableGrid from 'react-native-sortable-grid'

export default class Connect extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Home',
      headerRight: (
        <Button
          style= {{paddingRight: 10}}
          onPress={navigation.getParam('onEditButton')}
          title="Edit"
          color="#fff"
        />
      ),
    };
  };

  componentWillMount() {
    this.props.navigation.setParams({ onEditButton: this._onEditButton });
    const { navigation } = this.props;

    global.socket.on('message', this.onReceivedMessage)
    this.setState({
      socketConnected: navigation.getParam('socketConnected', true)
    })

  }

  render() {
    return (
      <View style= {{flex: 1}}>
      <Header
        placement="left"
        statusBarProps={{ barStyle: 'light-content' }}
        barStyle="light-content" // or directly
        rightComponent={{ icon: 'home', style: { color: '#fff' } }}
        leftComponent={{ icon: 'home', style: { color: '#fff' } }}
        centerComponent={{ text: 'Home', style: { color: '#fff' } }}
        containerStyle={{
          backgroundColor: '#3D6DCC',
          justifyContent: 'space-around',
        }}
      />
        
        <View style={{backgroundColor: '#005662', flex:1}}> 
                
          <SortableGrid 
            itemsPerRow = { 2 }
            dragActivationTreshold = {this.state.dragTime}
            style= {{}}
          >
          {
            ['Weather', 'Clock', 'Compliments', 'Dates'].map( (module, index) =>
              
            <View style={{ alignSelf:'center', flexBasis: '50%'}} key={index} >
              <Avatar
                size="large"
                title={module.substr(0,1)}
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
              />
              <Text style={{color: '#ffff', textAlign : 'center'}}>
                {module}
              </Text>

            </View>
            )
          }
          </SortableGrid>
        </View>

        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}> 
          <Button style={{}}
            title="Close Connection to Raspberry Pi"
            onPress = {() => this.closeConnect()}
          />

          <Button style={{paddingTop : 20}}
            title="Move Modules"
            onPress = {() => this._onEditButton()}
          />

          <Button style={{paddingTop : 20}}
            title="Send test message through socket"
            onPress = {() => global.socket.emit('message', 'My message 123')}
          />

          <Text>{this.state.message}</Text>
          
        </View>
      </View>
    );
  }

  closeConnect(){
    global.socket.disconnect()
    this.props.navigation.navigate('ConnectScreen')
  }

  _onEditButton = () => {
    if (this.state.dragTime == 1 ){
      this.setState({
        dragTime : 99999
      })
    } else {
      this.setState({
        dragTime : 1
      })
    }
  }
  //Event listener
  onReceivedMessage= (messages) => {
    console.log("TOG EMOT : "+ messages)

    this.setState({
      message : this.state.message + messages,
    })
  }

  constructor(props) {
    super(props);
    this.state = { 
      dragTime : 99999,
      socketConnected: true,
      message : "",
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
