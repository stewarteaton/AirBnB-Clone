import React from 'react'
import { StyleSheet, View, Text, Pressable } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo';


const SuggestionRow = ({item}) => (
    <View  style={styles.row}>
        <View style={styles.iconContainer}>
            <Entypo name={"location-pin"} size={30} />
        </View>
        <Text style={styles.locationText}>{item.description}</Text>
    </View>
);

export default SuggestionRow;

const styles = StyleSheet.create({
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
})



