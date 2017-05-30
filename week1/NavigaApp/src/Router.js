import React from 'react';
import {
  AppRegistry,
  Text,
} from 'react-native';
import { StackNavigator, TabNavigator,DrawerNavigator } from 'react-navigation';
import Home from './screen/Home';
import User from './screen/User';
import Menu from './screen/Menu';
import Detail from './screen/Detail';

export const HStack  =  StackNavigator({
    MHOme : {
        screen: Home,
        navigationOptions:{
        title :'Home'
    }
},
    MUser : {
        screen: User, 
        navigationOptions :{
            title:'User Profile'
        }
    },
    MDetail : {
        screen: Detail, 
        navigationOptions :{
            title:'Details'
        }
    },
    MMenu : {
        screen: Menu,
        navigationOptions:{
            title:'Menu'
        }
    },
})  

export const UserStack  = StackNavigator({
     MUser : {
        screen: User, 
        navigationOptions :{
            title:'User Profile'
        }
    }
})

export const Tabbar  =  TabNavigator({
     MHOme : {
        screen: HStack,
        navigationOptions:{
        title :'Home'
        }
    },
    MUser : {
            screen: UserStack, 
            navigationOptions :{
                title:'User Profile'
            }
        },
})

export const SideDrawer =  DrawerNavigator({
   Tabbar :{
       screen: Tabbar
   },
},
   {
       drawerWidth:300, 
       drawerPosition:'left',
       contentComponent: props => <Menu/>
   }
)