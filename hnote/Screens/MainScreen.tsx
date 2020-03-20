import React from 'react';
import { View } from 'react-native';
import MainTemplate from '../components/templates/MainTemplate';

const MainScreen = props => {
    return (
        <View>
            <MainTemplate nav={props.navigation}></MainTemplate>
        </View>
    );
};

export default MainScreen;
