import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

import Paragraph from '../atoms/Texts/Paragraph';
import ButtonIcon from '../atoms/ButtonIcon';

const RowWrapper = styled.View`
    display: flex;
    flex-direction: row;
    background-color: white;
    align-items: center;
    border-radius: 5px;
    width: 95%;
    align-self: center;
    margin: 5px 0px;
`;

const Wrapper = styled.View`
    display: flex;
    flex-direction: row;
    padding: 10px 5px;
    width: 80%;
`;

const SingleTask = (props) => {
    const emptyImg = require('../../assets/images/circle.png');
    const fullImg = require('../../assets/images/right.png');
    return (
        <RowWrapper>
            <View>
                <Ionicons name={'md-checkmark-circle-outline'} size={24} />
            </View>
            <Wrapper>
                <TouchableOpacity onPress={props.onPress}>
                    <Paragraph isFinished={props.isFinished}>
                        {props.value}
                    </Paragraph>
                </TouchableOpacity>
            </Wrapper>
        </RowWrapper>
    );
};

export default connect(null, null)(SingleTask);
