import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList27940Navigator from '../features/NotificationList27940/navigator';
import NotificationList27939Navigator from '../features/NotificationList27939/navigator';
import UserProfile27938Navigator from '../features/UserProfile27938/navigator';
import ArticleList27921Navigator from '../features/ArticleList27921/navigator';
import ArticleList27920Navigator from '../features/ArticleList27920/navigator';
import ArticleList27919Navigator from '../features/ArticleList27919/navigator';
import ArticleList27887Navigator from '../features/ArticleList27887/navigator';
import ArticleList27886Navigator from '../features/ArticleList27886/navigator';
import ArticleList27885Navigator from '../features/ArticleList27885/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
NotificationList27940: { screen: NotificationList27940Navigator },
NotificationList27939: { screen: NotificationList27939Navigator },
UserProfile27938: { screen: UserProfile27938Navigator },
ArticleList27921: { screen: ArticleList27921Navigator },
ArticleList27920: { screen: ArticleList27920Navigator },
ArticleList27919: { screen: ArticleList27919Navigator },
ArticleList27887: { screen: ArticleList27887Navigator },
ArticleList27886: { screen: ArticleList27886Navigator },
ArticleList27885: { screen: ArticleList27885Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
