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
  ListView,
  Image
} from 'react-native';

export default class TumblrReact extends Component {
  constructor(props){
    super(props);
    this.state = {
      dataSource : new ListView.DataSource({rowHasChanged:(r2, r1)=> r1!=r2}),
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
            console.log("thanhdz "+ JSON.stringify(responseJson.response.posts));
            this.setState({
              dataSource: this.state.dataSource.cloneWithRows(responseJson.response.posts),
              holderText: 'SUCCESS'
            })
            return responseJson;
          })
          .catch((error) => {
            console.error(error);
          });
      }

   renderRow =(rowData)=>{
     return (
       <View>
          <Image source={{uri:rowData.photos[0].original_size.url}} style ={{width:400, height:300}}/>
          <Text style = {{marginTop:8, marginBottom:32 ,fontSize:13}}>{rowData.caption}</Text>
       </View>
     )
    }
  render() {
    return (
      <View style={styles.container}>
          <Text>{this.state.holderText}</Text>
          <ListView
            dataSource= {this.state.dataSource}
            renderRow = {this.renderRow}
          />
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
