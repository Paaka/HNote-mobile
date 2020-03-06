import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import TitleText from '../../atoms/Texts/TitleText';

const MainNavbar = () => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.imageWrappers}>
                <Image
                    style={styles.image}
                    source={require('../../../assets/images/siberian-husky.png')}
                    resizeMode="center"
                />
            </View>
            <TitleText>HNote</TitleText>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 70,
        height: 70,
    },
    imageWrappers: {
        backgroundColor: 'black',
        width: 70,
        height: 70,
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 35,
        overflow: 'hidden',
        marginRight: 10,
    },
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eee',
        padding: 15,
    },
});

export default MainNavbar;
