import { READ_DECKS, ADD_DECK, ADD_CARD } from '../actions'

//initialize the state to {}
function decks (state = {}, action) {
    switch (action.type) {
        case READ_DECKS :
            return {
                ...state,
                ...action.decks
            }
        case ADD_DECK :
            return {
                ...state,
                ...action.deck
            }
        case ADD_CARD :
            return {
                ...state,
                [action.title]: {
                    title: action.title,
                    questions: state[action.title].questions.concat(action.card)
                }
            }
        default:
            return state
    }
}

export default decks

