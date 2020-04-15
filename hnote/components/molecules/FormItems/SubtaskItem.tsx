import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import IoniconsButton from '../../atoms/IoniconsButton';

import {
    updateSubtask,
    deleteSubtask,
    updateIsSubtaskIsDone,
} from '../../../actions/index';
import StyledTextInput from '../../atoms/TextInput';

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
    text-decoration-line: ${(props) =>
        props.isDone ? 'line-through' : 'none'};
`;

const MarginLeft = styled.View`
    margin-left: ${(props) => props.mLeft + 'px'};
    margin-right: ${(props) => props.mRight + 'px'};
`;

interface ISubtaskItem {}

const SubtaskItem = ({ item, taskID }) => {
    const dispatch = useDispatch();
    const changeInputHandler = (str) => {
        dispatch(updateSubtask(taskID, item.id, str));
    };

    const deleteSubtaskHandler = () => {
        dispatch(deleteSubtask(taskID, item.id));
    };

    const isSubtaskDoneHandler = () => {
        dispatch(updateIsSubtaskIsDone(taskID, item.id, !item.isDone));
    };

    return (
        <Wrapper>
            <MarginLeft mLeft={10} mRight={10}>
                <IoniconsButton
                    size={28}
                    icon={
                        item.isDone
                            ? 'md-checkmark-circle'
                            : 'md-checkmark-circle-outline'
                    }
                    onPressFn={isSubtaskDoneHandler}
                />
            </MarginLeft>
            <BorderWrapper>
                <StyledTextInput
                    width={90}
                    fontSize={16}
                    isFinished={item.isDone}
                    value={item.content}
                    onChangeFn={changeInputHandler}
                    secondary
                />
                <MarginLeft mLeft={15} mRight={0}>
                    <IoniconsButton
                        size={22}
                        icon="md-close"
                        onPressFn={deleteSubtaskHandler}
                    />
                </MarginLeft>
            </BorderWrapper>
        </Wrapper>
    );
};

export default SubtaskItem;
