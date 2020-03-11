import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import MainScreen from '../Screens/MainScreen';
import ListScreen from '../Screens/ListScreen';

const ToDoNavigator = createStackNavigator({
    MainPage: MainScreen,
    ListPage: ListScreen,
});

export default createAppContainer(ToDoNavigator);
