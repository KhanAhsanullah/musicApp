import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SCREENS } from "../constants";
import Login from "../screens/Auth/Login";
import SignUp from "../screens/Auth/SignUp";


const Stack = createNativeStackNavigator();

const screenOptionStyle = {
  headerShown: false,
  animation: "fade",
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name={SCREENS.LOGIN} component={Login} />
      <Stack.Screen name={SCREENS.SIGNUP} component={SignUp} />
    </Stack.Navigator>
  );
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name={SCREENS.HOME} component={BottomTabNavigation} />
    

  
    </Stack.Navigator>
  );
};



export { MainStackNavigator, AuthStackNavigator };
