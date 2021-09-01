import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchResults from '../screens/SearchResults';
import SearchResultsMap from '../screens/SearchResultsMap';
import { useRoute } from '@react-navigation/native';
// API 
import { API, graphqlOperation } from 'aws-amplify';
import { listPosts } from '../graphql/queries'


const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = () => {
        // Hooks
        const [posts, setPosts] = useState([])

        const route = useRoute();
        const { guests, viewport } = route.params;

        console.log('Guest props: ' + guests);
        console.log('VIEWPORT');
        console.log(viewport);

        // useEffect to fetch data from API and confirm it mounts
        useEffect(() => {
            const fetchPosts = async () => {
                try {
                    const postsResult = await API.graphql(
                        graphqlOperation(listPosts, {
                            filter: {
                                and: {
                                    maxGuests: {
                                        ge: guests
                                    },
                                    latitude: {
                                        between: [viewport.southwest.lat, viewport.northeast.lat]
                                    },
                                    longitude: {
                                        between: [viewport.southwest.lng, viewport.northeast.lng]
                                    },                               
                                }
                            }
                        })
                    );
                    // set state
                    setPosts(postsResult.data.listPosts.items);
                } catch (error) {
                    console.log(error);
                }
            }
            fetchPosts();
        }, [])

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
                <SearchResults posts={posts} />
            )}        
            </Tab.Screen>

            {/* Map Tab */}
            <Tab.Screen name={'map'}>
            {() => (
                <SearchResultsMap posts={posts} />
            )}            
            </Tab.Screen>

        </Tab.Navigator>
    )
}

export default SearchResultsTabNavigator;
