import React, { FC } from 'react';
import { Ionicons } from '@expo/vector-icons';

import TouchableWrapper, {
    ITouchableWrapper,
} from './Wrappers/TouchableWrapper';

interface IIoniconsButton {
    size?: number;
    color?: string;
    icon: string;
    onPressFn: ITouchableWrapper;
}

const IoniconsButton = ({ size = 32, icon, onPressFn, color = 'black' }) => {
    return (
        <TouchableWrapper onPressFn={onPressFn}>
            <Ionicons name={icon} size={size} color={color} />
        </TouchableWrapper>
    );
};

export default IoniconsButton;
