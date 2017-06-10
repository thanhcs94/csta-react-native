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
  TextInput,
  ListView,
  TouchableOpacity
} from 'react-native';
const json = "";
export default class Autocom extends Component {
  constructor(props){
    super(props);
    this.state ={
     data: new ListView.DataSource({
        rowHasChanged:(r1, r2) => r1!==r2
      }),
      text: '',
      dataSearch: ''
    }
  }

  componentDidMount () {
    this.fetchDataFromMyBlog();
  }
  
  fetchDataFromMyBlog(){
    return fetch('https://thanhcs.xyz/code/dummy_data.json')
      .then((response) => response.json())
      .then((responseJson) => {
        json = responseJson.notification;
        // this.setState({
        //   data: this.state.data.cloneWithRows(responseJson.notification)
        // })
        dataSearch = responseJson.notification;
        console.log("DATAAAAAA "+JSON.stringify(responseJson.notification));
        return responseJson.notification;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  filterSearch(text){
  console.log(text);
  if(text==''){
this.setState({
            data: new ListView.DataSource({
        rowHasChanged:(r1, r2) => r1!==r2
          }),
            text: ''
        })
  }else{
  const newData = dataSearch.filter(function(item){
            const itemData = item.body.toUpperCase()
            const textData = text.toUpperCase()
            return itemData.indexOf(textData) ==0
            // >=-1 =  contain; ==0 mean start with
        })
        this.setState({
            data: this.state.data.cloneWithRows(newData),
            text: text
        })
  }
}


renderRow(property){
  return(
    <TouchableOpacity onPress ={()=>{
      this.setState({
        text:property.body,
        data:new ListView.DataSource({
        rowHasChanged:(r1, r2) => r1!==r2
        })
      })
      }}>
        <Text>{property.body}</Text>
   </TouchableOpacity>
  )
}


  render() {
    return (
      <View style={styles.container}>
      <View style = {styles.boderView}>
        <TextInput
       style = {styles.searchView}
       placeholder ='Search'
       value = {this.state.text}
       onChangeText={(text)=>this.filterSearch(text)}
       />  
  </View>

   <ListView
        dataSource = {this.state.data}
        renderRow  = {this.renderRow.bind(this)}
        // use bind this to send context :  if not , props is not define in render row
      />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingRight : 16,
    paddingLeft : 16,
    paddingBottom : 16,
    paddingTop : 16,
    backgroundColor: '#ffcc00',
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
   boderView:{
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
    height:40,
    borderColor:'#E4E4E4',
    justifyContent: 'center',
    alignItems: 'center'
  },

  searchView:{
    paddingLeft: 16,
    fontSize: 18,
    height:30,
    color:'#006789',
  },
});