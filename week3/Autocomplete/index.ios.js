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
import Autocom from './src/components/autocomplete';
export default class Autocomplete extends Component {
  render() {
    return (
      <View style={{flex:1, backgroundColor:'#006789', marginTop:40}}>
        <Text style ={{fontSize:30, color:'#ffffff'}}>this is some cool text</Text>
      <Autocom/>
       <Text style ={{fontSize:30, color:'#ffffff'}}>this is some cool text 22222</Text>
      </View>
  );}
}
AppRegistry.registerComponent('Autocomplete', () => Autocomplete);
