import React, {Component} from 'react'
import {connect} from 'react-redux'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import FlipCard from 'react-native-flip-card';
import {red} from "../utils/colors";
import TextButton from "./TextButton";

class Quiz extends Component {

    state = {
        flip: false,
        correctScore: 0,
        currentQuestion: 1,
        completedQuiz: false
    }

    restart = () => {
        this.setState({
            flip: false,
            correctScore: 0,
            currentQuestion: 1,
            completedQuiz: false
        })
    }

    handleButtonPress = (isCorrectBtnPressed) => {
        const {questions} = this.props.navigation.state.params

        this.setState({currentQuestion: this.state.currentQuestion + 1})

        if (this.state.currentQuestion === questions.length) {
            this.setState({completedQuiz:true})
        }

        isCorrectBtnPressed && this.setState({correctScore: this.state.correctScore + 1})
    }

    render() {

        const {questions} = this.props.navigation.state.params

        const {currentQuestion, completedQuiz, correctScore} = this.state

        return (
            <View style={styles.container}>
                {completedQuiz ?
                    <View>
                        <Text style={styles.text}>Your score is : {((correctScore / questions.length) * 100).toFixed(2)}%</Text>
                        <View style={styles.card}>

                            <TextButton text={"Restart Quiz"} type={"white"} onPress={() => this.restart()}/>

                            <TextButton text={"Go Back"} type={"black"}
                                        onPress={() => this.props.navigation.goBack()}/>
                        </View>
                    </View>
                    :
                    <View>
                        <Text style={styles.indicator}>{currentQuestion}/{questions.length}</Text>

                        <FlipCard
                            style={[styles.card, {marginTop: 100}]}
                            flipHorizontal={true}
                            flipVertical={false}
                            alignHeight={true}
                            alignWidth={true}
                            flip={this.state.flip}
                        >
                            {/* Question */}
                            <View style={styles.face}>
                                <Text style={styles.text}>{questions[currentQuestion - 1].question}</Text>
                            </View>
                            {/* Answer */}
                            <View style={styles.back}>
                                <Text style={styles.text}>{questions[currentQuestion - 1].answer}</Text>
                            </View>
                        </FlipCard>

                        <View style={styles.card}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {
                                    this.setState({flip: !this.state.flip})
                                }}
                            >
                                {this.state.flip && <Text style={styles.buttonText}>Question</Text>}
                                {!this.state.flip && <Text style={styles.buttonText}>Answer</Text>}
                            </TouchableOpacity>
                        </View>

                        <View style={styles.card}>
                            <TextButton text={"Correct"} type={"green"} onPress={() => this.handleButtonPress(true)}/>
                            <TextButton text={"Incorrect"} type={"red"} onPress={() => this.handleButtonPress(false)}/>
                        </View>
                    </View>}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
    indicator: {
        fontSize: 20,
        marginLeft: 20,
        fontWeight: 'bold',
        textAlign: 'left'
    },
    card: {
        borderWidth: 0,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20
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
    }
})

export default connect(null)(Quiz)