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
import App from './src/app';
export default class Autocomplete extends Component {
  render() {
    return (
     <App/>
  );}
}
AppRegistry.registerComponent('Autocomplete', () => Autocomplete);
