import React from 'react';
import styled from 'styled-components';
import { TouchableOpacity, Text } from 'react-native';
import Paragraph from '../atoms/Texts/Paragraph';
import ButtonIcon from '../atoms/ButtonIcon';

const Wrapper = styled.View`
    display: flex;
    flex-direction: row;
    width: 95%;
    margin: 10px;
    border: 1px solid #ccc;
    padding: 10px 20px;
`;

const ButtonItem = (props) => {
    const onPressHandleler = () => {
        props.onClick();
    };

    return (
        <TouchableOpacity onPress={onPressHandleler}>
            <Wrapper>
                <ButtonIcon image={props.icon} />
                <Paragraph color="#444">{props.children}</Paragraph>
            </Wrapper>
        </TouchableOpacity>
    );
};

export default ButtonItem;
