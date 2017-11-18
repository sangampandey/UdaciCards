import {StackNavigator} from 'react-navigation';
import AddCard from "../card/add";
import DeckView from '../deck/view'
import Quiz from '../quiz'
import Tabs from "./tab";

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
    Quiz: {
        screen: Quiz,
        navigationOptions: {
            title: 'Quiz'
        }
    },
});

export default Navigation