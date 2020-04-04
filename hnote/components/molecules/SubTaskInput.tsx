import React, { useState } from 'react';
import styled from 'styled-components';
import ButtonIcon from '../atoms/ButtonIcon';

const Wrapper = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 15px;
`;

const StyledTextInput = styled.TextInput`
    font-size: 20px;
    max-width: 80%;
    margin-left: 10px;
`;

const SubTaskInput = props => {
    const AddIcon = require('../../assets/images/add.png');
    const [inputedText, setInputedText] = useState('');

    const addSubTaskHandleler = () => {};

    const changeTextHandleler = str => {
        console.log(str);
    };

    return (
        <Wrapper>
            <ButtonIcon image={AddIcon} onClick={addSubTaskHandleler} />
            <StyledTextInput
                id="hello"
                onChangeText={changeTextHandleler}
                placeholder="Add step"
                placeholderTextColor="royalblue"
            />
        </Wrapper>
    );
};

export default SubTaskInput;
