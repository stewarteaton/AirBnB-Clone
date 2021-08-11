import React, {useState} from 'react'
import { View, Text, TextInput, ImageBackground,  StyleSheet, Pressable, Dimensions, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import  SuggestionRow  from './SuggestionRow';
import config from '../../../.config';

// dummy data
import searchResults from '../../../assets/search';

export default function DestinationSearchScreen() {

    // const [inputText, setInputText ] = useState('');

    const navigation = useNavigation();
    
    return (

        <View style={styles.container}>

            <GooglePlacesAutocomplete
                placeholder='Where are you going?'
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    navigation.navigate('Guests');
                    console.log(data, details);
                }}
                // Gets data like lat/long etc.
                fetchDetails
                
                query={{
                    key: config.GOOG_AUTO_COMPLETE,
                    types: '(cities)',
                    language: 'en',
                }}                
                styles={{
                    textInput: styles.textInput
                }}
                suppressDefaultStyles

                renderRow={(item) => <SuggestionRow item={item} />}
                
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        margin: 15,
        height: '100%',
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    textInput: {
        fontSize: 19,
        marginBottom: 15,
    },
 
});

