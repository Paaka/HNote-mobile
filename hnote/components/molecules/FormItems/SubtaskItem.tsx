import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import IoniconsButton from '../../atoms/IoniconsButton';

import { updateSubtask } from '../../../actions/index';

const Wrapper = styled.View`
    display: flex;
    flex-direction: row;
    width: 87%;
    align-items: center;
    margin-top: 5px;
`;

const BorderWrapper = styled.View`
    display: flex;
    flex-direction: row;
    border-bottom-width: 2px;
    border-bottom-color: #ccc;
    align-items: center;
`;
const StyledInput = styled.TextInput`
    width: 90%;
`;

const MarginLeft = styled.View`
    margin-left: ${(props) => props.mLeft};
    margin-right: ${(props) => props.mRight};
`;

interface ISubtaskItem {}

const SubtaskItem = ({ item, taskID }) => {
    const dispatch = useDispatch();
    const changeInputHandler = (str) => {
        dispatch(updateSubtask(taskID, item.id, str));
    };
    return (
        <Wrapper>
            <MarginLeft mLeft={10} mRight={10}>
                <IoniconsButton
                    size={28}
                    icon="md-checkmark-circle-outline"
                    onPressFn={() => {
                        console.log('Tha');
                    }}
                />
            </MarginLeft>
            <BorderWrapper>
                <StyledInput
                    value={item.content}
                    onChangeText={changeInputHandler}
                />
                <MarginLeft mLeft={15} mRight={0}>
                    <IoniconsButton
                        size={22}
                        icon="md-close"
                        onPressFn={() => {
                            console.log('deletDis');
                        }}
                    />
                </MarginLeft>
            </BorderWrapper>
        </Wrapper>
    );
};

export default SubtaskItem;
