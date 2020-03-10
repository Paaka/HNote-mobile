import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import stororo from './store/';
import MainTemplate from './components/templates/MainTemplate';

export default function App() {
    return (
        <View style={styles.container}>
            <Provider store={stororo}>
                <MainTemplate></MainTemplate>
            </Provider>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
        backgroundColor: 'gray',
    },
});
