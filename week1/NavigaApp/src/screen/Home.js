import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

export default class Home extends Component{
    // static navigationOptions = {
    //     title :'Home'
    // }
    render(){
        return(
            <View style ={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <Text>Home</Text>
                <TouchableOpacity
                    onPress = {()=>this.props.navigation.navigate('DrawerOpen',{sendingdata:'thanh dep trai'})}
                >
                    <Text style= {{backgroundColor:'#ffcc00', padding:10, marginTop:30}}>Go to Details</Text>
                </TouchableOpacity>
            </View>
        );
    }
}