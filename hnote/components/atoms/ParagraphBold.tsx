import React, { Children } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ParagraphBold = () => (
    <View>
        <Text style={styles.text}>{Children}</Text>
    </View>
);

const styles = StyleSheet.create({
    wrapper: {},
    text: {
        fontSize: 700,
    },
});

export default ParagraphBold;
