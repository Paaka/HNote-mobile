import React, { useState } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';
import { addTaskToList, updateTask } from '../actions/index';

import SingleTask from '../components/molecules/SingleTask';

const ListScreen = props => {
    const [enteredText, setEnteredText] = useState('');

    const inputChangeHandler = enteredText => {
        setEnteredText(enteredText);
    };

    const listID = props.navigation.getParam('listId');
    const allMyTasks = props.tasks.filter(task => task.list === listID);
    console.log(allMyTasks[0]);
    return (
        <View>
            <TextInput onChangeText={inputChangeHandler}></TextInput>
            <Button
                title="Add"
                onPress={() =>
                    props.dispatch(addTaskToList(listID, enteredText))
                }
            />
            <ScrollView>
                {allMyTasks.map(item => (
                    <SingleTask
                        key={item.id}
                        value={item.content}
                        onChange={str =>
                            props.dispatch(updateTask(item.id, str))
                        }
                    />
                ))}
            </ScrollView>
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
