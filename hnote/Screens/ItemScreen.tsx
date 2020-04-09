import React from 'react';
import { connect, useDispatch } from 'react-redux';
import styled from 'styled-components';
import {
    updateTask,
    updateTaskIsFinished,
    updateIsImportantHandler,
} from '../actions';

import SubtaskItem from '../components/molecules/FormItems/SubtaskItem';
import { View, Text } from 'react-native';
import SubTaskInput from '../components/molecules/SubTaskForm';
import IoniconsButton from '../components/atoms/IoniconsButton';

const Wrapper = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    margin-top: 15px;
    border-bottom-color: #ccc;
    border-bottom-width: 3px;
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

    const isCompletedHandler = () => {
        dispatch(updateTaskIsFinished(task.id, task.isDone));
    };

    const isImportantHandler = () => {
        dispatch(updateIsImportantHandler(task.id, task.isFinished));
    };

    return (
        <InnerWrapper>
            <Wrapper>
                <IoniconsButton
                    onPressFn={isCompletedHandler}
                    icon={
                        task.isDone
                            ? 'md-checkmark-circle'
                            : 'md-checkmark-circle-outline'
                    }
                />
                <StyledTextInput
                    onChange={(str) =>
                        dispatch(updateTask(task.id, str.nativeEvent.text))
                    }
                    value={task.content}
                />
                <IoniconsButton
                    onPressFn={isImportantHandler}
                    icon={task.isFinished ? 'md-star' : 'md-star-outline'}
                />
            </Wrapper>
            {task.subTasks.map((subtask) => (
                <SubtaskItem key={subtask.id}></SubtaskItem>
            ))}
            <SubTaskInput id={task.id} />
        </InnerWrapper>
    );
};

const mapStateToProps = ({ tasks }) => ({ tasks });

export default connect(mapStateToProps, null)(ItemScreen);
