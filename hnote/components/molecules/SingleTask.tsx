import React from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Wrapper = styled.View`
    background-color: red;
`;

const SingleTask = props => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <Wrapper>
                {/* <TextInput
                value={props.value}
                onChangeText={props.onChange}
            ></TextInput> */}
                <Text>{props.value}</Text>
            </Wrapper>
        </TouchableOpacity>
    );
};

export default connect(null, null)(SingleTask);
