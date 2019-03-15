import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { Button, Card, Avatar} from 'react-native-elements';

export default class Configuration extends React.Component {
   
  render() {
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
                  
                </View>
            </Card>

        </View>
    );
  }
  constructor(props) {
    super(props);
    this.state = {
        selectedModule : {
            name: 'Weather',
            Description: '',
            url: '',
        },
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
