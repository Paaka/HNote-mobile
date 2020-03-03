import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainTemplate from './components/templates/MainTemplate';

export default function App() {
    return (
        <View style={styles.container}>
            <MainTemplate></MainTemplate>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
