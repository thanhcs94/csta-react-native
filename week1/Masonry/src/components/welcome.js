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
    _onClickText = ()=>{
        x=-1;
        x ==-1?alert('x = -1'):alert(x);
    }
    render(){
        return (
            <View style={{alignItems:'center',justifyContent:'center', flex:1}}>
                <TouchableOpacity onPress = {this._onClickText}>
                     <Text>This is a clickable Text</Text>
                </TouchableOpacity>
            </View>
        );   
    }
}