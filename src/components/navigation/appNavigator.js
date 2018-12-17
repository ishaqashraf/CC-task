import React, { Component } from 'react';
import Login from '../login/login.js';
import List from '../todo/list.js';
import AddTodo from '../todo/addTodo.js';
import Profile from '../profile/profile.js';

import { createStackNavigator, createAppContainer, createSwitchNavigator, createBottomTabNavigator, StackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';


const AuthStack = createStackNavigator({
    Login: { screen: Login }
},
    {
        headerMode: 'none'
    }
);

const AppStack = createBottomTabNavigator(
    {
        Home: List,
        addTodo: AddTodo,
        Profile: Profile
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = `ios-paper`;
                } else if (routeName === 'addTodo') {
                    iconName = `ios-add`;
                } else if (routeName === 'Profile') {
                    iconName = `ios-person`;
                }
                return <Ionicons name={iconName} size={30} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            showLabel: false,
            activeTintColor: '#4CD964',
            inactiveTintColor: 'gray',
            style: {
                borderTopColor: '#DCDCDC',
                borderTopWidth: 1

            }
        },
    }
);

const AppNavigator = createSwitchNavigator(
    {
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: "App",
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#4CD964',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },

    }
);


const Routes = createAppContainer(AppNavigator);

export default Routes;