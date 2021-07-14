import React from 'react';
import { View, Text, ImageBackground,  StyleSheet, Pressable, Dimensions} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';

export default function HomeScreen() {
    return (
        <View>
            {/* Search Bar */}
                <Pressable style={styles.searchButton} onPress={() => console.warn('Search btn clicked')}>
                    <Fontisto name="search" size={25} color="red"/>
                    <Text style={styles.searchButtonText}>Where are you going?</Text>
                </Pressable>
            <ImageBackground source={require('../../images/wallpaper.jpg')} style={styles.image} >
                {/* Title */}
                <Text style={styles.title}>AirBnb App</Text>
                {/* Button */}
                <Pressable style={styles.button} onPress={() => console.warn('Explore btn clicked')}>
                    <Text style={styles.buttonText}>Explore near by places</Text>
                </Pressable>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
      width: '100%',
      height: 500,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    title: {
      fontSize: 80,
      fontWeight: 'bold',
      color: 'white',
      width: '70%',
      marginLeft: 20,
    },
    button: {
        backgroundColor: 'white',
        width: '50%',
        marginLeft: 25,
        marginTop: 15,
        height: '6.5%',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchButton: {
        flexDirection: 'row',
        backgroundColor: 'white',
        top: 30,
        marginHorizontal: 10,
        height: '8%',
        width: Dimensions.get('screen').width - 20,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 1,
    },
    buttonText: {
        fontWeight: 'bold',
    },
    searchButtonText: {
        fontWeight: 'bold',
        marginHorizontal: 10
    }
  });
