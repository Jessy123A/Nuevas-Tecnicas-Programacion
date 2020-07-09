import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {Drawer} from 'react-native-paper';

export default function DrawerContent(props) {
  const {navigation} = props;
  console.log(props);
  return (
    <DrawerContentScrollView>
      <Drawer.Section>
        <Drawer.Item
          label="inicio"
          onPress={() => navigation.navigate('news')}
        />
      </Drawer.Section>
    </DrawerContentScrollView>
  );
}

const style = StyleSheet.create({});
