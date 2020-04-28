import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addList } from '../actions';
import { Keyboard } from 'react-native';

import Heading from '../components/atoms/Texts/TitleText';
import Input from '../components/atoms/TextInput';
import Button from '../components/atoms/RoundButton';

const Wrapper = styled.View`
    display: flex;
    flex: 1;
    align-items: center;
    margin-top: 100px;
`;

const FlexWrapper = styled.View`
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    width: 80%;
    justify-content: space-evenly;
`;

const NewListScreen = (props) => {
    const dispatch = useDispatch();
    const [enteredList, setEnteredList] = useState('');

    const inputChangeHandler = (enteredText) => {
        setEnteredList(enteredText);
    };

    const addListHandler = () => {
        Keyboard.dismiss();
        props.navigation.goBack();
        dispatch(addList(enteredList));
    };

    const goBackHandler = () => {
        props.navigation.goBack();
    };

    return (
        <Wrapper>
            <Heading>Add List:</Heading>
            <Input
                width={70}
                value={enteredList}
                onChangeFn={inputChangeHandler}
            ></Input>
            <FlexWrapper>
                <Button onPress={addListHandler}>Add Item</Button>
                <Button bgColor="red" onPress={goBackHandler}>
                    Cancel
                </Button>
            </FlexWrapper>
        </Wrapper>
    );
};

export default NewListScreen;
