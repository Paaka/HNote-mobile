import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { removeTask, updateTaskIsFinished } from '../../actions/index';

import Paragraph from '../atoms/Texts/Paragraph';
import TouchableWrapper from '../atoms/Wrappers/TouchableWrapper';
import IoniconsButton from '../atoms/IoniconsButton';

const Wrapper = styled.View`
    display: flex;
    flex-direction: row;
    background-color: white;
    align-items: center;
    border-radius: 5px;
    width: 95%;
    align-self: center;
    margin: 5px 0px;
`;

const ContentWrapper = styled.View`
    padding: 10px 5px;
    min-width: 85%;
`;

const SingleTask = ({ task, ...props }) => {
    const dispatch = useDispatch();

    const deletTask = () => {
        dispatch(removeTask(props.id));
    };

    const navigateToSingleTaskScreen = () => {
        props.navigation.navigate({
            routeName: 'TaskPage',
            params: {
                taskId: props.id,
            },
        });
    };

    const updateTask = () => {
        dispatch(updateTaskIsFinished(task.id, task.isDone));
    };

    return (
        <Wrapper>
            <IoniconsButton
                icon={
                    props.isFinished
                        ? 'md-checkmark-circle'
                        : 'md-checkmark-circle-outline'
                }
                onPressFn={updateTask}
            />
            <TouchableWrapper onPressFn={navigateToSingleTaskScreen}>
                <ContentWrapper>
                    <Paragraph isFinished={props.isFinished}>
                        {props.value}
                    </Paragraph>
                </ContentWrapper>
            </TouchableWrapper>
            <IoniconsButton icon="md-close" onPressFn={deletTask} />
        </Wrapper>
    );
};

export default SingleTask;
