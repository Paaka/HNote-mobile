import React, { FC } from 'react';
import { Ionicons } from '@expo/vector-icons';

import TouchableWrapper, {
    ITouchableWrapper,
} from './Wrappers/TouchableWrapper';

interface IIoniconsButton {
    size?: number;
    icon: string;
    onPressFn: ITouchableWrapper;
}

const IoniconsButton = ({ size = 32, icon, onPressFn }) => {
    return (
        <TouchableWrapper onPressFn={onPressFn}>
            <Ionicons name={icon} size={size} />
        </TouchableWrapper>
    );
};

export default IoniconsButton;
