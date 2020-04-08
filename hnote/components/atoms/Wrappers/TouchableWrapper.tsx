import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';

interface ITouchableWrapper {
    onPressFn(): Function | void;
}

const defaultOnPress = () => {
    console.log('TouchableWrapper default Fn');
};

const TouchableWrapper: FC<ITouchableWrapper> = ({
    onPressFn = defaultOnPress,
    children,
}) => {
    const onPressHandler = () => {
        onPressFn();
    };

    return (
        <TouchableOpacity onPress={onPressHandler}>{children}</TouchableOpacity>
    );
};

export default TouchableWrapper;
