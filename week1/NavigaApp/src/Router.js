import React from 'react';
import {
  AppRegistry,
  Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './screen/Home';
import User from './screen/User';
import Menu from './screen/Menu';
import Detail from './screen/Detail';

export const HStack  =  StackNavigator({
    MUser : {screen: User},
    MHOme : {screen: Home},
    MDetail : {screen: Detail},
    MMenu : {screen: Menu},
})  