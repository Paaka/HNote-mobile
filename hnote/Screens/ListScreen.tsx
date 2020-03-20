import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

const ListScreen = props => {
    return (
        <View>
            <Text>Hello</Text>
        </View>
    );
};

ListScreen.navigationOptions = someData => {
    const listTitle = someData.navigation.getParam('title');
    return {
        headerTitle: listTitle,
    };
};

const mapStateToProps = ({ userLists }) => ({ userLists });

export default connect(mapStateToProps, null)(ListScreen);
