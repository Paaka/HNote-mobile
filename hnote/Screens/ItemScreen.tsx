import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import {
    updateTask,
    updateTaskIsFinished,
    updateIsImportantHandler,
    updateMyDay,
} from '../actions';

import SubtaskItem from '../components/molecules/FormItems/SubtaskItem';
import { ScrollView } from 'react-native';
import SubTaskInput from '../components/molecules/SubTaskForm';
import IoniconsButton from '../components/atoms/IoniconsButton';
import MarginWrapper from '../components/molecules/FormItems/MarginWrapper';
import MenuListItem from '../components/molecules/MenuListItem';
import AdditionalOptionsItem from '../components/molecules/AdditonalOptionsItem';
import StyledTextInput from '../components/atoms/TextInput';

const Wrapper = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    margin-top: 15px;
    padding-bottom: 10px;
    justify-content: space-evenly;
`;

const TopItemsWrapper = styled.View`
    max-height: 33%;
    border-bottom-color: #ccc;
    border-bottom-width: 3px;
`;

const InnerWrapper = styled.View`
    display: flex;
    flex: 1;
`;

const AdditionalOptions = styled.View`
    align-items: center;
`;

const ItemScreen = (props) => {
    const tasks = useSelector((state) => state.tasks);
    const taskID = props.navigation.getParam('taskId');
    const arrTask = tasks.filter((item) => item.id === taskID);
    const [task] = arrTask;

    const dispatch = useDispatch();

    const isCompletedHandler = () => {
        dispatch(updateTaskIsFinished(task.id, task.isDone));
    };

    const isImportantHandler = () => {
        dispatch(updateIsImportantHandler(task.id, task.isImportant));
    };

    const updateMyDayViewHanlder = () => {
        dispatch(updateMyDay(task.id, task.isOnMyDayView));
    };

    const updateTaskContentHandler = (str) => {
        dispatch(updateTask(task.id, str));
    };

    return (
        <InnerWrapper>
            <TopItemsWrapper>
                <Wrapper>
                    <MarginWrapper mLeft={8}>
                        <IoniconsButton
                            onPressFn={isCompletedHandler}
                            icon={
                                task.isDone
                                    ? 'md-checkmark-circle'
                                    : 'md-checkmark-circle-outline'
                            }
                        />
                    </MarginWrapper>
                    <StyledTextInput
                        secondary
                        width={80}
                        onChangeFn={updateTaskContentHandler}
                        value={task.content}
                        fontSize={22}
                    />
                    <IoniconsButton
                        onPressFn={isImportantHandler}
                        icon={task.isImportant ? 'md-star' : 'md-star-outline'}
                    />
                </Wrapper>
                <ScrollView>
                    {task.subTasks.map((subtask) => (
                        <SubtaskItem
                            key={subtask.id}
                            item={subtask}
                            taskID={taskID}
                        ></SubtaskItem>
                    ))}
                    <SubTaskInput id={task.id} />
                </ScrollView>
            </TopItemsWrapper>
            <AdditionalOptions>
                <AdditionalOptionsItem
                    icon="md-sunny"
                    isHighlight={task.isOnMyDayView}
                    onPressFn={updateMyDayViewHanlder}
                >
                    {task.isOnMyDayView
                        ? 'Added to my day view'
                        : 'Add to my day view'}
                </AdditionalOptionsItem>
            </AdditionalOptions>
        </InnerWrapper>
    );
};

const mapStateToProps = ({ tasks }) => ({ tasks });

export default ItemScreen;
