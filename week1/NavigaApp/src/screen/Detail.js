import React, {Component} from  'react';
import {View, Text,TouchableOpacity} from 'react-native';
import TText  from '../components/TText'
export default class Detail extends Component{
    render(){
        return(
            <View style ={{flex:1, alignItems:'center', justifyContent:'center'}}>
                
            
                  <TouchableOpacity
                    onPress = {()=>this.props.navigation.goBack()}
                >
                    <Text style= {{backgroundColor:'#ffcc00', padding:10, marginTop:30}}>Go Back</Text>
                </TouchableOpacity>

                <TText name = 'Hello!!!'/>
                <TText name = 'Awesome man'/>
                <TText name = 'I like'/>
                <TText name = 'You can'/>
                 <TText name = 'Bye!'/>
            </View>
        );
    }
}