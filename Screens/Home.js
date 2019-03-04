import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight} from 'react-native';
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

    this.socket = navigation.getParam('socket', '2')
    this.socket.on('message', this.onReceivedMessage)
    //this.setState({
      //socket: navigation.getParam('socket', '2')
    //})
    this.setState({
      socketConnected: navigation.getParam('socketConnected', true)
    })

  }

  render() {
    return (
      <View style= {{flex: 1}}>
        
        <View style={{backgroundColor: '#005662', flex:1}}> 
                
          <SortableGrid 
            itemsPerRow = { 2 }
            dragActivationTreshold = {this.state.dragTime}
            style= {{}}
          >
          {
            ['Weather', 'Clock', 'Compliments', 'Dates'].map( (modules, index) =>
              
            <View style={{ alignItems : 'center',justifyContent : 'center'}} key={index} >
              <Avatar
                size="large"
                title={modules.substr(0,1)}
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
              />
              <Text style={{color: '#ffff'}}>
                {modules}
              </Text>

            </View>
            )
          }
          </SortableGrid>
        </View>

        <View style={{flex: 1, alignItems: 'center'}}> 
          <Button style={{paddingTop : 20}}
            title="Close Connection to Raspberry Pi"
            onPress = {() => this.closeConnect()}
          />

          <Button style={{paddingTop : 20}}
            title="Move Modules"
            onPress = {() => this._onEditButton()}
          />

          <Button style={{paddingTop : 20}}
            title="Send test message through socket"
            onPress = {() => this.socket.emit('message', 'My message 123')}
          />

          <Text>{this.state.message}</Text>

        </View>
      </View>
    );
  }

  closeConnect(){
    this.socket.disconnect()
    this.props.navigation.state.params.onConnect({ socketConnected: false });
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
      message : messages,
    })
  }

  constructor(props) {
    super(props);
    this.socket = 2
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
