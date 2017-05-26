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
  TouchableOpacity
} from 'react-native';

export default class Welcome extends Component {

  static navigationOptions = ({ navigation })=>({
   title: 'welcome BOSS : '+ navigation.state.params.data,
  });

    _onClickText = (data)=>alert('Hello BOSS : ' + data);

    render(){
        const {params} = this.props.navigation.state;   
        return (
            <View style={{alignItems:'center',justifyContent:'center', flex:1}}>
                <TouchableOpacity onPress ={()=>this._onClickText(params.data)}>
                     <Text>Hi Boss, {params.data}</Text>
                </TouchableOpacity>
            </View>
        );   
    }
}