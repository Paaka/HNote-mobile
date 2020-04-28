import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import MainScreen from '../Screens/MainScreen';
import ListScreen from '../Screens/ListScreen';
import NewListScreen from '../Screens/NewListScreen';
import ItemScreen from '../Screens/ItemScreen';
import SpecialScreen from '../Screens/SpecialScreen';
import GalleryScreen from '../Screens/GalleryScreen';

const ToDoNavigator = createStackNavigator({
    MainPage: MainScreen,
    ListPage: ListScreen,
    NewListPage: NewListScreen,
    TaskPage: ItemScreen,
    SpecialPage: SpecialScreen,
    GalleryPage: GalleryScreen,
});

export default createAppContainer(ToDoNavigator);
