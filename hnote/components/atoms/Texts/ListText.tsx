import React from 'react';
import { Text, StyleSheet } from 'react-native';

const ListText = props => (
    <Text style={{ ...styles.listText, ...props.style }}>{props.children}</Text>
);

const styles = StyleSheet.create({
    listText: {
        fontWeight: '700',
        fontSize: 20,
    },
});

export default ListText;
