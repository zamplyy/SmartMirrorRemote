import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import { Button, Avatar , Icon, Header} from 'react-native-elements';
import SearchableDropdown from 'react-native-searchable-dropdown'; 
import thirdpartylibs from './../Components/thirdpartylibs.json';

export default class Search extends React.Component {

  render() {
    return (
      <View style= {{flex: 1}}>
        <Header
          placement="left"
          statusBarProps={{ barStyle: 'light-content' }}
          barStyle="light-content" // or directly
          centerComponent={{ text: 'Search', style: { color: '#fff', fontWeight: 'bold', fontSize: 20 } }}
          containerStyle={{
            backgroundColor: '#007769',
            justifyContent: 'space-around',
          }}
        />
        <View style ={{flex: 1, backgroundColor: '#E1E2E1'}}>
          <SearchableDropdown
            onTextChange={text => console.log(text)}
            onItemSelect={item => this.setState({
              selectedItem: item
            })}
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
            //defaultIndex={ }
            placeholder="Search for third party modules!"
            resetValue={false}
            underlineColorAndroid="transparent"
          />
        </View >
        <View style= {{flex:1, paddingTop: 40, paddingHorizontal: 20, backgroundColor: '#F5F5F6'}}>
            <Text style={{textAlign : 'center', fontWeight: 'bold', fontSize: 20}}>{this.state.selectedItem.name}</Text>
            <ScrollView>
              <Text style={{textAlign : 'center',}}>
                {this.state.selectedItem.Description}
              </Text>
            </ScrollView>
            <Button
              icon={<Icon name='code' color='#ffffff' />}
              buttonStyle={{backgroundColor: '#004a3f'}}
              containerStyle={{paddingBottom: 20}}
              title='INSTALL'
              onPress = {() => 
                global.socket.emit('installModule', this.state.selectedItem)
              } 
            />
        </View>
      </View>
    );
  }
  componentWillMount() {
    this.setState({
      items: thirdpartylibs.thirdpartylibs
    })
  }
  
  constructor(props) {
    super(props);
    this.state = { 
      items : [
       
      ],
      selectedItem : {
        name: '',
        Description: '',
        url: '',
      }
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
