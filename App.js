import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Avatar, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import SortableGrid from 'react-native-sortable-grid'

colors = [
  primaryColor = '#00838f',
  primaryLightColor = '#4fb3bf',
  primaryDarkColor = '#005662',
  primaryTextColor = '#ffffff'
]

export default class App extends React.Component {
  render() {
    return (
      <View style= {{flex: 1}}>
      <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'Smart Mirror Remote', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
        backgroundColor= '#00838f'
      />
        <View style={{backgroundColor:'blue', flex:1}}> 
                
        <SortableGrid 
          itemsPerRow = { 2 }
          dragActivationTreshold = {1}
          style= {{}}
        >
        {
          ['a', 'b', 'c', 'd'].map( (letter, index) =>
            
          <View style={{backgroundColor:'red', flexDirection:"row"}} key={index} >
            <Avatar 
              rounded title={letter} 
              size = 'medium'
            />
            <Avatar 
              rounded title={letter} 
              size = 'medium'
            />
            <Avatar 
              rounded title={letter} 
              size = 'medium'
            />
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
