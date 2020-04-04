import React from 'react';
import { connect, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { View, TextInput, Text } from 'react-native';
import { updateTask } from '../actions/index';
import ButtonIcon from '../components/atoms/ButtonIcon';
import SubTaskInput from '../components/molecules/SubTaskInput';

import { updateTaskIsFinished, updateIsImportantHandler } from '../actions';

const Wrapper = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    margin-top: 15px;
    margin-left: 5px;
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

const ItemScreen = props => {
    const taskID = props.navigation.getParam('taskId');
    const arrTask = props.tasks.filter(item => item.id === taskID);
    const [task] = arrTask;
    const dispatch = useDispatch();

    const EmptyImage = require('../assets/images/circle.png');
    const FullImage = require('../assets/images/right.png');
    const StarFull = require('../assets/images/starFull.png');
    const StarOutline = require('../assets/images/starOutline.png');

    const isCompletedHandler = () => {
        dispatch(updateTaskIsFinished(task.id, task.isDone));
    };

    const isImportantHandler = () => {
        dispatch(updateIsImportantHandler(task.id, task.isFinished));
    };

    return (
        <InnerWrapper>
            <Wrapper>
                <ButtonIcon
                    onClick={isCompletedHandler}
                    image={task.isDone ? FullImage : EmptyImage}
                />
                <StyledTextInput
                    onChange={str =>
                        dispatch(updateTask(task.id, str.nativeEvent.text))
                    }
                    value={task.content}
                />
                <ButtonIcon
                    onClick={isImportantHandler}
                    image={task.isFinished ? StarFull : StarOutline}
                />
            </Wrapper>
            <SubTaskInput />
        </InnerWrapper>
    );
};

const mapStateToProps = ({ tasks }) => ({ tasks });

export default connect(mapStateToProps, null)(ItemScreen);
