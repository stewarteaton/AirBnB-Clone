import React, {useState} from 'react'
import { View, Text, TextInput, ImageBackground,  StyleSheet, Pressable, Dimensions, FlatList} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

// dummy data
import searchResults from '../../../assets/search';

export default function DestinationSearchScreen() {

    const [inputText, setInputText ] = useState('');

    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
            {/* Input Component */}
            <TextInput 
                style={styles.textInput} 
                placeholder='Where are you going?' 
                value={inputText}
                onChange={setInputText}
            />

            {/* List of destination */}
            <FlatList 
                data={searchResults}
                renderItem={ ({item}) => (
                    <Pressable onPress={() => navigation.navigate('Guests')} style={styles.row}>
                        <View style={styles.iconContainer}>
                            <Entypo name={"location-pin"} size={30} />
                        </View>
                        <Text style={styles.locationText}>{item.description}</Text>
                    </Pressable>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        margin:15,
        width: '100%',
        height: '100%',
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    textInput: {
        fontSize: 19,
        marginBottom: 15,
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
    },
    iconContainer: {
        backgroundColor: 'lightgrey',
        borderRadius: 8,
        marginRight: 10,
        padding: 4,
    },
    locationText: {

    }
});

