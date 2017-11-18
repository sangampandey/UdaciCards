import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Text, View} from 'react-native'
import {fetchDeck} from '../../utils/storage'
import {black, white} from '../../utils/colors'
import TextButton from "../TextButton";
import {udaci} from "../../utils/logs";
import styles from "../styles";

class DeckView extends Component {

    componentDidMount() {
        const {deck} = this.props.navigation.state.params
        udaci().info("DeckView :: componentDidMount")
        udaci().info("DeckView :: componentDidMount :: deck = "+JSON.stringify(deck))
    }

    render() {

        const {deck} = this.props.navigation.state.params

        return (
            <View style={styles.deck}>
                <View style={styles.deck_detail}>
                    <Text style={styles.view_title}>{deck.title}</Text>
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


export default connect(null, {fetchDeck})(DeckView)
