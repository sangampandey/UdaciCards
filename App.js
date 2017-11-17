import React from 'react';
import {Platform, StyleSheet, View,AsyncStorage} from 'react-native';
import {UdaciStatusBar} from "./components/UdaciStatusBar";
import {StackNavigator, TabNavigator} from 'react-navigation';
import DeckList from "./components/deck/list";
import AddDeck from "./components/deck/add";
import {purple, white} from "./utils/colors";
import {Entypo} from '@expo/vector-icons';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import deckListApp from './reducers'
import DeckView from './components/deck/view'
import {project_name} from "./utils/constants";

//this is to make sure user always start fresh
AsyncStorage.clear();

const UdaciDecks = {
    React: {
        title: 'React',
        questions: [
            {
                question: 'What is React?',
                answer: 'A library for managing user interfaces'
            },
            {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event'
            }
        ]
    },
    JavaScript: {
        title: 'JavaScript',
        questions: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
        ]
    }
}

AsyncStorage.setItem(project_name, JSON.stringify(UdaciDecks))

let store = createStore(deckListApp)

//as per requirement we need to have two tabs i.e DeckView List and Add DeckView
const Tabs = TabNavigator({
    DeckList: {
        screen: DeckList,
        navigationOptions: {
            tabBarLabel: 'Decks',
            tabBarIcon: ({tintColor}) => <Entypo name="list" size={30} color={tintColor}/>
        },
    },
    AddDeck: {
        screen: AddDeck,
        navigationOptions: {
            tabBarLabel: 'New Deck',
            tabBarIcon: ({tintColor}) => <Entypo name="add-to-list" size={30} color={tintColor}/>
        },
    },
}, {
    navigationOptions: {
        header: null
    },
    tabBarOptions: {
        activeTintColor: Platform.OS === 'ios' ? purple : white, //tint color is platform specific
        style: {
            height: 56,
            backgroundColor: Platform.OS === 'ios' ? white : purple, //background color is platform specific
            shadowColor: 'rgba(0, 0, 0, 0.24)',
            shadowOffset: {
                width: 0,
                height: 3
            },
            shadowRadius: 6,
            shadowOpacity: 1
        }
    }
})

const Navigation = StackNavigator({
    Home: {
        screen: Tabs,
        navigationOptions: {
            title: 'udacicards'
        }
    },
    DeckView: {
        screen: DeckView
    },
    AddCard: {
        screen: AddCard,
        navigationOptions: {
            title: 'Add Card'
        }
    },
});

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <UdaciStatusBar backgroundColor={purple} barStyle="dark-content"/>
                    <Navigation/>
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        position: 'relative',
        flex: 1
    },
});
