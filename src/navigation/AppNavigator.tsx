import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { COLORS, SCREENS, IMAGES } from "../constants";
import Home from "../screens/DrawerScreen";
import Notification from "../screens/DrawerScreen/Language";
import Settings from "../screens/DrawerScreen/SearchScreen";
import { useNavigation } from "@react-navigation/native";
import Library from "../screens/DrawerScreen/Library";
import { CustomDrawerContent } from "./DrawerScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from "../screens/DrawerScreen/SearchScreen";
import Artist from "../screens/DrawerScreen/Artist";
import Language from "../screens/DrawerScreen/Language";
import Subscribe from "../screens/DrawerScreen/Subscribe";
import OTPScreen from "../screens/DrawerScreen/OTPScreen";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: COLORS.BLACK,
          width: 300,
        },
      }}
    >
      <Drawer.Screen name={SCREENS.HOME} component={StackCompoonent} />
      <Drawer.Screen name={SCREENS.MY_LIBRARY} component={Library} />
      <Drawer.Screen name={SCREENS.LANGUAGE} component={Language} />
      <Drawer.Screen name={SCREENS.ARTIST} component={Artist} />
      <Drawer.Screen name={SCREENS.SEARCH} component={SearchScreen} />
      <Stack.Screen name={SCREENS.SUBSCRIBE} component={Subscribe} />
      <Stack.Screen name={SCREENS.OTP} component={OTPScreen} />
    </Drawer.Navigator>
  );
};


const StackCompoonent = () => {
  return(
  <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}>
      <Stack.Screen name={SCREENS.HOME} component={Home} />


     
    </Stack.Navigator>
)}

export default AppNavigator;
