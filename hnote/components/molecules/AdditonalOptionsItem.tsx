import React, { FC } from 'react';
import styled from 'styled-components';
import IoniconsButton from '../atoms/IoniconsButton';
import Paragraph from '../atoms/Texts/Paragraph';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Wrapper = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 2px solid ${({ color }) => (color ? color : '#ccc')};
    width: 100%;
    padding: 15px 30px;
    margin-top: 5px;
`;

interface IAdditionalOptionsItem {
    onPressFn(): Function | void;
    children: string;
    isHighlight: boolean;
}

const AdditionalOptionsItem: FC<IAdditionalOptionsItem> = (props) => {
    const onPressHandler = () => {
        props.onPressFn();
    };

    const decideColor = () => (props.isHighlight ? 'royalblue' : 'black');

    return (
        <TouchableOpacity onPress={onPressHandler}>
            <Wrapper color={decideColor()}>
                <IoniconsButton
                    color={decideColor()}
                    icon="md-sunny"
                    onPressFn={() => {}}
                />
                <Paragraph color={decideColor()}>{props.children}</Paragraph>
            </Wrapper>
        </TouchableOpacity>
    );
};

export default AdditionalOptionsItem;
