import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { View, Text } from 'react-native';

const ItemScreen = props => {
    const listID = props.navigation.getParam('taskId');
    const allMyTasks = props.tasks.filter(task => task.list === listID);
    console.log(allMyTasks[0]);
    return (
        <View>
            <Text>Hello Item screen</Text>
        </View>
    );
};

const mapStateToProps = ({ tasks }) => ({ tasks });

export default connect(mapStateToProps, null)(ItemScreen);
