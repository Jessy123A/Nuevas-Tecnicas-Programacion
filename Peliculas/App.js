import React from 'react';
import {View, Text} from 'react-native';
import {Provider as PapperProvider} from 'react-native-paper';
import {Button, Card} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';

export default function App() {
  console.log('hola como estas');

  return (
    <PapperProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </PapperProvider>
  );
}
