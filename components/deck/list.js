import React, {Component} from 'react'
import {ScrollView, Text, TouchableOpacity, View} from 'react-native'
import {connect} from 'react-redux'
import {readDecks} from '../../actions'
import {fetchAllDecks} from '../../utils/storage'
import DeckItem from './item'
import TextButton from "../TextButton";
import styles from "../styles";

class DeckList extends Component {
    componentDidMount() {
        fetchAllDecks().then(decks => this.props.readDecks(JSON.parse(decks)))
    }

    render() {
        const {decks, navigation} = this.props
        return (
            <ScrollView>
                {Object.keys(decks).length === 0 ?
                    <View style={styles.deck}>
                        <Text style={styles.title}>
                            It seems you have not added any deck into the system, why don't you add some
                        </Text>
                        <TextButton text={"Add Deck"} type={"black"} onPress={() => this.props.navigation.navigate(
                            'AddDeck'
                        )}/>
                    </View> :
                    Object.keys(decks).map(deck => (
                        <TouchableOpacity key={deck} onPress={() => this.props.navigation.navigate(
                            'DeckView',
                            {deck: decks[deck]}
                        )}>
                            <DeckItem deck={deck} number={decks[deck].questions.length}/>
                        </TouchableOpacity>
                    ))}
            </ScrollView>
        )
    }
}

const mapStateToProps = decks => ({decks});

export default connect(mapStateToProps, {readDecks})(DeckList)
