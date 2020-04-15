import React, { FC } from 'react';
import styled, { css } from 'styled-components';

interface ITextInput {
    width?: number;
    isFinished?: boolean;
    secondary?: boolean;
    fontSize?: number;
    value: string;
    onChangeFn: (str: string) => void;
}

const Input = styled.TextInput`
    width: ${(props) => (props.width ? props.width + '%' : '100%')};
    padding: 3px 10px;
    font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '18px')};
    background-color: #ddd;
    border: 2px solid #ddd;
    border-radius: 40px;
    text-decoration-line: ${(props) =>
        props.isDone ? 'line-through' : 'none'};
    ${({ secondary }) =>
        secondary &&
        css`
            background-color: transparent;
            border: none;
        `}
`;

const StyledTextInput: FC<ITextInput> = (props) => {
    const onChangeHandler = (str) => {
        props.onChangeFn(str);
    };
    return (
        <Input
            onChangeText={onChangeHandler}
            width={props.width}
            boolean={props.secondary}
            isDone={props.isFinished}
            value={props.value}
            fontSize={props.fontSize}
            secondary={props.secondary}
        />
    );
};

export default StyledTextInput;
