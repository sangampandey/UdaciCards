import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Alert, StyleSheet, Text, TextInput, View} from 'react-native'
import {addCard} from '../../actions'
import {black, grey} from '../../utils/colors'
import {storeDeck} from "../../utils/storage";
import TextButton from "../TextButton";

class AddCard extends Component {

    state = {
        question,answer: ''
    }
    deckTitleInputListener = (deckTitle) => {
        //handle the state
        this.setState(() => ({
            deckTitle
        }))
    }
    handleSubmit = (deckTitle) => {

        //blank validation
        if (!deckTitle) {
            Alert.alert("Alert", "Deck's title cannot be empty");
            return;
        }

        //if all is valid then add it in our database
        storeDeck(deckTitle)

        const newDeck = {
            [deckTitle]: {
                title: deckTitle,
                questions: []
            }
        }
        this.props.addCard(newDeck)
        this.props.navigation.navigate('DeckView', {deck: newDeck[deckTitle]})
    }

    render() {
        const {question,answer} = this.state
        return (
            <View style={styles.deck}>
                <TextInput
                    value={question}
                    style={styles.input}
                    onChangeText={this.questionInputListener}
                    placeholder='Question'
                />

                <TextInput
                    value={answer}
                    style={[styles.input,styles.deck]}
                    onChangeText={this.answerInputListener}
                    placeholder='Answer'
                />

                <TextButton text={"Submit"} type={"black"} onPress={() => this.handleSubmit(question,answer)}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    deck: {
        marginTop: 50,
        alignItems: 'center'
    },
    title: {
        fontSize: 40,
        padding: 40,
        textAlign: 'center'
    },
    input: {
        height: 44,
        width: 250,
        padding: 4,
        margin: 1,
        borderRadius: 5,
        borderColor: grey,
        borderWidth: 0.5,
    }
})

export default connect(null, {addCard})(AddCard)