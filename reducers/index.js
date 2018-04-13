import {ADD_CARD, ADD_DECK, READ_DECKS} from '../actions'
import {udaci} from "../utils/logs";
import {DEBUG_MODE} from "../utils/constants";

//initialize the state to {}
function decks (state = {}, action) {
    switch (action.type) {
        case READ_DECKS :
            if (DEBUG_MODE) {
                udaci().info("====================== READ_DECKS Reducer @STARTS======================")
                udaci().debug(JSON.stringify(state))
                udaci().debug(JSON.stringify(action))
                udaci().info("====================== READ_DECKS Reducer @ENDS======================")
            }
            return {
                ...state,
                ...action.decks
            };
        case ADD_DECK :
            if (DEBUG_MODE) {
                udaci().info("====================== ADD_DECK Reducer @STARTS======================")
                udaci().debug(JSON.stringify(state))
                udaci().debug(JSON.stringify(action))
                udaci().info("====================== ADD_DECK Reducer @ENDS======================")
            }
            return {
                ...state,
                ...action.deck
            };
        case ADD_CARD :
            if (DEBUG_MODE) {
                udaci().info("====================== ADD_CARD Reducer @STARTS======================")
                udaci().debug(JSON.stringify(state))
                udaci().debug(JSON.stringify(action))
                udaci().info("====================== ADD_CARD Reducer @ENDS======================")
            }
            return {
                ...state,
                [action.title]: {
                    title: action.title,
                    questions: state[action.title].questions.concat(action.card)
                }
            };
        default:
            return state
    }
}

export default decks

