import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Button, Card, Icon} from 'react-native-elements';

export default class Configuration extends React.Component {
   
  render() {
    return (
        <View style= {{flex: 1}}>
            <Card
                containerStyle = {{backgroundColor: 'blue'}}
                title= {<Text style={{textAlign : 'center', fontWeight: 'bold', fontSize: 20}}>{this.state.selectedItem.name}</Text>}>
                <View style={{backgroundColor: 'red'}}>
                    <Text style={{}}>
                        {this.state.selectedItem.Description}
                    </Text>
                    <Button
                        icon={<Icon name='code' color='#ffffff' />}
                        backgroundColor='#03A9F4'
                        title='INSTALL' 
                    />
                </View>
            </Card>
        </View>
    );
  }
  constructor(props) {
    super(props);
    this.state = {
        selectedItem : {
            name: 'MMM-JoarIsTheBest',
            Description: 'Joar is the best because he is the best and the best and also the best because',
            url: 'https://www.jprodagarna.se',
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
