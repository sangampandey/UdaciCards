import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { purple,grey,black,white } from '../utils/colors';

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
    whiteButtonText: {
        color: black,
        fontSize: 20,
    },
    blackButtonText: {
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
    }else{
        return (
            <TouchableOpacity style={styles.blackButton} onPress={onPress} disabled={disabled}>
                <Text style={styles.blackButtonText}>{text}</Text>
            </TouchableOpacity>
        );
    }
}