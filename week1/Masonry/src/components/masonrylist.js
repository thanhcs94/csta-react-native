/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * @thanhcs94
 */


import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Dimensions,
} from 'react-native';
const { width } = Dimensions.get('window');

export default class MasonryList extends Component {
  
  numberOfColumns = 3;

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows([]),
    }
  }

  _getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  componentDidMount() {
    let items = [];
    for (let i = 0; i < 100; i++) {
      items.push({
        name: i.toString(),
        color: this._getRandomColor(),
        height: 10 + (Math.random() * 100),
      });
    }

    let columns = [];
    while(items.length > 0) {
      const itemForEachColumn = items.splice(0, this.numberOfColumns);
      for (let i = 0; i < itemForEachColumn.length; i++) {
        if (columns[i] === undefined){
          columns[i] = [];
        }
        columns[i].push(itemForEachColumn[i]);
      }
    }

    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(columns),
    })
  }

  _renderRow = (items, sectionId, rowIndex) => {
    return (
      <View style={{width: ((width - 4) / this.numberOfColumns) - 4, margin: 2, backgroundColor: 'red',}}>
        { items.map((item, index) => {
          const { name, color, height } = item;
          return <Text key={index} style={{backgroundColor: color, height, marginVertical: 2,}}>name: {name}</Text>
        })}
      </View>
    );
  };

  render() {
    const { dataSource } = this.state;
    return (
        <ListView
          enableEmptySections={true}
          contentContainerStyle={{ flexDirection: 'row', backgroundColor: 'blue', width: width - 4, marginHorizontal: 2, }}
          renderRow={this._renderRow}
          dataSource={dataSource}
          initialListSize={100}
        />

    );
  }
}