import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {IconButton} from 'react-native-paper';
import Home from '../screens/Home';
import Movie from '../screens/Movie';
import News from '../screens/News';
import Popular from '../screens/Popular';
import Search from '../screens/Search';
import Navigation from './Navigation';
const Stack = createStackNavigator();

export default function StackNavigation(props) {
  const {navigation} = props;
  const buttonLeft = () => {
    return <IconButton icon="menu" onPress={() => navigation.openDrawer()} />;
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        option={{title: 'TheMovieApp', headerLeft: () => buttonLeft()}}
      />

      <Stack.Screen
        name="Movie"
        component={Movie}
        option={{title: '', headerLeft: () => buttonLeft()}}
      />
      <Stack.Screen
        name="News"
        component={News}
        option={{title: 'News', headerLeft: () => buttonLeft()}}
      />

      <Stack.Screen
        name="Popular"
        component={Popular}
        option={{title: 'Popular', headerLeft: () => buttonLeft()}}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        option={{title: '', headerLeft: () => buttonLeft()}}
      />
    </Stack.Navigator>
  );
}
