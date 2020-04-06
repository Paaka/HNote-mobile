import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import styled from 'styled-components';
import {
    updateTask,
    updateTaskIsFinished,
    updateIsImportantHandler,
    removeTask,
    addTaskToList,
} from '../actions';

import { StackActions, NavigationActions } from 'react-navigation';

import ButtonIcon from '../components/atoms/ButtonIcon';
import SubTaskInput from '../components/molecules/SubTaskInput';
import ButtonItem from '../components/molecules/ButtonItem';

const Wrapper = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    margin-top: 15px;
    border-bottom-color: #ccc;
    border-bottom-width: 2px;
    padding-bottom: 10px;
`;

const StyledTextInput = styled.TextInput`
    max-width: 80%;
    min-width: 80%;
    font-size: 22px;
    margin-left: 10px;
`;

const InnerWrapper = styled.View`
    display: flex;
    flex: 1;
`;

const ItemScreen = (props) => {
    const taskID = props.navigation.getParam('taskId');
    const arrTask = props.tasks.filter((item) => item.id === taskID);
    const [task] = arrTask;

    const dispatch = useDispatch();

    const EmptyImage = require('../assets/images/circle.png');
    const FullImage = require('../assets/images/right.png');
    const StarFull = require('../assets/images/starFull.png');
    const StarOutline = require('../assets/images/starOutline.png');
    const trashBin = require('../assets/images/delete.png');

    const resetAction = StackActions.reset({
        index: 1,
        actions: [
            NavigationActions.navigate({ routeName: 'MainPage' }),
            NavigationActions.navigate({ routeName: 'ListPage' }),
        ],
    });

    const isCompletedHandler = () => {
        dispatch(updateTaskIsFinished(task.id, task.isDone));
    };

    const isImportantHandler = () => {
        dispatch(updateIsImportantHandler(task.id, task.isFinished));
    };

    const deleteTaskHandler = () => {
        props.navigation.dispatch(resetAction);

        dispatch(removeTask(task.list, task.id));
    };

    return (
        <InnerWrapper>
            <Wrapper>
                <ButtonIcon onClick={isCompletedHandler} image={EmptyImage} />
                <StyledTextInput
                    onChange={(str) =>
                        dispatch(updateTask(task.id, str.nativeEvent.text))
                    }
                    value={task.content}
                />
                <ButtonIcon onClick={isImportantHandler} image={StarOutline} />
            </Wrapper>
            <SubTaskInput />
            <ButtonItem onClick={deleteTaskHandler} icon={trashBin}>
                Delete this task
            </ButtonItem>
        </InnerWrapper>
    );
};

const mapStateToProps = ({ tasks }) => ({ tasks });

export default connect(mapStateToProps, null)(ItemScreen);
