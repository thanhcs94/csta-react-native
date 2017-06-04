import React, {Component} from 'react'
import {View, Text} from 'react-native'
export default class TText extends Component {
  render() {
    return (
      <Text style = {{padding:20, color:'#006789', backgroundColor:'#ffcc00'}}>{this.props.name}</Text>
    );
  }
}
