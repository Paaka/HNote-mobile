import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import MainScreen from '../Screens/MainScreen';
import ListScreen from '../Screens/ListScreen';
import NewListScreen from '../Screens/NewListScreen';

const ToDoNavigator = createStackNavigator({
    MainPage: MainScreen,
    ListPage: ListScreen,
    NewListPage: NewListScreen,
});

export default createAppContainer(ToDoNavigator);
