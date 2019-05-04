import React from 'react';
import { StyleSheet, Text, View, ScrollView, Picker} from 'react-native';
import { Button, Card, Avatar, ButtonGroup} from 'react-native-elements';
import Setting from '../Components/Setting'

export default class Configuration extends React.Component {
   
  render() {

    const buttons = ['Hide', 'Show']
    const { selectedIndex } = this.state
    return (
      <View style={{flex: 1}}>
      <ScrollView style= {{}}>
            <Card
                containerStyle = {{}}>
                <View style={{alignItems : 'center'}}>
                  <Avatar
                    size="large"
                    title={this.state.selectedModule.name.substr(0,1)}
                    activeOpacity={0.7}
                  />
                  <Text style={{textAlign : 'center', fontWeight: 'bold', fontSize: 20}}>{this.state.selectedModule.name}</Text>
                  <Text style={{textAlign : 'center'}}>{this.state.modulePosition}</Text>
                </View>
            </Card>
            <Card
                containerStyle = {{}}
                title = {<Text style={{textAlign : 'center', fontWeight: 'bold', fontSize: 20}}>Configuration</Text>}>
                <View style={{}}>
                  
                  <ButtonGroup
                    onPress={this.updateIndex}
                    selectedIndex={selectedIndex}
                    buttons={buttons}
                    containerStyle={{height: 40}}
                  />
                  <Setting title="Change Module">
                    <View style={{}}>
                      <Picker
                        style={{ marginTop:0}}
                        selectedValue={ this.state.selectedModule.value }
                        onValueChange={(itemValue, itemIndex) => this.pickerChange(itemIndex)}>{
                          this.state.modulesInstalled.map( (m)=>{
                            return <Picker.Item label={m.moduleLabel} value={m.value} />
                          })
                        }
                      </Picker>
                    </View>
                  </Setting>
                </View>
            </Card>
            <Text>
              {/*JSON.stringify(this.state.configObject)*/}
            </Text>
        </ScrollView>
        <View style = {{alignItems: 'center'}}>
          <Button style= {{margin: 10, width: 140}}
              title="Save Changes"
              onPress= {() => this.saveChangesToConfig()}
              disabled = {this.state.isChanged ? false : true}
          />
        </View>
      </View>
    );
  }

  saveChangesToConfig() {
    
    console.log()
    console.log('layout = ', this.state.layout)
    console.log()

    var layyyout = this.state.layout
    layyyout[0] = {
      "name": this.state.module,
      "position": "top_left",
    }

    global.socket.emit('saveModules', layyyout);
    //global.socket.emit('restart')
    //this.props.navigation.goBack();

    //alert('The modules you want to save is ' + this.state.module + ' in the position: ' + this.state.modulePosition)

  }

  pickerChange (index) {
    this.state.modulesInstalled.map( (v,i)=>{
      if( index === i ){
        this.setState({
          selectedModule : {
            name : this.state.modulesInstalled[index].moduleLabel,
            value: this.state.modulesInstalled[index].value
          },
          module: this.state.modulesInstalled[index].moduleLabel,
          isChanged: true,
        })
      }
    })
  }
  updateIndex (selectedIndex) {
    this.setState({selectedIndex})

    if (selectedIndex === 1){
      global.socket.emit('show', this.state.selectedModule.name)
    }else {
      global.socket.emit('hide', this.state.selectedModule.name)
    }
  }

  componentWillMount() {
    const { navigation } = this.props;
    const item = navigation.getParam('item', '');
    const modules = navigation.getParam('modulesShown', '');
    
    var layout2 = modules

    let modulesArray = []
    let modulesPosition = '';
    Object.keys(modules).forEach(index => {
        modulesArray.push(modules[index].name)
        if(modules[index].name == item){
          modulesPosition = modules[index].position
        }
    });
    this.setState({
      selectedModule :{
        name : item,
      },
      modulesShown: modulesArray,
      modulePosition: modulesPosition,
      layout: layout2,
    })
    global.socket.on('setModuleConfig', this.onReceivedModuleConfig)
    global.socket.on('setInstalledModules', this.onReceivedInstalledModules)
    global.socket.emit('getModuleConfig', item)
    global.socket.emit('getInstalledModules', item)
  }

  onReceivedModuleConfig = (config) => {
    this.setState({
      configObject : config,
    })
  }

  onReceivedInstalledModules = (setInstalledModules) => {
    self = this
    
    let installedModules = setInstalledModules.filter( function( el ) {
      return self.state.modulesShown.indexOf( el ) < 0;
    });
    let modulesArray = [] 
    installedModules.forEach(function (item){
        modulesArray.push({
          value : item.substr(0,3),
          moduleLabel : item,
        })
    });
    this.setState({
      modulesInstalled : modulesArray,
    })
    
  }

  constructor(props) {
    super(props);
    this.state = {
        selectedModule : {
            name: '',
            Description: '',
            url: '',
        },
        selectedIndex: 1,
        configObject: {},

        modulesInstalled: [
          { "value":"cal", "moduleLabel":  "calendar" },
          { "value":"clo", "moduleLabel": "clock" },
          { "value":"currw", "moduleLabel": "currentweather" }
        ],
        currentLabel: 'Select Module to be shown',
        module: "",
        isChanged: false,
        modulePosition : '',
    };
    this.updateIndex = this.updateIndex.bind(this)
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
