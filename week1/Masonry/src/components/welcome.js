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
    _onClickText =(...args)=> {
        alert((args[0]+ args[1] + '\n length args = '+ args.length));
    }
    render(){
        return (
            <View style={{alignItems:'center',justifyContent:'center', flex:1}}>
                <TouchableOpacity onPress = {()=>this._onClickText(10, 100)}>
                     <Text>This is a clickable Text</Text>
                </TouchableOpacity>
            </View>
        );   
    }
}