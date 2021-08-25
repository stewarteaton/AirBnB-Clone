import React from 'react'
import { StyleSheet, Text, View, Image} from 'react-native'
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';

// dummy data
const days=7;

const Post = (props) => {

    const post = props.post;
    const width = useWindowDimensions().width;

    return (
        <View style={[styles.container, {width: width - 60 }]}>
            <View style={styles.innerContainer}>
                {/* Image */}
                <Image style={styles.image} source={{ uri: post.image }}/>
                <View style={styles.infoContainer}>
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
                        <Text style={styles.price}> ${post.newPrice} / night</Text>
            
                    </Text>

                    {/* Total price */}
                </View>
            </View>
        </View>
    )
}

export default Post

const styles = StyleSheet.create({
    container: {
        height: 120,
        padding: 7,
        // Shadow generator from google
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    innerContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: 'hidden',
    },
    infoContainer: {
        flexDirection: 'column',
        // wraps text
        flex: 1,
        marginHorizontal: 10,
    },
    image: {
        height: '100%',
        aspectRatio: 2 / 2,
        borderRadius: 10
    },
    bedroom: {
        marginVertical: 10,
        color: '#5b5b5b',
    },
    description: {
        fontSize: 15,
    },
    prices: {
        fontSize: 15,
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

