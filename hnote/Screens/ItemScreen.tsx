import React from 'react';
import { connect, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { View, TextInput, Text } from 'react-native';
import { updateTask } from '../actions/index';
import ButtonIcon from '../components/atoms/ButtonIcon';

import { updateTaskIsFinished } from '../actions';

const ItemScreen = props => {
    const taskID = props.navigation.getParam('taskId');
    const arrTask = props.tasks.filter(item => item.id === taskID);
    const [task] = arrTask;
    const dispatch = useDispatch();

    const EmptyImage = require('../assets/images/circle.png');
    const FullImage = require('../assets/images/right.png');

    const isCompletedHandler = () => {
        dispatch(updateTaskIsFinished(task.id, task.isDone));
    };

    return (
        <View>
            <ButtonIcon
                onClick={isCompletedHandler}
                image={task.isDone ? FullImage : EmptyImage}
            />
            <TextInput
                onChange={str =>
                    dispatch(updateTask(task.id, str.nativeEvent.text))
                }
                value={task.content}
            />
        </View>
    );
};

const mapStateToProps = ({ tasks }) => ({ tasks });

export default connect(mapStateToProps, null)(ItemScreen);
