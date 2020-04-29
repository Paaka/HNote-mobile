import React, { FC } from 'react';
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';

const Wrapper = styled.View`
    padding: 5px 20px;
    background-color: ${({ bgColor }) => (bgColor ? bgColor : 'royalblue')};
    border: none;
    border-radius: 40px;
`;

const StyledText = styled.Text`
    font-size: 20px;
    font-weight: 300;
    text-transform: uppercase;
    color: ${({ color }) => (color ? color : 'white')};
`;

interface IButton {
    color?: string;
    bgColor?: string;
    children?: string;
    onPress(): () => void;
}

const Button: FC<IButton> = (props) => {
    const onPressHandler = () => {
        props.onPress();
    };

    return (
        <TouchableOpacity onPress={onPressHandler}>
            <Wrapper bgColor={props.bgColor}>
                <StyledText>{props.children}</StyledText>
            </Wrapper>
        </TouchableOpacity>
    );
};

export default Button;
