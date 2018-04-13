import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Text, View} from 'react-native'
import {fetchDeck} from '../../utils/storage'
import {black, white} from '../../utils/colors'
import TextButton from "../TextButton";
import {udaci} from "../../utils/logs";
import styles from "../styles";

class DeckView extends Component {
    state = {
        deck: {
            title: '',
            questions: []
        },
        title: null
    };

    constructor(props) {
        super(props);

        udaci().log("DeckView >> constructor");
    }

    componentDidMount() {
        udaci().log("DeckView >> componentDidMount");
        const {deck, title} = this.props.navigation.state.params
        console.log(title);
        console.log(deck);

        this.setState({
            deck: deck,
            title: title
        })
    }

    componentWillReceiveProps(nextProps) {
        udaci().log("DeckView >> componentWillReceiveProps");

        this.setState({
            deck: nextProps[this.state.title],
        })
    }

    render() {

        const {deck} = this.state;

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

function mapStateToProps(state) {
    console.log("DeckView >> mapStateToProps");
    console.log(JSON.stringify(state));
    return state;
}

export default connect(mapStateToProps, {fetchDeck})(DeckView)
