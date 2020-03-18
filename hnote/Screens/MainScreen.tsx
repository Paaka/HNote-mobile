import React, { FC } from 'react';
import { View, Text } from 'react-native';
import MainTemplate from '../components/templates/MainTemplate';

const MainScreen = props => (
    <View>
        <MainTemplate nav={props.navigation}></MainTemplate>
    </View>
);

export default MainScreen;
