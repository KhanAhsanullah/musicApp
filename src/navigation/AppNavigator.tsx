import React, { useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { COLORS, SCREENS, IMAGES } from "../constants";
import Home from "../screens/HomeScreens";
import Library from "../screens/DrawerScreen/Library";
import { CustomDrawerContent } from "./DrawerScreen";
import SearchScreen from "../screens/DrawerScreen/SearchScreen";
import Artist from "../screens/DrawerScreen/Artist";
import Language from "../screens/DrawerScreen/Language";
import Subscribe from "../screens/DrawerScreen/Subscribe";
import OTPScreen from "../screens/DrawerScreen/OTPScreen";
import ViewSongs from "../screens/HomeScreens/ViewSongs";
import { createStackNavigator } from "@react-navigation/stack";
import AudioPLay from "../screens/PlayScreen/AudioPLay";
import Terms from "../screens/DrawerScreen/Terms";
import SearchPopup from "../screens/HomeScreens/SearchPopup";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

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
      <Drawer.Screen name={SCREENS.STACK} component={StackCompoonent} />
      <Drawer.Screen name={SCREENS.MY_LIBRARY} component={Library} />
      <Drawer.Screen name={SCREENS.LANGUAGE} component={Language} />
      <Drawer.Screen name={SCREENS.ARTIST} component={Artist} />
      <Drawer.Screen name={SCREENS.SEARCH} component={SearchScreen} />
      
    </Drawer.Navigator>
  );
};


const StackCompoonent = () => {
  return(
  <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={SCREENS.HOME} component={Home} />
      <Stack.Screen name={SCREENS.SUBSCRIBE} component={Subscribe} />
      <Stack.Screen name={SCREENS.OTP} component={OTPScreen} />
      <Stack.Screen name={SCREENS.TERMS} component={Terms} />
      <Stack.Screen name={SCREENS.VIEW} component={ViewSongs} />
      <Stack.Screen name={SCREENS.AUDIO_PLAY} component={AudioPLay} />
      <Stack.Screen name={SCREENS.SEARCH_POPUP} component={SearchPopup} />

     
    </Stack.Navigator>
)}

export default AppNavigator;
