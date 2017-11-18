import React, {Component} from 'react'
import {Text, View} from 'react-native'
import styles from "../styles";

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

export default DeckItem
