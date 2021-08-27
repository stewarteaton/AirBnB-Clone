import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import DetailedPost from '../../components/DetailedPost';
import {useRoute} from '@react-navigation/native';

import places from '../../../assets/feed';


const PostScreen = () => {
    const route = useRoute();
    console.log('Route Params' + route.params.postId)

    const post = places.find(place => place.id === route.params.postId);
    console.log(post)

    return (
        <View style={styles.container}>
            <DetailedPost post={post} />
        </View>
    )
}

export default PostScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    }
})
