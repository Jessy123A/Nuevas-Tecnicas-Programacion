import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from './DrawerContent';
import StackNavigation from './StackNavigation';
import News from '../screens/News';
import Search from '../screens/Search';

const Drawer = createDrawerNavigator();

export default function Navigation() {
  return (
    //Vamos a darle varios props
    <Drawer.Navigator
      initialRouteName="app"
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="app" component={StackNavigation} />
    </Drawer.Navigator>
  );
}
