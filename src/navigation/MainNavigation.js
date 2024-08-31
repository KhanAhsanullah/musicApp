import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './RootNavigation';
import AppNavigator from './AppNavigator';
import { useDispatch, useSelector } from 'react-redux';
import Splash from '../containers/Splash';
import { AuthStackNavigator } from './MainStackNavigator';
import Login from '../screens/Auth/Login';


const MainNavigation = () => {
  const dispatch = useDispatch();
  const [isloading, setIsLoadings] = useState(true);
  const { isLoggedIn } = useSelector(state => state.user);
  console.log('log',isLoggedIn);
  useEffect(() => {
    setTimeout(() => {
      setIsLoadings(false)
    }, 2000);
  }, []);
  return isloading ? (
    <Login />
  ) : (
    <>
      <NavigationContainer ref={navigationRef}>
        {!isLoggedIn ?   <AuthStackNavigator/> : <AppNavigator /> }
      </NavigationContainer>

    </>
  );
};

export default MainNavigation;
