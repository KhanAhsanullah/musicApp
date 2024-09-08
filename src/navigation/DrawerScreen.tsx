import { useState } from "react";
import { COLORS, IMAGES, SCREENS } from "../constants";
import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native-ui-lib";
import { StyleSheet } from "react-native";
import { navigate } from "./RootNavigation";

// Custom Drawer Content Component
export const CustomDrawerContent = (props: any) => {
  const navigation = useNavigation();
  const [activeScreen, setActiveScreen] = useState(SCREENS.HOME);

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
      name: SCREENS.LANGUAGE,
      label: "Language",
      icon: IMAGES.language,
    },
    {
      name: SCREENS.ARTIST,
      label: "Artists",
      icon: IMAGES.artist,
    },
    {
      name: SCREENS.SEARCH,
      label: "Search",
      icon: IMAGES.SearchImg,
    },
  ];

  const handleItemPress = (screenName: string) => {
    setActiveScreen(screenName);
    navigation.navigate(screenName);
  };

  return (
    <View style={{ flex: 1, paddingTop: 40, paddingHorizontal: 15 }}>
      {/* Cross Button at the top */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.crossButton}
      >
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
                {
                  tintColor:
                    activeScreen === item.name ? COLORS.PRIMARY : COLORS.WHITE,
                },
              ]}
            />
            <Text
              style={[
                styles.drawerItemText,
                {
                  color:
                    activeScreen === item.name ? COLORS.PRIMARY : COLORS.WHITE,
                },
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
          <Image
            source={IMAGES.social}
            style={styles.socialIcon}
            resizeMode="contain"
          />
        </View>
        <TouchableOpacity onPress={()=>navigate(SCREENS.SUBSCRIBE)} marginT-50>
          <Image
            source={IMAGES.SubscriptionImg}
            style={{ width: "100%", height: 50, borderRadius: 30 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  crossButton: {
    alignSelf: "flex-start",
    padding: 10,
  },
  crossIcon: {
    width: 20,
    height: 20,
    tintColor: COLORS.WHITE,
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
  },
  socialIcon: {
    width: 200,
    height: 40,
  },
});