import React from 'react';
import {
    View,
    Image,
    TouchableOpacity
} from 'react-native';

import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';


import {Home} from '../screens';

import { COLORS, icons } from '../constants';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    borderTopWidth: 0,
                    backgroundColor: 'transparent',
                    elevation: 0 //그림자가 깔리는 입체적인 효과
                }
            }}
        >
            <Tab.Screen 
                name="home"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image 
                            source={icons.cutlery}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.primary : COLORS.secondary,
                            }}
                        />
                    )
                }}
            />
            <Tab.Screen 
                name="Search"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image 
                            source={icons.search}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.primary : COLORS.secondary,
                            }}
                        />
                    )
                }}
            />
            <Tab.Screen 
                name="Like"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image 
                            source={icons.like}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.primary : COLORS.secondary,
                            }}
                        />
                    )
                }}
            />
            <Tab.Screen 
                name="User"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image 
                            source={icons.user}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.primary : COLORS.secondary,
                            }}
                        />
                    )
                }}
            />
        </Tab.Navigator>
        
    );
};


export default Tabs;