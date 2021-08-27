import React, { useEffect, useState} from 'react'
import { View, Text, FlatList} from 'react-native';
import Post from '../../components/posts';
import { API, graphqlOperation } from 'aws-amplify';
import { listPosts } from '../../graphql/queries'

// export default function index() {
const SearchResultScreen = (props) => {
    // Hooks
    const [posts, setPosts] = useState([])
    // useEffect to fetch data from API and confirm it mounts
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const postsResult = await API.graphql(
                    graphqlOperation(listPosts)
                );
                // check in browser
                // fetch is running every second, need to fix this to reduce AWS costs
                // console.log(postsResult);
                // set state
                setPosts(postsResult.data.listPosts.items);
            } catch (error) {
                console.log(error);
            }
        }
        fetchPosts();
    })
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