import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, SafeAreaView} from 'react-native';
import { Button, Avatar, Header , Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import SortableGrid from 'react-native-sortable-grid'

export default class Home extends React.Component {

  componentWillMount() {
    this.props.navigation.setParams({ onEditButton: this._onEditButton });
    const { navigation } = this.props;

    global.socket.on('message', this.onReceivedMessage)
    global.socket.on('layout', this.onReceivedLayout)
    this.setState({
      socketConnected: navigation.getParam('socketConnected', true)
    })

    global.socket.emit('getLayout');

  }

  render() {
    return (
      <View style= {{flex: 1}}>
      {<Header
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
              {this.state.isSave ? 'Save' : 'Edit'}
            </Text>
          </TouchableHighlight>
        }
        centerComponent={{ text: 'Home', style: { color: '#fff', fontWeight: 'bold', fontSize: 20 } }}
        containerStyle={{
          backgroundColor: '#3D6DCC',
          justifyContent: 'space-around',
        }}
      />}
        
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
            this.state.layout.map( (module, index) =>
              
            <View style={{ alignSelf:'center', flexBasis: '50%'}} key={index} >
              <Avatar
              size="large"
              title={module.name.substr(0,1)}
              activeOpacity={0.7}
              onLongPress = {() => this.state.isSave ?  null: this.props.navigation.navigate('Configuration', {item: module.name})}
              />
              <Text style={{color: '#ffff', textAlign : 'center'}}>
                {module.name}
              </Text>

            </View>
            )
          }
          </SortableGrid>
        </View>

        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}> 
          <Button style={{paddingTop : 20}}
            title="LOG LAYOUT FROM SOCKET"
            onPress = {() => console.log(this.state.layout)}
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

  _onEditButton = () => {
    if (this.state.dragTime == 1 ){
      this.setState({
        dragTime : 99999,
        isSave : false,
      })
      
      this.state.currentLayout.forEach(element => {
        console.log(element)
      });

      let savedLayout = this.reverseTranslateLayout(this.state.layout, this.state.currentLayout)
      global.socket.emit('changePosition', savedLayout)

    } else {
      this.setState({
        dragTime : 1,
        isSave : true,
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

  translateLayout= (layout) => {
    
    let order = ['top_left', 'top_right', 'bottom_left', 'bottom_right'];
    
    const result = layout.sort((a, b) => order.indexOf(a.position) > order.indexOf(b.position));
    
    return result

  }

  reverseTranslateLayout= (layout , currentLayout) => {
    
    let currentOrder = [];
    currentLayout.forEach(element => {
      currentOrder.push(element.key)
    });

    let order = ['top_left', 'top_right', 'bottom_left', 'bottom_right'];
    let i = 0
    layout.forEach(element => {
      element.position = order[currentOrder[i]]
      i++
    });
    
    return layout
  }

  onReceivedLayout= (layout) => {

    layout = this.translateLayout(layout)

    this.setState({
      layout : layout,
    })
  }

  constructor(props) {
    super(props);
    this.state = { 
      dragTime : 99999,
      socketConnected: true,
      message : "",
      isSave : false,
      currentLayout : [
      ],
      layout : [],
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
