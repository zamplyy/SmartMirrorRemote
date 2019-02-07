import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Avatar, Header } from 'react-native-elements';
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
        backgroundColor= '#283593'
      />
       <View style={{flex:1}}/> 
        <View style={{flex:1}}> 
                
        <SortableGrid>
          {
            ['a', 'b', 'c', 'd', 'e', 'f', 'g'].map( (letter, index) =>

              <View key={index}>
                
                <Avatar rounded title={letter} />
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
          <Button
            icon={
              <Icon
                name="arrow-right"
                size={15}
                color="white"
              />
            }
            iconRight
            title="Button with right icon "
          />
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
