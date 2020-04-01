import React from 'react';
import styled from 'styled-components';
import { View, Text } from 'react-native';

const Wrapper2 = styled.View`
    width: 395px;
    height: 680px;
    position: absolute;
    background-color: red;
    display: none;
`;

const SingleTask = props => {
    return (
        <Wrapper2>
            <Text>Hello</Text>
        </Wrapper2>
    );
};

export default SingleTask;
