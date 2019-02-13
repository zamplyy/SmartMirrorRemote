import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Avatar, Header , Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import SortableGrid from 'react-native-sortable-grid'

export default class App extends React.Component {

  render() {
    return (
      <View style= {{flex: 1}}>
      <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'Smart Mirror Remote', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
        //backgroundColor= {this.state.colors[primaryColor]}
        backgroundColor = '#005662'
      />
        <View style={{backgroundColor: '#005662', flex:1}}> 
                
          <SortableGrid 
            itemsPerRow = { 2 }
            dragActivationTreshold = {1}
            style= {{}}
          >
          {
            ['John', 'Pallo', 'Joar', 'Jacki'].map( (letter, index) =>
              
            <View style={{backgroundColor: 'red', flexDirection:"row", justifyContent : 'center'}} key={index} >
              {/*<Avatar 
                rounded title={letter}  
                size = 'medium'
              />*/}
              <Input></Input>
            </View>
            )
          }
          </SortableGrid>

        </View>

        <View style={{flex: 1, alignItems: 'center'}}> 
          <Button
            title="Jackis Knapp"
          />
          <Text>Joars Text</Text>
          <Text>Jacki Text</Text>
        </View>

        

      </View>
    );
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
