import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Dimensions,
  TouchableOpacity,
  Button
  
} from 'react-native';

export default class Profile extends Component{
    static navigationOptions = {
        title:'Profile'
    }
    render(){
        return (
            <View>
                <Text style ={{flex:1, alignItems:'center', justifyContent:'center'}}>This is a profile screen</Text>
            </View>
        );
    };
}