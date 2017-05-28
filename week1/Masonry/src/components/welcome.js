/**
* * TODO: Add navigator, send some data to other screen
*/

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Dimensions,
  TouchableOpacity,
  Button
  
} from 'react-native';
const isInfo  = false;
import {
  StackNavigator,
} from 'react-navigation';

export default class Welcome extends Component {
  static navigationOptions = ({ navigation })=>{  
      const {state, setParams} = navigation;
      const isInfo = state.params.something === 'info'; 
      return {
        title: 'welcome BOSS : '+ state.params.data,
        headerRight: (
            <Button
                title={isInfo ? 'Done' : state.params.data+'s info'}
                onPress={() => setParams({ something: isInfo ? 'none' : 'info'})}
            />
            ),
      };
  };
    _onClickText = (data)=>alert('Hello BOSS : ' + data);

    render(){
         const {params} = this.props.navigation.state;  
        return (
            <View style={{alignItems:'center',justifyContent:'center', flex:1}}>
                <TouchableOpacity onPress ={()=>this.props.navigation.navigate('Pro')}>
                     <Text>Hi Boss, {params.data}</Text>
                </TouchableOpacity>
            </View>
        );   
    }
}