import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import MainScreen from '../Screens/MainScreen';
import ListScreen from '../Screens/ListScreen';
import NewListScreen from '../Screens/NewListScreen';
import ItemScreen from '../Screens/ItemScreen';
import SpecialScreen from '../Screens/SpecialScreen';

const ToDoNavigator = createStackNavigator({
    MainPage: MainScreen,
    ListPage: ListScreen,
    NewListPage: NewListScreen,
    TaskPage: ItemScreen,
    SpecialPage: SpecialScreen,
});

export default createAppContainer(ToDoNavigator);
