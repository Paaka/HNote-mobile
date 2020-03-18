import React from 'react';
import { View, Text, TextInput, Button, Modal, StyleSheet } from 'react-native';

const NewListScreen = props => (
    <View>
        <Text>Hello there</Text>
        <TextInput></TextInput>
    </View>
);

const styles = StyleSheet.create({
    inputText: {
        borderBottomColor: 'black',
        borderBottomWidth: 2,
    },
});

export default NewListScreen;
