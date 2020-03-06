import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import ListText from '../atoms/Texts/ListText';

const MenuListItem = ({ text, imagePath, onPress }) => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
            <View style={styles.wrapper}>
                <Image style={styles.image} source={imagePath} />
                <ListText>{text}</ListText>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    image: {
        width: 30,
        height: 30,
        marginRight: 15,
    },
});

export default MenuListItem;
