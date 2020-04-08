import React from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { removeTask } from '../../actions/index';

import Paragraph from '../atoms/Texts/Paragraph';
import TouchableWrapper from '../atoms/Wrappers/TouchableWrapper';

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
    width: 85%;
`;

const SingleTask = (props) => {
    const dispatch = useDispatch();
    const deletDis = () => {
        dispatch(removeTask(props.id));
    };

    return (
        <RowWrapper>
            <TouchableWrapper onPressFn={props.updateFn}>
                <Ionicons
                    name={
                        props.isFinished
                            ? 'md-checkmark-circle'
                            : 'md-checkmark-circle-outline'
                    }
                    size={32}
                />
            </TouchableWrapper>
            <Wrapper>
                <TouchableOpacity onPress={props.onPress}>
                    <Paragraph isFinished={props.isFinished}>
                        {props.value}
                    </Paragraph>
                </TouchableOpacity>
            </Wrapper>
            <TouchableWrapper onPressFn={deletDis}>
                <Ionicons name="md-close" size={32} />
            </TouchableWrapper>
        </RowWrapper>
    );
};

export default connect(null, null)(SingleTask);
