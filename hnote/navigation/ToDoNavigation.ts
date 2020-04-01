import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import MainScreen from '../Screens/MainScreen';
import ListScreen from '../Screens/ListScreen';
import NewListScreen from '../Screens/NewListScreen';
import ItemScreen from '../Screens/ItemScreen';

const ToDoNavigator = createStackNavigator({
    MainPage: MainScreen,
    ListPage: ListScreen,
    NewListPage: NewListScreen,
    TaskPage: ItemScreen,
});

export default createAppContainer(ToDoNavigator);
