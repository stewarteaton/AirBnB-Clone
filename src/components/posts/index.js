import React from 'react'
import { StyleSheet, Text, View, Image} from 'react-native'

const Post = (props) => {
    return (
        <View style={styles.container}>
            {/* Image */}
            <Image style={styles.image} source={{ uri: 'https://images.unsplash.com/photo-1601918774946-25832a4be0d6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWlyYm5ifGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'}}
            />
            {/* Bed and Bedroom */}
            <Text style={styles.bedroom}>1 bedroom and 1 bath</Text>
            {/* Type and description */}
            <Text style={styles.description}>Lore ipsum</Text>
            {/* Old price and new price */}
            {/* Total price */}
        </View>
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
    bedroom: {},
    description: {},
    prices: {},
    oldPrice: {},
    price: {},
    totalPrice: {},

})

