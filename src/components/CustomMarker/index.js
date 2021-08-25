
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

const CustomMarker = (props) => {
    const { coordinate, newPrice, onPress, isSelected} = props;
 
    return (
    <View>
        <Marker coordinate={coordinate} onPress={onPress}>

            <View style={{
                backgroundColor: isSelected ? 'black' : 'white', 
                padding: 5, 
                borderRadius: 20,
                borderColor:'grey',
                borderWidth:1}}>

                <Text style={{color: isSelected ? 'white' : 'black',
                    fontWeight:'bold',}}>${newPrice}</Text>
            </View>

        </Marker>        
    </View>
    )
}

export default CustomMarker

const styles = StyleSheet.create({})

