import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const RoundBtn = props => {
    return (
        <TouchableOpacity>
            <View>
                <Text>{props.children}</Text>
            </View>
        </TouchableOpacity>
    );
};
