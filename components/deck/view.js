import React, {Component} from 'react'
import {connect} from 'react-redux'
import {StyleSheet, Text, View} from 'react-native'
import {fetchDeck} from '../../utils/storage'
import {black, grey, white} from '../../utils/colors'
import TextButton from "../TextButton";
import {udaci} from "../../utils/logs";

class DeckView extends Component {

    componentDidMount() {
        const {deck} = this.props.navigation.state.params
        udaci().info("DeckView :: componentDidMount")
        udaci().info("DeckView :: componentDidMount :: deck = "+JSON.stringify(deck))
    }

    render() {

        const {deck} = this.props.navigation.state.params
        console.log(deck)
        return (
            <View style={styles.deck}>
                <View style={styles.deck_detail}>
                    <Text style={styles.title}>{deck.title}</Text>
                    <Text style={styles.cardNumber}>{deck.questions.length} cards</Text>
                </View>

                <TextButton text={"Add Card"} type={"white"} onPress={() => this.props.navigation.navigate(
                    'AddCard',
                    {deck}
                )}/>

                {deck.questions.length > 0 && <TextButton text={"Start Quiz"} type={"black"} onPress={() => this.props.navigation.navigate(
                    'Quiz',
                    {questions: deck.questions}
                )}/>}

            </View>
        )
    }
}

const styles = StyleSheet.create({
    deck: {
        marginTop: 50,
        alignItems: 'center'
    },
    deck_detail: {
        marginTop: 100,
        marginBottom: 100
    },
    title: {
        fontSize: 40,
        marginBottom: 10
    },
    cardNumber: {
        color: grey,
        fontSize: 20,
        textAlign: 'center'
    }

})


export default connect(null, {fetchDeck})(DeckView)
