import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Alert, TextInput, View} from 'react-native'
import {addCard} from '../../actions'
import {black} from '../../utils/colors'
import {storeCardInDeck} from "../../utils/storage";
import TextButton from "../TextButton";
import styles from "../styles";

class AddCard extends Component {

    state = {
        question: '',
        answer:''
    }

    questionInputListener = (value) => {
        //handle the state
        this.setState(() => ({
            question : value
        }))
    }

    answerInputListener = (value) => {
        //handle the state
        this.setState(() => ({
            answer : value
        }))
    }

    handleSubmit = (question,answer,title) => {

        const { navigation } = this.props;
        const {deck} = this.props.navigation.state.params

        //blank validation
        if (!question) {
            Alert.alert("Alert", "Question cannot be empty");
            return;
        }else if (!answer) {
            Alert.alert("Alert", "Answer cannot be empty");
            return;
        }


        //if all is valid then add it in our database
        storeCardInDeck(deck.title,{question:question,answer:answer})

        this.props.addCard(deck.title,{question:question,answer:answer})

        this.setState({ question: '', answer: '' });
        navigation.goBack();
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

export default connect(null, {addCard})(AddCard)