/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import Apps from './src/Apps';
export default class NavigaApp extends Component {
  render() {
    return (
      <Apps/>
    );
  }
}
AppRegistry.registerComponent('NavigaApp', () => NavigaApp);

/**
 * Hello
 * Thank @abc this is so much!
 * What i like
 * Areas to improves 
 * Overall score
 * Bye!
 */
