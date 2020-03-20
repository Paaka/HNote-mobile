import React, { FC } from 'react';
import { View, Text, Button } from 'react-native';
import MainNavbar from '../organisms/Sidebars/MainNavbar';
import MainList from '../organisms/MainLists';

interface IMainProps {
    nav: any;
}

const MainTemplate: FC<IMainProps> = props => {
    return (
        <View>
            <MainList nav={props.nav}></MainList>
        </View>
    );
};

export default MainTemplate;
