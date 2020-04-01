import React, { useState } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';
import { addTaskToList, updateTask } from '../actions/index';
import styled from 'styled-components';

import SingleTask from '../components/molecules/SingleTask';

const Wrapper = styled.View`
    display: ${props => (props.isDetailOpen ? 'none' : 'flex')};
`;

const ListScreen = props => {
    const [enteredText, setEnteredText] = useState('');

    const inputChangeHandler = enteredText => {
        setEnteredText(enteredText);
    };

    const listID = props.navigation.getParam('listId');
    const allMyTasks = props.tasks.filter(task => task.list === listID);
    console.log(allMyTasks[0]);

    const detailOpenHandler = () => {
        props.dispatch(addTaskToList(listID, enteredText));
    };

    const sayHello = item => {
        props.navigation.navigate({
            routeName: 'TaskPage',
            params: {
                taskId: item.id,
            },
        });
    };
    return (
        <View>
            <Wrapper>
                <TextInput onChangeText={inputChangeHandler}></TextInput>
                <Button title="Add" onPress={() => detailOpenHandler()} />
                <ScrollView>
                    {allMyTasks.map(item => (
                        <SingleTask
                            key={item.id}
                            value={item.content}
                            // onChange={str =>
                            //     props.dispatch(updateTask(item.id, str))
                            // }
                            onPress={item => sayHello(item)}
                        />
                    ))}
                </ScrollView>
            </Wrapper>
        </View>
    );
};

ListScreen.navigationOptions = someData => {
    const listTitle = someData.navigation.getParam('title');
    return {
        headerTitle: listTitle,
    };
};

const mapStateToProps = ({ userLists, tasks }) => ({ userLists, tasks });

export default connect(mapStateToProps, null)(ListScreen);
