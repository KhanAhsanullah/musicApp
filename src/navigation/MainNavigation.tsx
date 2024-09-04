import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './RootNavigation';
import AppNavigator from './AppNavigator';
import { useDispatch, useSelector } from 'react-redux';
import { AuthStackNavigator } from './MainStackNavigator';

const MainNavigation = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector(state => state.user);

  return (
    <NavigationContainer ref={navigationRef}>
      {!isLoggedIn ? <AuthStackNavigator /> : <AppNavigator />}
    </NavigationContainer>
  );
};

export default MainNavigation;
