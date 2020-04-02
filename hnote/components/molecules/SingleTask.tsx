import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Paragraph from '../atoms/Texts/Paragraph';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const Wrapper = styled.View`
    display: flex;
    flex-direction: row;
    background-color: white;
    padding: 10px 5px;
    margin: 2px 0px;
    border-radius: 5px;
    width: 98%;
    align-self: center;
    align-items: center;
`;

const StyledImage = styled.Image`
    width: 20px;
    height: 20px;
    margin: 0px 10px;
`;

const SingleTask = props => {
    const emptyImg = require('../../assets/images/circle.png');
    const fullImg = require('../../assets/images/right.png');
    return (
        <TouchableOpacity onPress={props.onPress}>
            <Wrapper>
                <StyledImage
                    onPress={console.log('work')}
                    source={props.isFinished ? fullImg : emptyImg}
                />
                <Paragraph isFinished={props.isFinished}>
                    {props.value}
                </Paragraph>
            </Wrapper>
        </TouchableOpacity>
    );
};

export default connect(null, null)(SingleTask);
