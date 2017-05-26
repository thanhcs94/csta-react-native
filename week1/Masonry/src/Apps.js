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

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    const {navigate}  =  this.props.navigation;
    return (
      <View style={{alignItems:'center',justifyContent:'center', flex:1}}>
          <TouchableOpacity onPress ={()=>navigate('List', {title :'Gridview'})}>
              <Text>Move to MasonryList Screen</Text>
          </TouchableOpacity>

           <TouchableOpacity style={{marginTop:16}} onPress ={()=>navigate('Well', {data:'@thanhcs94'})}>
              <Text>Move to Welcome Screen  : Arrow Function</Text>
          </TouchableOpacity>

      </View>
    );
  }
}