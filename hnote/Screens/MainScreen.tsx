import React, { FC } from 'react';
import { View, Text } from 'react-native';
import MainTemplate from '../components/templates/MainTemplate';

const MainScreen = props => (
    <View>
        {console.log(props.all)}
        <Text>MainScreen</Text>
        <MainTemplate all={props.navigation}></MainTemplate>
    </View>
);

export default MainScreen;
