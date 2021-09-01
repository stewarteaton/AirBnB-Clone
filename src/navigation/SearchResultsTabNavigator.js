import React from 'react'
import { View, Text } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchResults from '../screens/SearchResults';
import SearchResultsMap from '../screens/SearchResultsMap';
import { useRoute } from '@react-navigation/native';


const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = () => {
    // hooks
    const route = useRoute();
    // have to destructure
    const { guests } = route.params;
    console.log('Route Params: ' + guests);


    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: '#f15454',
            indicatorStyle: {
                backgroundColor: '#f15454',
            }
        }}>
            {/* List Tab */}
            <Tab.Screen name={'list'}>
            {() => (
                <SearchResults guests={guests} />
            )}        
            </Tab.Screen>

            {/* Map Tab */}
            <Tab.Screen name={'map'}>
            {() => (
                <SearchResultsMap guests={guests} />
            )}            
            </Tab.Screen>

        </Tab.Navigator>
    )
}

export default SearchResultsTabNavigator;
