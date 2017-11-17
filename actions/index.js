import {udaci} from "../utils/logs";

export const READ_DECKS = 'READ_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'

export function readDecks (decks) {
    udaci().info("====================== readDecks Action @STARTS======================")
    udaci().debug(JSON.stringify({
        type: READ_DECKS,
        decks
    }))
    udaci().info("====================== readDecks Action @ENDS======================")

    return {
        type: READ_DECKS,
        decks
    }
}

export function addDeck (deck) {
    udaci().info("====================== addDeck Action @STARTS======================")
    udaci().debug(JSON.stringify({
        type: ADD_DECK,
        deck
    }))
    udaci().info("====================== addDeck Action @ENDS======================")

    return {
        type: ADD_DECK,
        deck
    }
}

export function addCard (title, card) {
    udaci().info("====================== addCard Action @STARTS======================")
    udaci().debug(JSON.stringify({
        type: ADD_CARD,
        title:title,
        card
    }))
    udaci().info("====================== addCard Action @ENDS======================")
    return {
        type: ADD_CARD,
        title:title,
        card
    }
}
