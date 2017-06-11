/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  ListView,
  TouchableOpacity
} from 'react-native';
import Autocom from './components/autocomplete';
export default class App extends Component {
  render() {
    return (
      <View style={{flex:1, backgroundColor:'#006789', marginTop:20, padding:10}}>
        <Text style ={{fontSize:20, color:'#ffffff'}}>This header text</Text>
      <Autocom url = 'https://thanhcs.xyz/code/dummy_data.json'/>
       <Text style ={{fontSize:20, color:'#ffffff'}}>This is bottom text</Text>
      </View>
  );}
}