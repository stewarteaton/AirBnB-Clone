
import React, { useEffect, useState} from 'react'
import { StyleSheet, Text, View, FlatList} from 'react-native'
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import CustomMarker from '../../components/CustomMarker';
import PostCarouselItem from '../../components/PostCarousel';

import places from '../../../assets/feed';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';

const SearchResultsMap = () => {

    const [selectedPlaceId, setSelectedPlaceId] = useState(null);
    const width = useWindowDimensions().width;

    // Hooks
    // const [posts, setPosts] = useState([]);

    return (
        <View style={{width: '100%', height: '100%'}}>
              <MapView
                // provider={PROVIDER_GOOGLE}
                style={styles.map}
                initialRegion={{
                latitude: 28.3279822,
                longitude: -16.5124847,
                latitudeDelta: 0.8,
                longitudeDelta: 0.8,
                }}
            >
                {places.map(post => (
                    <CustomMarker 
                        isSelected={post.id === selectedPlaceId}
                        onPress={() => {
                            setSelectedPlaceId(post.id)
                        }}
                        coordinate={post.coordinate} 
                        newPrice={post.newPrice} 
                    />
                ))}
            </MapView>

            <View style={{position: 'absolute', bottom: 40}}>
                <FlatList 
                    data={places}
                    renderItem={({item}) => <PostCarouselItem post={item} />}
                    horizontal
                    snapToInterval={width - 60}
                    snapToAlignment={'center'}
                    decelerationRate={'fast'}
                />
            </View>
        </View>
    )
}

export default SearchResultsMap

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%',
    }
})
