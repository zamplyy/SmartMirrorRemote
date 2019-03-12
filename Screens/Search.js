import React from 'react';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import { Button, Avatar , Input} from 'react-native-elements';
import SearchableDropdown from 'react-native-searchable-dropdown'; 

export default class Search extends React.Component {

  render() {
    return (
      <SafeAreaView style= {{flex: 1}}>
        <View style ={{flex: 1}}>
          <SearchableDropdown
            onTextChange={text => console.log(text)}
            onItemSelect={item => console.log(JSON.stringify(item))}
            containerStyle={{ padding: 5 }}
            textInputStyle={{
              padding: 12,
              borderWidth: 1,
              borderColor: '#ccc',
              borderRadius: 5,
            }}
            itemStyle={{
              padding: 10,
              marginTop: 4,
              backgroundColor: '#fff',
              borderColor: '#bbb',
              borderWidth: 1,
              borderRadius: 5,
            }}
            itemTextStyle={{ color: '#222' }}
            itemsContainerStyle={{}}
            items={this.state.items}
            //defaultIndex={}
            placeholder="Search for third party modules!"
            resetValue={false}
            underlineColorAndroid="transparent"
          />
        </View >
        
      </SafeAreaView>
    );
  }
  constructor(props) {
    super(props);
    this.state = { 
      items : [
        {
          id: 1,
          name: 'JavaScript',
          aName: 'Hej'
        },
        {
          id: 2,
          name: 'Java',
        },
        {
          id: 3,
          name: 'Ruby',
        },
        {
          id: 4,
          name: 'React Native',
        },
        {
          id: 5,
          name: 'PHP',
        },
        {
          id: 6,
          name: 'Python',
        },
        {
          id: 7,
          name: 'Go',
        },
        {
          id: 8,
          name: 'Swift',
        },
        {
          id: 9,
          name: 'Swift',
        },
        {
          id: 10,
          name: 'Swift',
        },
        {
          id: 11,
          name: 'Swift',
        },
        {
          id: 12,
          name: 'Swift',
        },
        {
          id: 13,
          name: 'Swift',
        },
        {
          id: 14,
          name: 'Swift',
        },
        {
          id: 15,
          name: 'Swift',
        },
        {
          id: 16,
          name: 'Swift',
        },
        {
          id: 17,
          name: 'Swift',
        },
        {
          id: 18,
          name: 'Swift',
        },
        {
          id: 19,
          name: 'Swift',
        },
        {
          id: 20,
          name: 'Swift',
        },
        {
          id: 21,
          name: 'Swift',
        },
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
