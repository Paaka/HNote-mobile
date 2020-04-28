import React from 'react';
import { Provider } from 'react-redux';
import stororo from './store/';
import NavigationToDo from './navigation/ToDoNavigation';

export default function App() {
    return (
        <Provider store={stororo}>
            <NavigationToDo />
        </Provider>
    );
}
