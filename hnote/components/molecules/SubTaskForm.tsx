import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addSubtask } from '../../actions/index';

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

interface ISubtaskForm {
    id: string;
}

const SubTaskForm: FC<ISubtaskForm> = (props) => {
    const dispatch = useDispatch();
    const AddIcon = require('../../assets/images/add.png');
    const [inputedText, setInputedText] = useState('');

    const addSubTaskHandleler = () => {
        dispatch(addSubtask(props.id, inputedText));
    };

    const changeTextHandleler = (str) => {
        setInputedText(str);
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

export default SubTaskForm;
