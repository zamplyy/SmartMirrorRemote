import React from 'react';
import { StyleSheet, Text, View, FlatList, Switch} from 'react-native';
import { ListItem, Button} from 'react-native-elements';

export default class Settings extends React.Component {
   
    keyExtractor =  (item, index) => index.toString();


    renderItem = ({ item }) => (
        <ListItem
            switch={{
                value: this.state.isOn,
                onValueChange :(value) => this.setState({ isOn: value }),
            }}
            title={item.title}
        />
   )
  render() {
    return (
        <View style= {{flex: 1, justifyContent:'center', paddingTop: 100}}>
        <Text style={{textAlign:'center'}}>
            You're on the settings screen
        </Text>
        <Button
          onPress={ () => alert(this.state.isOn)}
          title="Log isOn"
          color="#fff"
        />
        <Switch
        value={this.state.isOn}
        onValueChange={(value) => {
            this.setState({
                isOn: value
            })
        }}/>
        <FlatList
            keyExtractor={this.keyExtractor}
            data={this.state.list}
            renderItem={this.renderItem}
        />
        
        </View>
    );
  }
  constructor(props) {
    super(props);
    this.state = {
        isOn : true,
        list : [
        {
            title: 'Show Module 1',
            isOn : true,
        },
        {
            title: 'Show Module 2',
            isOn : true,
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
