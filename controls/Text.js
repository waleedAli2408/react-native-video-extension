import React from 'react';
import { StyleSheet, Text as RNText, } from 'react-native';
const Text = ({ dim, style, ...props }) => (<RNText style={StyleSheet.flatten([styles.text, dim && styles.dim, style])} {...props}/>);
const styles = StyleSheet.create({
    text: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
    dim: {
        color: '#c4c4c4',
    },
});
export default Text;
