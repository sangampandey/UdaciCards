import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Alert, Text, TextInput, View} from 'react-native'
import {addDeck} from '../../actions'
import {black} from '../../utils/colors'
import {storeDeck} from "../../utils/storage";
import TextButton from "../TextButton";
import styles from "../styles";

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
        console.log({deck: newDeck[deckTitle]})
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

export default connect(null, {addDeck})(AddDeck)