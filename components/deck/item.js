import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {gray, grey, white} from "../../utils/colors";

class DeckItem extends Component {
    render() {
        const {deck, number} = this.props
        return (
            <View style={styles.card}>
                <Text style={styles.title}>{deck}</Text>
                <Text style={styles.number}>{number} cards</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: white,
        padding: 20,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15
    },
    title: {
        fontSize: 22,
        color:grey
    },
    number: {
        color: gray
    },
})

export default DeckItem
