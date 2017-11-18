import React from 'react';
import {Platform} from 'react-native';
import {TabNavigator} from 'react-navigation';
import DeckList from "../../components/deck/list";
import AddDeck from "../../components/deck/add";
import {Entypo} from '@expo/vector-icons';
import {purple, white} from "../../utils/colors";

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

export default Tabs