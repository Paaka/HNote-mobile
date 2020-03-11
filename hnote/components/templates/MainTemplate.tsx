import React, { FC } from 'react';
import { View, Text } from 'react-native';
import MainNavbar from '../organisms/Sidebars/MainNavbar';
import MainList from '../organisms/MainLists';

interface IMainProps {
    all: Object;
}

const MainTemplate: FC<IMainProps> = props => {
    {
        console.log(props.all);
    }

    return (
        <View>
            <MainNavbar></MainNavbar>
            <MainList></MainList>
        </View>
    );
};

export default MainTemplate;
