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
export default class Masonry extends Component {
  render() {
    return (
      <MasonryList/>
    );
  }
}

AppRegistry.registerComponent('Masonry', () => Masonry);
