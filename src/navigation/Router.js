import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeTabNavigator from './HomeTabNavigator';
//
import DestinationSearchScreen from '../screens/DestinationSearch/index.js';
import Guests from '../screens/Guests';
import PostScreen from '../screens/PostScreen';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name={"Home"} 
                    component={HomeTabNavigator} 
                    options={{    
                        headerShown: false,
                    }}
                />
                {/* Destination Search */}
                <Stack.Screen 
                    name="Destination Search" 
                    component={DestinationSearchScreen} 
                    options={{ title: 'Search your destination' }}
                />

                {/* Guests  */}
                <Stack.Screen 
                    name="Guests" 
                    component={Guests} 
                    options={{ title: 'How many people?' }}
                />

                {/* Post  */}
                <Stack.Screen 
                    name="Post" 
                    component={PostScreen} 
                    options={{ title: 'Accomodation' }}
                />                
            </Stack.Navigator>

        </NavigationContainer>
        //     <NavigationContainer>
        //     <Stack.Navigator>
        //       <Stack.Screen name="Home" component={DestinationSearchScreen} />
        //     </Stack.Navigator>
        //   </NavigationContainer>
    )
}

export default Router

const styles = StyleSheet.create({})
