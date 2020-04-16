import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { deleteList } from '../../actions/index';
import {
    View,
    Image,
    StyleSheet,
    TouchableHighlight,
    Alert,
} from 'react-native';
import ListText from '../atoms/Texts/ListText';

interface IMenuListItem {
    text: string;
    imagePath: string;
    onPress(): Function | void;
}

const MenuListItem = ({ id, text, imagePath, onPress }) => {
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
            <View style={styles.wrapper}>
                <Image style={styles.image} source={imagePath} />
                <ListText>{text}</ListText>
            </View>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        width: '95%',
    },
    image: {
        width: 30,
        height: 30,
        marginRight: 15,
    },
});

export default MenuListItem;
