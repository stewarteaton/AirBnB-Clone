import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// screen
import HomeScreen from '../screens/Home';
// navigator
import ExploreNavigator from './ExploreNavigator';

//icons
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import SearchResultsMap from '../screens/SearchResultsMap';

const Tabs = createBottomTabNavigator();

const HomeTabNavigator = (props) => {
    return (
        <Tabs.Navigator tabBarOptions={{ activeTintColor: '#f15454'}}>
            <Tabs.Screen 
                name={"Explore"}
                // component={ExploreNavigator}
                component={SearchResultsMap}
                options={{
                    tabBarIcon: ({color}) => (
                        <Fontisto name='search' size={25} color={color} />
                    )
                }}
            />
            <Tabs.Screen 
                name={"Saved"}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({color}) => (
                        <FontAwesome name='heart-o' size={25} color={color} />
                    )
                }}
            />
            <Tabs.Screen 
                    name={"AirBnB"}
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({color}) => (
                            <FontAwesome5 name='airbnb' size={25} color={color} />
                        )
                    }}
                />
            <Tabs.Screen 
                    name={"Messages"}
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({color}) => (
                            <Feather name='message-square' size={25} color={color} />
                        )
                    }}
                />
            <Tabs.Screen 
                    name={"Profile"}
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({color}) => (
                            <EvilIcons name='user' size={35} color={color} />
                        )
                    }}
                />
        </Tabs.Navigator>
    )
}

export default HomeTabNavigator

const styles = StyleSheet.create({})
