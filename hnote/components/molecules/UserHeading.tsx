import React from 'react';
import { View, Text, Image } from 'react-native';

const UserHeading = () => {
    let UserPicPath: string = '../../../assets/user.png';

    return (
        <View>
            <Image source={require('../../assets/user.png')}></Image>
            <Text>Nice</Text>
        </View>
    );
};

export default UserHeading;
