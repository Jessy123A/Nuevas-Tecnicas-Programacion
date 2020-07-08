import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Movie from '../screens/Movie';
import News from '../screens/News';
import Popular from '../screens/Popular';
import Search from '../screens/Search';
const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        option={{title: 'TheMovieApp'}}
      />

      <Stack.Screen name="Movie" component={Movie} option={{title: ''}} />
      <Stack.Screen name="News" component={News} option={{title: 'News'}} />

      <Stack.Screen
        name="Popular"
        component={Popular}
        option={{title: 'Popular'}}
      />
      <Stack.Screen name="Search" component={Search} option={{title: ''}} />
    </Stack.Navigator>
  );
}
