import React, { Component } from 'react'
import {View, Text} from 'react-native';
import { HStack } from './Router';
import {Tabbar} from './Router'
import {SideDrawer} from './Router'

export default class Apps extends Component{
    render(){
        return(
            <SideDrawer/>
        );
    }
}