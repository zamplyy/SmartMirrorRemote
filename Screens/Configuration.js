import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { Button, Card, Avatar, ButtonGroup} from 'react-native-elements';

export default class Configuration extends React.Component {
   
  render() {

    const buttons = ['Hide', 'Show']
    const { selectedIndex } = this.state
    return (
        <View style= {{flex: 1}}>
            <Card
                containerStyle = {{}}>
                <View style={{alignItems : 'center'}}>
                  <Avatar
                    size="xlarge"
                    title={this.state.selectedModule.name.substr(0,1)}
                    activeOpacity={0.7}
                    onLongPress = {() => console.log()}
                  />
                  <Text style={{textAlign : 'center', fontWeight: 'bold', fontSize: 20}}>{this.state.selectedModule.name}</Text>
                </View>
            </Card>
            <Card
                containerStyle = {{}}
                title = {<Text style={{textAlign : 'center', fontWeight: 'bold', fontSize: 20}}>Configuration</Text>}>
                <View style={{}}>
                  <ButtonGroup
                    onPress={this.updateIndex}
                    selectedIndex={selectedIndex}
                    buttons={buttons}
                    containerStyle={{height: 40}}
                  />
                </View>
            </Card>

        </View>
    );
  }
  updateIndex (selectedIndex) {
    this.setState({selectedIndex})

    if (selectedIndex === 1){
      global.socket.emit('show', this.state.selectedModule.name)
    }else {
      global.socket.emit('hide', this.state.selectedModule.name)
    }
  }

  componentWillMount() {
    const { navigation } = this.props;
    const item = navigation.getParam('item', '');
    this.setState({
      selectedModule :{
        name : item,
      }
    })
  }

  constructor(props) {
    super(props);
    this.state = {
        selectedModule : {
            name: 'Weather',
            Description: '',
            url: '',
        },
        selectedIndex: 1,
    };
    this.updateIndex = this.updateIndex.bind(this)
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
