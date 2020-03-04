import React from 'react';
import { Text, StyleSheet } from 'react-native';

const TitleText = props => <Text style={styles.Title}>{props.children}</Text>;

const styles = StyleSheet.create({
    Title: {
        fontSize: 30,
        fontWeight: '700',
        color: 'royalblue',
    },
});

export default TitleText;
