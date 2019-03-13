import React from 'react';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import { Button, Avatar , Icon, Card} from 'react-native-elements';
import SearchableDropdown from 'react-native-searchable-dropdown'; 
import thirdpartylibs from './../Components/thirdpartylibs.json';

export default class Search extends React.Component {

  render() {
    return (
      <SafeAreaView style= {{flex: 1, justifyContent : 'space-around'}}>
        <View style ={{flex: 1}}>
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
        <View style= {{flex:1, marginTop: 40,}}>
          <View style= {{flex:1}}>
          <Card
            title= {<Text style={{textAlign : 'center', fontWeight: 'bold', fontSize: 20}}>{this.state.selectedItem.name}</Text>}>
            <Text style={{marginBottom: 10}}>
              {this.state.selectedItem.Description}
            </Text>
            
          </Card>
          </View>
          <View style= {{flex:1 , flexDirection: 'row', alignItems : 'center', justifyContent: 'space-evenly'}}>
            <Button style= {{}}
                title="Install"
                onPress= {() => 
                  console.log('Install')
                }
            />
            <Button style= {{}}
                title="Uninstall"
                onPress= {() => 
                  console.log('Uninstall')
                }
            />
          </View>

        </View>
        
      </SafeAreaView>
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
