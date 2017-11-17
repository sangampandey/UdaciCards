import { AsyncStorage } from 'react-native'
import {PROJECT_NAME} from "./constants";

/**
 * = = = = = = = = = = = = = = = = = = = = = = = = = = = = = == = = = = = = = = = = = = = == = = = = = = = = = = = = =
 * This class acts as an Abstraction layer for AsyncStorage
 * For more detail about AsyncStorage please visit below
 * https://facebook.github.io/react-native/docs/asyncstorage.html
 * = = = = = = = = = = = = = = == = = = = = = = = = = = = = == = = = = = = = = = = = = = == = = = = = = = = = = = = = =
 */

/**
 * @description GET all the decks from AsyncStorage
 * @returns {*|Promise}
 */
export function fetchAllDecks () {
    return AsyncStorage.getItem(PROJECT_NAME)
}

/**
 * @description GET deck from AsyncStorage based on the title
 * @param title
 * @returns {Promise.<TResult>}
 */
export function fetchDeck (title) {
    console.log("fetchDeck")
    console.log(title)
    return AsyncStorage.getItem(PROJECT_NAME)
        .then(results => {
            const data = JSON.parse(results)
            return data[title]
        })
}

/**
 * @description Save the deck inside the AsyncStorage keeping title as the key
 * @param title
 * @returns {Promise.<TResult>}
 */
export function storeDeck (title) {
    return AsyncStorage.getItem(PROJECT_NAME)
        .then(results => {
            const data = JSON.parse(results)
            data[title] = {
                title:title,
                questions: []
            }
            AsyncStorage.setItem(PROJECT_NAME, JSON.stringify(data))
        })
}

/**
 * @description Save the question inside the deck
 * @param title
 * @param card
 * @returns {Promise.<TResult>}
 */
export function storeCardInDeck (title, card) {
    return AsyncStorage.getItem(PROJECT_NAME)
        .then(results => {
            const data = JSON.parse(results)
            data[title] = {
                title:title,
                questions: data[title].questions.concat(card)
            }
            AsyncStorage.setItem(PROJECT_NAME, JSON.stringify(data))
        })
}
