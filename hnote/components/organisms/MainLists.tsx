import React, { FC } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { ScrollView } from 'react-native';
import MenuListItem from '../molecules/MenuListItem';
import HR from '../atoms/Hr';

interface IMainProps {
    nav: any;
}

const Wrapper = styled.View`
    width: 100%;
    height: 100%;
    background-color: #eee;
    padding-top: 15px;
    padding-bottom: 15px;
    margin-left: 10px;
`;

const AlignWrapper = styled.View`
    align-items: center;
`;

const MainLists: FC<IMainProps> = (props) => {
    const userLists = useSelector((state) => state.userLists);

    return (
        <Wrapper>
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
            <MenuListItem
                id="nonDeletingItem"
                imagePath={require('../../assets/images/photo.png')}
                onPress={() => props.nav.navigate('GalleryPage')}
                text="Images"
            />
            <HR />

            <AlignWrapper>
                <MenuListItem
                    id="nonDeletingItem"
                    imagePath={require('../../assets/images/plus.png')}
                    onPress={() => {
                        props.nav.navigate('NewListPage');
                    }}
                    text="NEW LIST"
                />
            </AlignWrapper>
            <ScrollView>
                {userLists.map((list, item) => (
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
        </Wrapper>
    );
};

export default MainLists;
