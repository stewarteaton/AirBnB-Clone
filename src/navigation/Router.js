import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from 'react-native/native';
import { createStackNavigator } from 'react-navigation/stack';
//
import DestinationSearchScreen from '../screens/DestinationSearch/index.js';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Destination Search" component={DestinationSearchScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router

const styles = StyleSheet.create({})
