import React, {Component} from 'react'
import {connect} from 'react-redux'
import {StyleSheet, Text, View} from 'react-native'
import {fetchDeck} from '../../utils/storage'
import {black, grey, white} from '../../utils/colors'
import TextButton from "../TextButton";

class DeckView extends Component {
    render() {
        const {deck} = this.props
        return (
            <View style={styles.deck}>
                <View style={styles.deck_detail}>
                    <Text style={styles.title}>{deck.title}</Text>
                    <Text style={styles.cardNumber}>{deck.questions.length} cards</Text>
                </View>

                <TextButton text={"Add Card"} type={"white"} onPress={() => this.props.navigation.navigate(
                    'AddCard',
                    {title: deck.title}
                )}/>

                <TextButton text={"Start Quiz"} type={"black"} onPress={() => this.props.navigation.navigate(
                    'Quiz',
                    {questions: deck.questions}
                )}/>
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

function mapStateToProps(state, props) {
    console.log(state)
    const {deck} = props.navigation.state.params
    console.log(deck)
    return {
        deck: state[deck.title]
    }
}

export default connect(mapStateToProps, {fetchDeck})(DeckView)
