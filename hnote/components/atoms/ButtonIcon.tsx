import React from 'react';
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';
import Button from './RoundButton';

const StyledImage = styled.Image`
    width: 30px;
    height: 30px;
    elevation: 100;
    z-index: 100;
`;

const ButtonIcon = (props) => {
    const onPressHandler = () => {
        props.onClick();
    };
    return (
        <TouchableOpacity onPress={onPressHandler}>
            {props.children}
            <StyledImage source={props.image} />
        </TouchableOpacity>
    );
};

export default ButtonIcon;
