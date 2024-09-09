import React from 'react';
import {
  StatusBar,
  View,
  SafeAreaView,
  Platform,
  ImageBackground,
  useColorScheme, // Hook to detect system dark/light mode
} from 'react-native';
import { IMAGES } from '../constants';

const SafeAreaContainer = (props: any) => {
  const {
    safeArea = true,
    backgroundColor = 'transparent',
    style = {},
  } = props;

  // Use system-wide dark mode/light mode setting
  const colorScheme = useColorScheme();

  // Determine the status bar style based on system dark/light mode
  const isDarkMode = colorScheme === 'dark';
  const statusBarMode = isDarkMode ? 'light-content' : 'dark-content';
  const statusBarBgColor = isDarkMode ? 'black' : 'white'; // Change the status bar background color based on dark or light mode.

  return (
    <View style={{ flex: 1, backgroundColor: backgroundColor }}>
      {/* StatusBar adapts to system dark/light mode */}
      <StatusBar
        translucent={true}
        backgroundColor={statusBarBgColor} // Status bar background changes based on mode
        barStyle={statusBarMode} // Status bar text color
      />
      {/* Background Image */}
      <ImageBackground
        source={IMAGES.bkImg}
        style={{ flex: 1 }} 
        resizeMode="cover"
      >
        {/* SafeAreaView to respect the safe area on devices */}
        {safeArea ? (
          <SafeAreaView
            style={{
              flex: 1,
              paddingTop: Platform.OS === 'ios' ? 50 : 0,
              ...style,
            }}
          >
            {props.children}
          </SafeAreaView>
        ) : (
          <>{props.children}</>
        )}
      </ImageBackground>
    </View>
  );
};

export default SafeAreaContainer;
