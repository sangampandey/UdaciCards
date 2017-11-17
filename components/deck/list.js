import React, {Component} from 'react'
import {ScrollView, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import {readDecks} from '../../actions'
import {fetchAllDecks} from '../../utils/storage'
import DeckItem from './item'

class DeckList extends Component {
    componentDidMount() {
        fetchAllDecks().then(decks => this.props.fetchDecks(JSON.parse(decks)))
    }

    render() {
        const {decks, navigation} = this.props
        return (
            <ScrollView>
                {Object.keys(decks).map(deck => (
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

function mapStateToProps(decks) {
    return {
        decks
    }
}

export default connect(mapStateToProps, {fetchDecks: readDecks})(DeckList)
