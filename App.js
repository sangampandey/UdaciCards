import React from 'react';
import {AsyncStorage, View} from 'react-native';
import {UdaciStatusBar} from "./components/UdaciStatusBar";
import {purple} from "./utils/colors";
import {Entypo} from '@expo/vector-icons';
import {Provider} from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import deckListApp from './reducers'
import {PROJECT_NAME} from "./utils/constants";
import Navigation from "./components/navigators/stack";
import styles from "./components/styles";
import {setLocalNotifications} from "./utils/notifications";
console.disableYellowBox = true;

const logger = store => next => action => {
    console.log("======================== logger starts =====================");
    console.group(action.type)
    console.info('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    console.groupEnd(action.type)
    console.log("======================== logger ends =====================");
    return result
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//this is to make sure user always start fresh
AsyncStorage.clear();

//this prevents a null pointer exception when we access this ahead of the project
AsyncStorage.setItem(PROJECT_NAME, JSON.stringify({}));

//get the store to pass on later to the provider
let store = createStore(
    deckListApp,
    // composeEnhancers(
    //     applyMiddleware(logger)
    // )
);

export default class App extends React.Component {
    componentDidMount() {
        setLocalNotifications()
    }

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

