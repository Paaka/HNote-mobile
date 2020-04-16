import React, { FC } from 'react';
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';

const StyledImage = styled.Image`
    width: 30px;
    height: 30px;
`;

interface IButtonIcon {
    image: 'string';
    onClick(): Function | void;
}

const ButtonIcon: FC<IButtonIcon> = (props) => {
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
