import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MenuListItem from '../molecules/MenuListItem';

const MainLists = props => {
    return (
        <View style={styles.wrapper}>
            <MenuListItem
                imagePath={require('../../assets/images/sun.png')}
                onPress={() => console.log('work')}
                text="My Day"
            />
            <MenuListItem
                imagePath={require('../../assets/images/sun.png')}
                onPress={() => console.log('work')}
                text="My Day"
            />
            <MenuListItem
                imagePath={require('../../assets/images/sun.png')}
                onPress={() => console.log('work')}
                text="My Day"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        height: '100%',
        backgroundColor: '#eee',
        paddingLeft: 15,
    },
});

export default MainLists;
