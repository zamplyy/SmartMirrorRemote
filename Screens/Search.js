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
              marginTop: 2,
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
        <View style={{flex:1}}>
        <Text>TEXT2</Text>
        </View>
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
