import React, { FC } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { deleteList } from '../../actions/index';
import { TouchableHighlight, Alert } from 'react-native';
import ListText from '../atoms/Texts/ListText';

interface IMenuListItem {
    id?: string;
    text: string;
    imagePath: string;
    onPress(): Function | void;
}

const Wrapper = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 95%;
`;

const StyledImage = styled.Image`
    height: 30px;
    width: 30px;
    margin-right: 15px;
`;

const MenuListItem: FC<IMenuListItem> = ({ id, text, imagePath, onPress }) => {
    const dispatch = useDispatch();

    const createTwoButtonAlert = () => {
        if (id !== 'nonDeletingItem') {
            Alert.alert(
                'Are you sure ?',
                'Do you want delete list: ' + text,
                [
                    {
                        text: 'Cancel',
                        onPress: () => {},
                        style: 'cancel',
                    },
                    {
                        text: 'OK',
                        onPress: () => dispatch(deleteList(id)),
                        style: 'destructive',
                    },
                ],
                { cancelable: false }
            );
        }
    };

    return (
        <TouchableHighlight
            onLongPress={createTwoButtonAlert}
            underlayColor="#ddd"
            onPress={onPress}
        >
            <Wrapper>
                <StyledImage source={imagePath} />
                <ListText>{text}</ListText>
            </Wrapper>
        </TouchableHighlight>
    );
};

export default MenuListItem;
