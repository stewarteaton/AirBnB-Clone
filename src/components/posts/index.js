import React from 'react'
import { StyleSheet, Text, View, Image, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// dummy data
const days=7;

const Post = (props) => {

    const post = props.post;

    const navigation = useNavigation();

    const goToPostPage = () => {
        navigation.navigate('Post', {postId: post.id})
    }

    return (
        <Pressable onPress={goToPostPage} style={styles.container}>
            {/* Image */}
            <Image style={styles.image} source={{ uri: post.image }}
            />
            {/* Bed and Bedroom */}
            <Text style={styles.bedroom}>
                {post.bed} bed *{post.bedroom} bedroom
            </Text>

            {/* Type and title */}
            <Text style={styles.description} numberOfLines={2}>
                {post.type}. {post.title}
            </Text>

            {/*  Old price & new price */}
            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>${post.oldPrice}</Text>
                <Text style={styles.price}>  ${post.newPrice} / night</Text>
    
            </Text>

            {/* Total price */}
            <Text style={styles.totalPrice}>${post.newPrice * days} total</Text>

        </Pressable>
    )
}

export default Post

const styles = StyleSheet.create({
    container: {
        margin: 20
    },
    image: {
        width: '100%',
        aspectRatio: 3 / 2,
        borderRadius: 10
    },
    bedroom: {
        marginVertical: 10,
        color: '#5b5b5b',
    },
    description: {
        fontSize: 18,
        lineHeight: 26,
    },
    prices: {
        fontSize: 18,
        marginVertical: 10,
    },
    oldPrice: {
        color: '#5b5b5b',
        textDecorationLine: 'line-through',
    },
    price: {
        fontWeight: 'bold'
    },
    totalPrice: {
        color: '#5b5b5b',
        textDecorationLine: 'underline',
    },

})

