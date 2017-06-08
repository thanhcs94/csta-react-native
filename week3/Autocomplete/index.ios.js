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
  View
} from 'react-native';

export default class Autocomplete extends Component {
  constructor(props){
    super(props);
    this.state ={
      data : ''
    }
  }

  componentDidMount () {
    this.fetchDataFromMyBlog();
  }
  
  fetchDataFromMyBlog(){
    return fetch('https://thanhcs.xyz/code/dummy_data.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          data: JSON.stringify(responseJson.notification)
        })
        console.log("DATAAAAAA "+JSON.stringify(responseJson.notification));
        return responseJson.notification;
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
        {this.state.data}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Autocomplete', () => Autocomplete);
