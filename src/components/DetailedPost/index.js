import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native'

// dummy data
const days=7;

const Post = (props) => {

    const post = props.post;

    return (
        <ScrollView>
            <View style={styles.container}>
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

                <Text style={styles.longDescription}>
                    {post.description}
                </Text>
            </View>
        </ScrollView>
    )
}

export default Post

const styles = StyleSheet.create({
    container: {
        margin: 20,
        paddingTop: 30,
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
    longDescription: {
        lineHeight: 24,
        fontSize: 15,
        marginVertical: 15,
    }

})

