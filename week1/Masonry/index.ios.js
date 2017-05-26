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
  TouchableOpacity,
} from 'react-native';
import HomeScreen from './src/Apps';
import MasonryList from './src/components/masonrylist';
import Welcome from './src/components/welcome';

import {
  StackNavigator,
} from 'react-navigation';

const Masonry = StackNavigator({
  Home: { screen: HomeScreen },
  List: {screen: MasonryList},
  Well: {screen: Welcome},
});

AppRegistry.registerComponent('Masonry', () => Masonry);
