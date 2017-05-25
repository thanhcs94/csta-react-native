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
    _onClickText(recieveData){
        alert(recieveData);
    }
    render(){
        return (
            <View style={{alignItems:'center',justifyContent:'center', flex:1}}>
                <TouchableOpacity onPress = {()=>this._onClickText('send some thing to show')}>
                     <Text>This is a clickable button</Text>
                </TouchableOpacity>
            </View>
        );   
    }
}