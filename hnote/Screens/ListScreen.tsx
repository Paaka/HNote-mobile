import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';
import { addTaskToList, updateTask } from '../actions/index';
import styled from 'styled-components';

import SingleTask from '../components/molecules/SingleTask';

const Wrapper = styled.View`
    flex: 1;
    background-color: rgb(107, 121, 132);
`;

const ListScreen = (props) => {
    const [enteredText, setEnteredText] = useState('');

    useEffect(() => {
        props.navigation.addListener('didFocus', (payload) => {
            console.log('Hello');
        });
    }, []);

    const inputChangeHandler = (enteredText) => {
        setEnteredText(enteredText);
    };

    const listID = props.navigation.getParam('listId');
    const allMyTasks = props.tasks.filter((task) => task.list === listID);

    const detailOpenHandler = () => {
        props.dispatch(addTaskToList(listID, enteredText));
    };

    const navigateToSingleTaskScreen = (item) => {
        props.navigation.navigate({
            routeName: 'TaskPage',
            params: {
                taskId: item.id,
            },
        });
    };
    return (
        <Wrapper>
            <TextInput onChangeText={inputChangeHandler}></TextInput>
            <Button title="Add" onPress={() => detailOpenHandler()} />
            <ScrollView>
                {allMyTasks.map((item) => (
                    <SingleTask
                        key={item.id}
                        value={item.content}
                        isFinished={item.isDone}
                        onPress={() => navigateToSingleTaskScreen(item)}
                    />
                ))}
            </ScrollView>
        </Wrapper>
    );
};

ListScreen.navigationOptions = (someData) => {
    const listTitle = someData.navigation.getParam('title');
    return {
        headerTitle: listTitle,
    };
};

const mapStateToProps = ({ userLists, tasks }) => ({ userLists, tasks });

export default connect(mapStateToProps, null)(ListScreen);
