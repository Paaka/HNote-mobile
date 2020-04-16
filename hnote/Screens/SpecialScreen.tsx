import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import SingleTask from '../components/molecules/SingleTask';
import { ScrollView } from 'react-native-gesture-handler';

const Wrapper = styled.View`
    flex: 1;
`;

const SpecialScreen = (props) => {
    const listID = props.navigation.getParam('list');
    const tasks = useSelector((state) => state.tasks);
    let tempList = [];
    if (listID === 'MyDay') {
        tempList = tasks.filter((task) => task.isOnMyDayView === true);
    }
    if (listID === 'Important') {
        tempList = tasks.filter((task) => task.isImportant === true);
    }
    if (listID === 'AllTask') {
        tempList = tasks;
    }
    return (
        <Wrapper>
            <ScrollView>
                {tempList.map((task) => (
                    <SingleTask
                        key={task.id}
                        id={task.id}
                        value={task.content}
                        isFinished={task.isDone}
                        task={task}
                        navigation={props.navigation}
                    />
                ))}
            </ScrollView>
        </Wrapper>
    );
};

SpecialScreen.navigationOptions = (someData) => {
    const listTitle = someData.navigation.getParam('list');
    return {
        headerTitle: listTitle,
    };
};

export default SpecialScreen;
