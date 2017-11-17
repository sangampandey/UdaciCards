import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Alert, StyleSheet, Text, TextInput, View} from 'react-native'
import {addDeck} from '../../actions'
import {black, grey} from '../../utils/colors'
import {storeDeck} from "../../utils/storage";
import TextButton from "../TextButton";

class AddDeck extends Component {

    state = {
        deckTitle: ''
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
        this.props.addDeck(newDeck)
        this.setState({ deckTitle:''});
        this.props.navigation.navigate('DeckView', {deck: newDeck[deckTitle]})
    }

    render() {
        const {deckTitle} = this.state
        return (
            <View style={styles.deck}>
                <Text style={styles.title}>What is the title of your new deck?</Text>
                <TextInput
                    value={deckTitle}
                    style={styles.deckTitle}
                    onChangeText={this.deckTitleInputListener}
                    placeholder='Deck Title'
                />

                <TextButton text={"Submit"} type={"black"} onPress={() => this.handleSubmit(deckTitle)}/>
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
    deckTitle: {
        height: 44,
        width: 250,
        padding: 4,
        margin: 1,
        borderRadius: 5,
        borderColor: grey,
        borderWidth: 0.5,
    }
})

export default connect(null, {addDeck})(AddDeck)