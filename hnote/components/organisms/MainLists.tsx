import React, { FC, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import MenuListItem from '../molecules/MenuListItem';
import HR from '../atoms/Hr';

interface IMainProps {
    nav: any;
}

const MainLists: FC<IMainProps> = props => {
    return (
        <View style={styles.wrapper}>
            <MenuListItem
                imagePath={require('../../assets/images/sun.png')}
                onPress={() => console.log(props.nav.navigate('ListPage'))}
                text="My Day"
            />
            <MenuListItem
                imagePath={require('../../assets/images/star.png')}
                onPress={() => console.log('work')}
                text="Important"
            />
            <MenuListItem
                imagePath={require('../../assets/images/homework.png')}
                onPress={() => console.log('work')}
                text="All tasks"
            />
            <HR />

            <View style={styles.newItemWrapper}>
                <MenuListItem
                    imagePath={require('../../assets/images/plus.png')}
                    onPress={() => {
                        props.nav.navigate('NewListPage');
                    }}
                    text="NEW LIST"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        height: '100%',
        backgroundColor: '#eee',
        paddingHorizontal: 15,
    },
    itemsWrapper: {
        flex: 1,
        justifyContent: 'space-between',
    },
    newItemWrapper: {
        alignItems: 'center',
    },
});

export default MainLists;
