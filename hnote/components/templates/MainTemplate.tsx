import React from 'react';
import { View, Text } from 'react-native';
import MainNavbar from '../organisms/Sidebars/MainNavbar';
import MainList from '../organisms/MainLists';

const MainTemplate = () => (
    <View>
        <MainNavbar></MainNavbar>
        <MainList></MainList>
    </View>
);

export default MainTemplate;
