import React, {useState} from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import {useNavigation, useRoute} from '@react-navigation/native';

const GuestsScreen = (props) => {
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);

    const navigation = useNavigation();
    const route = useRoute();

    return (
        <View style={{justifyContent: 'space-between', height: '100%'}}>
            <View style={styles.container}>
                {/* Adult Row */}
                <View style={styles.row} >
                    <View style={styles.titleContainer}>
                        <Text style={{fontWeight: 'bold', fontSize: 15}}>Adults</Text>
                        <Text style={{color: 'lightgrey', fontSize: 15}}>Ages 13 and above</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Pressable onPress={() => setAdults(Math.max(0,adults - 1))} value={adults} style={styles.button}>
                            <Text>-</Text>
                        </Pressable>
                        <Text>{adults}</Text>
                        <Pressable onPress={() => setAdults(adults + 1)} value={adults} style={styles.button}>
                            <Text>+</Text>
                        </Pressable>   
                    </View>
                </View>
                {/* Children */}
                    <View style={styles.row} >
                    <View style={styles.titleContainer}>
                        <Text style={{fontWeight: 'bold', fontSize: 15}}>Children</Text>
                        <Text style={{color: 'lightgrey', fontSize: 15}}>Ages 2 - 12</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Pressable onPress={() => setChildren(Math.max(0,children - 1))} value={children} style={styles.button}>
                            <Text>-</Text>
                        </Pressable>
                        <Text>{children}</Text>
                        <Pressable onPress={() => setChildren(children + 1)} value={children} style={styles.button}>
                            <Text>+</Text>
                        </Pressable>   
                    </View>
                </View>
                {/* Infant */}
                <View style={styles.row} >
                    <View style={styles.titleContainer}>
                        <Text style={{fontWeight: 'bold', fontSize: 15}}>Infants</Text>
                        <Text style={{color: 'lightgrey', fontSize: 15}}>Under 2</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Pressable onPress={() => setInfants(Math.max(0,infants - 1))} value={infants} style={styles.button}>
                            <Text>-</Text>
                        </Pressable>
                        <Text>{infants}</Text>
                        <Pressable onPress={() => setInfants(infancts + 1)} value={infants} style={styles.button}>
                            <Text>+</Text>
                        </Pressable>   
                    </View>
                </View>
            </View>
            
            {/* Search Button */}
            <Pressable 
                onPress={() => {
                    navigation.navigate('Home', {
                        screen: 'Explore',
                        params: {
                            screen: 'SearchResults',
                            params: {
                                guests:  adults + children,
                                viewport: route.params.viewport,
                            }
                        }
                    })
                }}
                style={styles.searchButton}
            >
                <Text style={styles.searchText}>Search</Text>
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop:25,
    },
    row: {
        backgroundColor: 'white',
        borderRadius: 10,
        height: 75,
        justifyContent: 'space-between',
        padding: 5,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
        paddingHorizontal: 20,
    },
    titleContainer: {
        justifyContent: 'center',
    },
    buttonContainer:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        margin: 10,
        borderWidth: 1,
        width: 30,
        height: 30,
        borderRadius:15,
        borderColor: 'lightgrey',
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchButton: {
        marginBottom: 30,
        backgroundColor: '#f15454', 
        alignItems:'center', 
        justifyContent:'center',
        height: 50,
        marginHorizontal: 20,
        borderRadius: 10
    },
    searchText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20,
    }
}
)

export default GuestsScreen
