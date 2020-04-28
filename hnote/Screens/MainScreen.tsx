import React from 'react';
import { View } from 'react-native';
import MainLists from '../components/organisms/MainLists';

const MainScreen = (props) => {
    return (
        <View>
            <MainLists nav={props.navigation}></MainLists>
        </View>
    );
};

export default MainScreen;
