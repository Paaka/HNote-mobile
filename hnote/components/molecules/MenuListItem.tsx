import React from 'react';
import { View, Image, StyleSheet, TouchableHighlight } from 'react-native';
import ListText from '../atoms/Texts/ListText';

const MenuListItem = ({ text, imagePath, onPress }) => {
    return (
        <TouchableHighlight underlayColor="#ddd" onPress={onPress}>
            <View style={styles.wrapper}>
                <Image style={styles.image} source={imagePath} />
                <ListText>{text}</ListText>
            </View>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        width: '95%',
    },
    image: {
        width: 30,
        height: 30,
        marginRight: 15,
    },
});

export default MenuListItem;
