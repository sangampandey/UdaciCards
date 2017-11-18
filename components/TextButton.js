import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import {purple, red, black, white, green} from '../utils/colors';

const styles = StyleSheet.create({
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

export default function TextButton({text, onPress,type,disabled=false}) {
    if(type === "white"){
        return (
            <TouchableOpacity style={styles.whiteButton} onPress={onPress} disabled={disabled}>
                <Text style={styles.whiteButtonText}>{text}</Text>
            </TouchableOpacity>
        );
    }else if(type === "black"){
        return (
            <TouchableOpacity style={styles.blackButton} onPress={onPress} disabled={disabled}>
                <Text style={styles.blackButtonText}>{text}</Text>
            </TouchableOpacity>
        );
    }else if(type === "green"){
        return (
            <TouchableOpacity style={styles.greenButton} onPress={onPress} disabled={disabled}>
                <Text style={styles.greenButtonText}>{text}</Text>
            </TouchableOpacity>
        );
    }else if(type === "red"){
        return (
            <TouchableOpacity style={styles.redButton} onPress={onPress} disabled={disabled}>
                <Text style={styles.redButtonText}>{text}</Text>
            </TouchableOpacity>
        );
    }
}