import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import stororo from './store/';
import MainTemplate from './components/templates/MainTemplate';
import NavigationToDo from './navigation/ToDoNavigation';

export default function App() {
    return (
        <Provider store={stororo}>
            <NavigationToDo />
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
        backgroundColor: 'gray',
    },
});
