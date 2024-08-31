import React from 'react';
import {
  StatusBar,
  View,
  SafeAreaView,
  Platform,
  ImageBackground,
} from 'react-native';
import { IMAGES } from '../constants';

const SafeAreaContainer = (props) => {
  const {
    safeArea = true,
    mode = 'dark',
    backgroundColor = 'transparent',
    style = {},
  } = props;

  return (
    <ImageBackground 
      source={IMAGES.bkImg} 
      style={{flex: 1}} 
      resizeMode="cover"
    >
      <View style={{flex: 1, backgroundColor: backgroundColor}}>
        <StatusBar
          translucent={true}
          backgroundColor={backgroundColor}
          barStyle={mode === 'dark' ? 'dark-content' : 'light-content'}
        />
        {safeArea ? (
          <SafeAreaView
            style={{flex: 1, paddingTop: Platform.OS == 'ios' ? 50 : 0}}>
            {props.children}
          </SafeAreaView>
        ) : (
          <>{props.children}</>
        )}
      </View>
    </ImageBackground>
  );
};

export default SafeAreaContainer;
