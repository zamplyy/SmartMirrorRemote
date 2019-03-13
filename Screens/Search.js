import React from 'react';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import { Button, Avatar , Input} from 'react-native-elements';
import SearchableDropdown from 'react-native-searchable-dropdown'; 
import iafoiaj from './../Components/thirdpartylibs.json';

export default class Search extends React.Component {

  render() {
    return (
      <SafeAreaView style= {{flex: 1, justifyContent : 'space-around'}}>
        <View style ={{flex: 6}}>
          <SearchableDropdown
            onTextChange={text => console.log(text)}
            onItemSelect={item => console.log((item))}
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
            items= {this.state.items}
            defaultIndex={ 2 }
            placeholder="Search for third party modules!"
            resetValue={false}
            underlineColorAndroid="transparent"
          />
        </View >
        <View style= {{flex:1 , flexDirection: 'row', marginTop: 40, alignItems : 'center', justifyContent: 'space-around'}}>
          <Button style= {{}}
              title="Install"
              onPress= {() => 
                console.log(JSON.parse(thirdpartylibs))
              }
          />
          <Button style= {{}}
              title="Uninstall"
              onPress= {() => 
                console.log('Uninstall')
              }
          />

        </View>
        
      </SafeAreaView>
    );
  }
  componentWillMount() {
    
    
    this.setState({
      items: iafoiaj.thirdpartylibs
    })
    
    
    
  }

  
  constructor(props) {
    super(props);
    this.state = { 
      items : [
        {
          id: 1,
          name: "MagicMirror-Module-Template",
          "Author": "MichMich",
          "Description": "Module to help developers to start building their own modules for the MagicMirror.",
          "Url": "https://github.com/roramirez/MagicMirror-Module-Template"
        },
        {
            id: 2,
            name: "MMM-Button",
            "Author": "PtrBld",
            "Description": "Use a button to hide or show different modules via a broadcast message.",
            "Url": "https://github.com/ptrbld/MMM-Button"
        },
        {
            id: 3,
            name: "MMM-Buttons",
            "Author": "Jopyth",
            "Description": "More complicated, but also more powerful: multiple buttons, configurable notifications, different actions on short and long press.",
            "Url": "https://github.com/Jopyth/MMM-Buttons"
        },
      ]
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
