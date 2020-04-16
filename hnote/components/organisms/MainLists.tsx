import React, { FC } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, ScrollView } from 'react-native';
import MenuListItem from '../molecules/MenuListItem';
import HR from '../atoms/Hr';

interface IMainProps {
    nav: any;
    userLists: any;
    dispatch: any;
}

const MainLists: FC<IMainProps> = (props) => {
    return (
        <View style={styles.wrapper}>
            <MenuListItem
                id="nonDeletingItem"
                imagePath={require('../../assets/images/sun.png')}
                onPress={() =>
                    props.nav.navigate({
                        routeName: 'SpecialPage',
                        params: {
                            list: 'MyDay',
                        },
                    })
                }
                text="My Day"
            />
            <MenuListItem
                id="nonDeletingItem"
                imagePath={require('../../assets/images/star.png')}
                onPress={() =>
                    props.nav.navigate({
                        routeName: 'SpecialPage',
                        params: {
                            list: 'Important',
                        },
                    })
                }
                text="Important"
            />
            <MenuListItem
                id="nonDeletingItem"
                imagePath={require('../../assets/images/homework.png')}
                onPress={() =>
                    props.nav.navigate({
                        routeName: 'SpecialPage',
                        params: {
                            list: 'AllTask',
                        },
                    })
                }
                text="All tasks"
            />
            <HR />

            <View style={styles.newItemWrapper}>
                <MenuListItem
                    id="nonDeletingItem"
                    imagePath={require('../../assets/images/plus.png')}
                    onPress={() => {
                        props.nav.navigate('NewListPage');
                    }}
                    text="NEW LIST"
                />
            </View>
            <ScrollView>
                {props.userLists.map((list, item) => (
                    <MenuListItem
                        imagePath={require('../../assets/images/to-do.png')}
                        key={list.id}
                        id={list.id}
                        onPress={() =>
                            props.nav.navigate({
                                routeName: 'ListPage',
                                params: {
                                    listId: list.id,
                                    title: list.text,
                                },
                            })
                        }
                        text={list.text}
                    />
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        height: '100%',
        backgroundColor: '#eee',
        paddingHorizontal: 15,
    },
    itemsWrapper: {
        flex: 1,
        justifyContent: 'space-between',
    },
    newItemWrapper: {
        alignItems: 'center',
    },
});

const mapStateToProps = ({ userLists }) => ({ userLists });

export default connect(mapStateToProps, null)(MainLists);
