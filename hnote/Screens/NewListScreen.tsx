import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addList } from '../actions';
import { View, Text, TextInput, Button, Modal, StyleSheet } from 'react-native';

const NewListScreen = props => {
    const [enteredList, setEnteredList] = useState('');

    const inputChangeHandler = enteredText => {
        setEnteredList(enteredText);
    };
    return (
        <View>
            <Text>Hello there</Text>
            <TextInput
                style={styles.inputText}
                onChangeText={inputChangeHandler}
            ></TextInput>
            <Button
                title="Add"
                onPress={() => props.dispatch(addList(enteredList))}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputText: {
        borderBottomColor: 'black',
        borderBottomWidth: 2,
    },
});

export default connect(null, null)(NewListScreen);
