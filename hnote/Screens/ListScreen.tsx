import React, { useState } from 'react';
import { connect } from 'react-redux';
import { ScrollView, View } from 'react-native';
import { addTaskToList, updateList } from '../actions/index';
import styled from 'styled-components';

import SingleTask from '../components/molecules/SingleTask';
import StyledTextInput from '../components/atoms/TextInput';
import ButtonIcon from '../components/atoms/ButtonIcon';

const Wrapper = styled.View`
    flex: 1;
`;

const RowWrapper = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 5px;
    margin-top: 10px;
`;

const ListScreen = (props) => {
    const listID = props.navigation.getParam('listId');
    const currentList = props.userLists.filter((list) => list.id === listID);
    const allMyTasks = props.tasks.filter((task) => task.list === listID);
    console.log(currentList[0]);
    const [enteredText, setEnteredText] = useState('');

    const inputChangeHandler = (enteredText) => {
        setEnteredText(enteredText);
    };

    const updateListTitle = (str) => {
        props.dispatch(updateList(currentList[0].id, str));
    };

    const detailOpenHandler = () => {
        props.dispatch(addTaskToList(listID, enteredText));
        setEnteredText('');
    };

    return (
        <Wrapper>
            <StyledTextInput
                value={currentList[0].text}
                onChangeFn={updateListTitle}
                secondary
            />
            <RowWrapper>
                <StyledTextInput
                    width={90}
                    value={enteredText}
                    onChangeFn={inputChangeHandler}
                    placeholder="Add task to list"
                ></StyledTextInput>

                <ButtonIcon
                    onClick={detailOpenHandler}
                    image={require('../assets/images/plus.png')}
                ></ButtonIcon>
            </RowWrapper>
            <ScrollView>
                {allMyTasks.map((item) => (
                    <SingleTask
                        key={item.id}
                        id={item.id}
                        value={item.content}
                        isFinished={item.isDone}
                        task={item}
                        navigation={props.navigation}
                    />
                ))}
            </ScrollView>
        </Wrapper>
    );
};

const mapStateToProps = ({ userLists, tasks }) => ({ userLists, tasks });

export default connect(mapStateToProps, null)(ListScreen);
