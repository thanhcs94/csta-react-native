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

export default class TumblrReact extends Component {
  constructor(props){
    super(props);
    this.state = {
      holderText: 'loading....'
    }
  }
  componentDidMount () {
    this.getDatafromTumblr();
  }
  //https://api.tumblr.com/v2/blog/xkcn.info/posts/photo?api_key=Q6vHoaVm5L1u2ZAW1fqv3Jw48gFzYVg9P0vH0VHl3GVy6quoGV
  getDatafromTumblr() {
        return fetch("https://api.tumblr.com/v2/blog/xkcn.info/posts/photo?api_key=Q6vHoaVm5L1u2ZAW1fqv3Jw48gFzYVg9P0vH0VHl3GVy6quoGV")
          .then((response) => response.json())
          .then((responseJson) => {
            console.log(responseJson);
            this.setState({
              holderText: 'SUCCESS'
            })
            return responseJson;
          })
          .catch((error) => {
            console.error(error);
          });
      }

  render() {
    return (
      <View style={styles.container}>
          <Text>{this.state.holderText}</Text>
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

AppRegistry.registerComponent('TumblrReact', () => TumblrReact);
