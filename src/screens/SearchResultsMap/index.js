
import React, { useEffect, useState, useRef} from 'react'
import { StyleSheet, Text, View, FlatList} from 'react-native'
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import CustomMarker from '../../components/CustomMarker';
import PostCarouselItem from '../../components/PostCarousel';

import places from '../../../assets/feed';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';

const SearchResultsMap = (props) => {

    const [selectedPlaceId, setSelectedPlaceId] = useState(null);
    const flatlist = useRef();
    const map = useRef();

    // update selected marker on list view change
        // list item must be 70% visible to be counted as current view
    const viewConfig = useRef({itemVisiblePercentThreshold: 70 });
        // When list view changed, updates the selectedID that marker uses
    const onViewChanged = useRef(({viewableItems}) => {
        console.log(viewableItems)
        if (viewableItems.length > 0) {
            const selectedPlace = viewableItems[0].item;
            setSelectedPlaceId(selectedPlace.id);
        }
    })
    const width = useWindowDimensions().width;

    useEffect(() => {
        // before first is selected, we return to avoid error
        if (!selectedPlaceId || !flatlist) { return }

        // finds index where place.id matches selected place
        const index = places.findIndex(place => place.id === selectedPlaceId);
        flatlist.current.scrollToIndex({index})
        // console.warn("scroll to " + selectedPlaceId)

        const selectedPlace = places[index];
        const region = {
            latitude: selectedPlace.coordinate.latitude,
            longitude: selectedPlace.coordinate.longitude,
            // For amount zoomed
            latitudeDelta: .8,
            longitudeDelta: .8,
        }
        // Map focuses to selected region
        map.current.animateToRegion(region);

    }, [selectedPlaceId] )

    return (
        <View style={{width: '100%', height: '100%'}}>
              <MapView
                // provider={PROVIDER_GOOGLE}
                ref={map}
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
                    ref={flatlist}
                    data={places}
                    renderItem={({item}) => <PostCarouselItem post={item} />}
                    horizontal
                    snapToInterval={width - 60}
                    snapToAlignment={'center'}
                    decelerationRate={'fast'}
                    // update selected marker on list view change
                    viewabilityConfig={viewConfig.current}
                    onViewableItemsChanged={onViewChanged.current}
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
