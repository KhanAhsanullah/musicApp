import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { COLORS, SCREENS, IMAGES } from "../constants";
import Home from "../screens/HomeScreens";
import Search from "../screens/DrawerScreen/Library";
import Notification from "../screens/DrawerScreen/Notification";
import Settings from "../screens/DrawerScreen/Settings";
import { useNavigation } from "@react-navigation/native";
import Library from "../screens/DrawerScreen/Library";

// Custom Drawer Content Component
const CustomDrawerContent = (props: any) => {
  const navigation = useNavigation();
  const [activeScreen, setActiveScreen] = useState(SCREENS.HOME); // Track active screen
  
  const drawerItems = [
    {
      name: SCREENS.HOME,
      label: "Home",
      icon: IMAGES.home,
    },
    {
      name: SCREENS.MY_LIBRARY,
      label: "My Library",
      icon: IMAGES.library,
    },
    {
      name: SCREENS.NOTIFICATION,
      label: "Language",
      icon: IMAGES.language,
    },
    {
      name: SCREENS.ARTIST,
      label: "Artists",
      icon: IMAGES.artist,
    },
    {
      name: SCREENS.SETTING,
      label: "Search",
      icon: IMAGES.SearchImg,
    },
  ];

  const handleItemPress = (screenName: string) => {
    setActiveScreen(screenName);
    navigation.navigate(screenName);
  };

  return (
    <View style={{ flex: 1, paddingTop: 20, paddingHorizontal: 15 }}>
      {/* Cross Button at the top */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.crossButton}>
        <Image source={IMAGES.cross} style={styles.crossIcon} />
      </TouchableOpacity>

      {/* Drawer Items */}
      <View style={styles.drawerItemsContainer}>
        {drawerItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleItemPress(item.name)}
            style={styles.drawerItem}
          >
            <Image
              source={item.icon}
              style={[
                styles.icon,
                { tintColor: activeScreen === item.name ? COLORS.PRIMARY : COLORS.WHITE },
              ]}
            />
            <Text
              style={[
                styles.drawerItemText,
                { color: activeScreen === item.name ? COLORS.PRIMARY : COLORS.WHITE },
              ]}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* App Info Section */}
      <View style={styles.appInfoContainer}>
        <Text style={styles.appTitle}>Music App</Text>
        <Text style={styles.appDescription}>
          Koyal offers you free, unlimited access to over millions of folk
          songs, trending dramas, short videos, movies and more of the active
          playlists that attract you. Stream online and download them in 9+
          different languages of Pakistan, including: Sindhi, Saraiki, Punjabi,
          Pashto, Balochi, Hindko and Urdu.
        </Text>

        {/* Social Media Icons */}
        <View style={styles.socialIconsContainer}>
          <Image source={IMAGES.social} style={styles.socialIcon} resizeMode="contain" />
        </View>
      </View>
    </View>
  );
};

// Drawer Navigator with Custom Content
const Drawer = createDrawerNavigator();
const AppNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />} // Use the custom drawer content
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: COLORS.BLACK,
          width: 300,
        },
      }}
    >
      <Drawer.Screen name={SCREENS.HOME} component={Home} />
      <Drawer.Screen name={SCREENS.MY_LIBRARY} component={Library} />
      <Drawer.Screen name={SCREENS.NOTIFICATION} component={Notification} />
      <Drawer.Screen name={SCREENS.SETTING} component={Settings} />
    </Drawer.Navigator>
  );
};

// Styles for Custom Drawer
const styles = StyleSheet.create({
  crossButton: {
    alignSelf: "flex-start",
    padding: 10,
  },
  crossIcon: {
    width: 20,
    height: 20,
    tintColor: COLORS.WHITE, // Adjust the color of the cross icon
  },
  drawerItemsContainer: {
    marginTop: 20,
  },
  drawerItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  drawerItemText: {
    fontSize: 16,
  },
  appInfoContainer: {
    marginTop: 40,
  },
  appTitle: {
    color: COLORS.WHITE,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  appDescription: {
    color: COLORS.WHITE,
    fontSize: 10,
    lineHeight: 20,
    marginBottom: 20,
  },
  socialIconsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  socialIcon: {
    width: 200,
    height: 100,
  },
});

export default AppNavigator;
