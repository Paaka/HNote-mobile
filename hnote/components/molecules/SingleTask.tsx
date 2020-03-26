import React from 'react';
import { View, TextInput } from 'react-native';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Wrapper = styled.View`
    background-color: red;
`;

const SingleTask = props => {
    return (
        <Wrapper>
            <TextInput
                value={props.value}
                onChangeText={props.onChange}
            ></TextInput>
        </Wrapper>
    );
};

export default connect(null, null)(SingleTask);
