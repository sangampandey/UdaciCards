import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {black, green, red, white} from '../utils/colors';
import styles from "./styles";


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