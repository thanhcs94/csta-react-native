import React, {Component} from  'react';
import {View, Text,TouchableOpacity} from 'react-native';

export default class Detail extends Component{
    render(){
        return(
            <View style ={{flex:1, alignItems:'center', justifyContent:'center'}}>
                
                <Text>{this.props.navigation.state.params.sendingdata}</Text>

                  <TouchableOpacity
                    onPress = {()=>this.props.navigation.goBack()}
                >
                    <Text style= {{backgroundColor:'#ffcc00', padding:10, marginTop:30}}>Go Back</Text>
                </TouchableOpacity>

            </View>
        );
    }
}