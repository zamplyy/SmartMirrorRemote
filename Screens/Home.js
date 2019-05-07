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
            underlayColor = '#bbb'
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
          backgroundColor: '#007769',
          justifyContent: 'space-around',
        }}
      />}
        
        <View style={{backgroundColor: '#E1E2E1', flex:1}}> 
                
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
              
            <View style={{ alignItems:'center', flexBasis: '50%'}} key={index} >
              <Avatar
              size="large"
              rounded
              title={module.name.substr(0,1)}
              overlayContainerStyle={{backgroundColor: '#004a3f'}}
              activeOpacity={0.7}
              onLongPress = {() => this.state.isSave ?  
                null: this.props.navigation.navigate('Configuration', {
                  item: module.name,
                  modulesShown: this.state.layout,
                  returnData: this.returnData.bind(this),
                })}
              />
              <Text style={{color: '#444', textAlign : 'center'}}>
                {module.name}
              </Text>

            </View>
            )
          }
          </SortableGrid>
        </View>

        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor : '#F5F5F6'}}> 
          <Button style={{paddingTop : 20}}
            title="Hide All Modules"
            onPress = {() => global.socket.emit('hideAll')}
            buttonStyle={{backgroundColor: '#004a3f'}}
          />
          <Button style={{paddingTop : 20}}
            title="Show All Modules"
            onPress = {() => global.socket.emit('showAll')}
            buttonStyle={{backgroundColor: '#004a3f'}}
          />
          
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

      let savedLayout = this.reverseTranslateLayout(this.state.layout, this.state.currentLayout)
      global.socket.emit('changePosition', savedLayout)

    } else {
      this.setState({
        dragTime : 1,
        isSave : true,
      })
    }
  }

  returnData(layoutCorrect) {

    console.log('NEW LAYOUT : ', layoutCorrect)

    console.log('OLD LAYOUT : ', this.state.layout)

    
    this.setState({
      layout : layoutCorrect,
    })
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
    for (let index = 0; index < currentOrder.length; index++) {
      const element = currentOrder[index];
      layout[element].position = order[index]
    }
    
    return layout
  }

  onReceivedLayout= (layout) => {

    layoutCorrect = this.translateLayout(layout)

    this.setState({
      layout : layoutCorrect,
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
        {
          "key": "0",
          "order": 0,
          "ref": null,
        },
        {
          "key": "1",
          "order": 1,
          "ref": null,
        },
        {
          "key": "2",
          "order": 2,
          "ref": null,
        },
        {
          "key": "3",
          "order": 3,
          "ref": null,
        },
      ],
      layout : [
        /*{
          name: 'test1',
          position: 'top_left',
        },
        {
          name: 'test2',
          position: 'top_right',
        },
        {
          name: 'test3',
          position: 'bottom_left',
        },
        {
          name: 'test4',
          position: 'bottom_right',
        },*/
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
