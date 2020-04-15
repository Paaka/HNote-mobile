import React, { useState } from 'react';
import { connect } from 'react-redux';
import { ScrollView, View } from 'react-native';
import { addTaskToList } from '../actions/index';
import styled from 'styled-components';

import SingleTask from '../components/molecules/SingleTask';
import StyledTextInput from '../components/atoms/TextInput';
import IoniconsButton from '../components/atoms/IoniconsButton';
import ButtonIcon from '../components/atoms/ButtonIcon';
import HR from '../components/atoms/Hr';

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
    const allMyTasks = props.tasks.filter((task) => task.list === listID);

    const [enteredText, setEnteredText] = useState('');

    const inputChangeHandler = (enteredText) => {
        setEnteredText(enteredText);
    };

    const detailOpenHandler = () => {
        props.dispatch(addTaskToList(listID, enteredText));
        setEnteredText('');
    };

    return (
        <Wrapper>
            <RowWrapper>
                <StyledTextInput
                    width={90}
                    value={enteredText}
                    onChangeFn={inputChangeHandler}
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

ListScreen.navigationOptions = (someData) => {
    const listTitle = someData.navigation.getParam('title');
    return {
        headerTitle: listTitle,
    };
};

const mapStateToProps = ({ userLists, tasks }) => ({ userLists, tasks });

export default connect(mapStateToProps, null)(ListScreen);
