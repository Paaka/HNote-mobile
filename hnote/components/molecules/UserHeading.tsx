import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const UserHeading = () => {
    let UserPicPath: string = '../../../assets/user.png';

    return (
        <View>
            <View>
                <Image
                    style={styles.image}
                    source={require('../../assets/user.png')}
                ></Image>
            </View>
            <Text>Mateusz Hartabus</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 50,
        width: 50,
    },
});

export default UserHeading;
