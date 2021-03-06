import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import SearchResults from '../screens/SearchResults';
// navigators
import SearchResultsTabNavigator from './SearchResultsTabNavigator';

const Stack = createStackNavigator();

const ExploreNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name={'Welcome'}
                component={HomeScreen}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen 
                name={'SearchResults'}
                component={SearchResultsTabNavigator}
                options={{
                    // headerShown: false,
                    title: 'Search your destination',
                }}
            />
        </Stack.Navigator>
    )
}

export default ExploreNavigator
