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

    global.socket.emit('getLayout', 'test');

  }

  render() {
    return (
      <View style= {{flex: 1}}>
      <Header
        placement="left"
        statusBarProps={{ barStyle: 'light-content' }}
        barStyle="light-content" // or directly
        rightComponent={
          <TouchableHighlight
            style = {{paddingRight : 10}}
            onPress = {() => this._onEditButton()}
            underlayColor = '#3D6DCC'
            hitSlop={{top: 10, bottom: 10, left: 20, right: 10}}
            >
            <Text
              style = {{color: '#fff', fontWeight: 'bold', fontSize: 15}}>
              {this.state.isEdit ? 'Save' : 'Edit'}
            </Text>
          </TouchableHighlight>
        }
        centerComponent={{ text: 'Home', style: { color: '#fff', fontWeight: 'bold', fontSize: 20 } }}
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
            onDragRelease = { (itemOrder) => this.setState({
              currentLayout : itemOrder.itemOrder,
            }) }
          >
          {
            ['Weather', 'Clock', 'Compliments', 'Dates'].map( (module, index) =>
              
            <View style={{ alignSelf:'center', flexBasis: '50%'}} key={index} >
              <Avatar
                size="large"
                title={module.substr(0,1)}
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
            title="Send test message through socket"
            onPress = {() => global.socket.emit('message', 'My message 123')}
          />

          <Button style={{paddingTop : 20}}
            title="Log currentlayout"
            onPress = {() => console.log(this.state.currentLayout)}
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
        dragTime : 99999,
        isEdit : false,
      })
      global.socket.emit('changePosition', this.state.currentLayout)

    } else {
      this.setState({
        dragTime : 1,
        isEdit : true,
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
      isEdit : false,
      currentLayout : [
      ],
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
