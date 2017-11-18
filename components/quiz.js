import React, {Component} from 'react'
import {connect} from 'react-redux'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import FlipCard from 'react-native-flip-card';
import {red} from "../utils/colors";
import TextButton from "./TextButton";
import styles from "./styles";

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
            <View style={styles.quiz_container}>
                {completedQuiz ?
                    <View>
                        <Text style={styles.text}>Your score is : {((correctScore / questions.length) * 100).toFixed(2)}%</Text>
                        <View style={styles.quiz_card}>

                            <TextButton text={"Restart Quiz"} type={"white"} onPress={() => this.restart()}/>

                            <TextButton text={"Go Back"} type={"black"}
                                        onPress={() => this.props.navigation.goBack()}/>
                        </View>
                    </View>
                    :
                    <View>
                        <Text style={styles.indicator}>{currentQuestion}/{questions.length}</Text>

                        <FlipCard
                            style={[styles.quiz_card, {marginTop: 100}]}
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

                        <View style={styles.quiz_card}>
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

                        <View style={styles.quiz_card}>
                            <TextButton text={"Correct"} type={"green"} onPress={() => this.handleButtonPress(true)}/>
                            <TextButton text={"Incorrect"} type={"red"} onPress={() => this.handleButtonPress(false)}/>
                        </View>
                    </View>}
            </View>
        )
    }
}

export default connect(null)(Quiz)