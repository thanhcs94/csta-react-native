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
} from 'react-native';
import MasonryList from './src/components/masonrylist';
import Welcome from './src/components/welcome';
export default class Masonry extends Component {
  render() {
    return (
      <Welcome/>
    );
  }
}

AppRegistry.registerComponent('Masonry', () => Masonry);
