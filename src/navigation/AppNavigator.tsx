import React from 'react';
import { SCREENS } from '../constants';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerScreen from './DrawerScreen';
import Home from '../screens/HomeScreens';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const AppNavigator = () => {

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}>
      <Stack.Screen name={SCREENS.HOME} component={Home} />
    </Stack.Navigator>
  );
};

export default AppNavigator;



