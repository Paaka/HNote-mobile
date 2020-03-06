import React from 'react';
import { View, StyleSheet } from 'react-native';

const HR = props => <View style={styles.HR}></View>;

const styles = StyleSheet.create({
    HR: {
        width: '95%',
        height: 1,
        backgroundColor: 'gray',
        marginRight: 10,
        marginVertical: 15,
    },
});

export default HR;
