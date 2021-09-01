import React, { useEffect, useState} from 'react'
import { View, Text, FlatList} from 'react-native';
import Post from '../../components/posts';


// export default function index() {
const SearchResultScreen = (props) => {

    const { posts } = props;
    console.log(posts);

    return (
        <View>
            <FlatList
                data={posts}
                renderItem={({item}) => <Post post={item} /> }
                >

            </FlatList>
            {/* <Text>Search Results</Text> */}
        </View>
    )
}

export default SearchResultScreen;