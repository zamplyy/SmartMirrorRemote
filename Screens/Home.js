import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import { Button, Avatar, Header , Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import SortableGrid from 'react-native-sortable-grid'

export default class Connect extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

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
              
            <View style={{ alignItems : 'center',flex : 1}} key={index} >
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

        <View style={{flex: 1, alignItems: 'center', paddingTop : 30}}> 
          <Button
            title="Jackis Knapp"
            onPress = {this.joarsFunction}
          />

          <Button
            title="Joars Knapp"
            onPress = {() => console.log(this.state.dragTime)}
          />
          <Text>Joars Text</Text>
          <Text>Jacki Text</Text>
        </View>
      </View>
    );
  }

  joarsFunction = () => {

    this.setState({
      dragTime : 99999
    })

  }

  constructor(props) {
    super(props);
    this.state = { 
      dragTime : 1,
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
