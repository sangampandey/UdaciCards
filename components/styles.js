import {StyleSheet} from 'react-native';
import {gray, grey, white,red,green,purple,black} from '../utils/colors'

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        position: 'relative',
        flex: 1
    },
    deck: {
        marginTop: 50,
        alignItems: 'center'
    },
    title: {
        fontSize: 40,
        padding: 40,
        textAlign: 'center'
    },
    input: {
        height: 44,
        width: 250,
        padding: 4,
        margin: 1,
        borderRadius: 5,
        borderColor: grey,
        borderWidth: 0.5,
    },
    deckTitle: {
        height: 44,
        width: 250,
        padding: 4,
        margin: 1,
        borderRadius: 5,
        borderColor: grey,
        borderWidth: 0.5,
    },
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: white,
        padding: 20,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15
    },
    quiz_card: {
        alignItems: 'center',
        borderWidth:0,
        padding: 20,
    },
    number: {
        color: gray
    },
    deck_detail: {
        marginTop: 100,
        marginBottom: 100
    },
    view_title: {
        fontSize: 40,
        marginBottom: 10
    },
    cardNumber: {
        color: grey,
        fontSize: 20,
        textAlign: 'center'
    },
    quiz_container: {
        marginTop: 10,
    },
    indicator: {
        fontSize: 20,
        marginLeft: 20,
        fontWeight: 'bold',
        textAlign: 'left'
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    face: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    back: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: 100,
        height: 30,
        marginTop: 60,
        paddingTop: 6,
        paddingBottom: 6,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: red,
        fontSize: 20,
        fontWeight: 'bold'
    },
    reset: {
        textAlign: 'center',
        color: purple,
    },
    whiteButton: {
        width:150,
        paddingTop: 10,
        paddingBottom:10,
        paddingLeft:20,
        paddingRight:20,
        backgroundColor: white,
        borderRadius: 5,
        alignItems: 'center',
        margin: 20,
    },
    blackButton: {
        width:150,
        paddingTop: 10,
        paddingBottom:10,
        paddingLeft:20,
        paddingRight:20,
        backgroundColor: black,
        borderRadius: 5,
        alignItems: 'center',
        margin: 20,
    },
    greenButton: {
        width:150,
        paddingTop: 10,
        paddingBottom:10,
        paddingLeft:20,
        paddingRight:20,
        backgroundColor: green,
        borderRadius: 5,
        alignItems: 'center',
        margin: 20,
    },
    redButton: {
        width:150,
        paddingTop: 10,
        paddingBottom:10,
        paddingLeft:20,
        paddingRight:20,
        backgroundColor: red,
        borderRadius: 5,
        alignItems: 'center',
        margin: 20,
    },
    whiteButtonText: {
        color: black,
        fontSize: 20,
    },
    blackButtonText: {
        color: white,
        fontSize: 20,
    },
    greenButtonText: {
        color: white,
        fontSize: 20,
    },
    redButtonText: {
        color: white,
        fontSize: 20,
    }
});

export default styles