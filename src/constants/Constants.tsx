// import { Dimensions } from "react-native";
import { COLORS } from "./Colors";

import IconE from "react-native-vector-icons/Entypo";
import IconA from "react-native-vector-icons/AntDesign";
import IconFont from "react-native-vector-icons/FontAwesome";
import IconM from "react-native-vector-icons/MaterialCommunityIcons";
import IconF from "react-native-vector-icons/Feather";
import IconF5 from "react-native-vector-icons/FontAwesome5";
import { SCREENS } from "./ScreenNames";

export const screenHeight = (percent) => {
  const windowHeight = Dimensions.get("window").height;
  return (windowHeight * percent) / 100;
};

export const screenWidth = (percent) => {
  const windowWidth = Dimensions.get("window").width;
  return (windowWidth * percent) / 100;
};


export const BOTTOMTABS = [
  {
    key: 1,
    title: "Connections",
    navigateTo: "Connections",
    image: <IconA name="addusergroup" color={COLORS.BLACK} size={20} />,
    imageActive: <IconA name="addusergroup" color={COLORS.WHITE} size={20} />,
  },
  {
    key: 2,
    title: "Messages",
    navigateTo: "Messages",
    image: <IconM name="message-text-outline" color={COLORS.BLACK} size={20} />,
    imageActive: (
      <IconM name="message-text-outline" color={COLORS.WHITE} size={20} />
    ),
  },
  {
    key: 0,
    title: "Home",
    navigateTo: "Home",
    image: <IconF name="home" color={COLORS.BLACK} size={20} />,
    imageActive: <IconF name="home" color={COLORS.WHITE} size={20} />,
  },

  {
    key: 3,
    title: "Shop",
    navigateTo: "Shop",
    image: <IconF5 name="shopping-basket" color={COLORS.BLACK} size={20} />,
    imageActive: (
      <IconF5 name="shopping-basket" color={COLORS.WHITE} size={20} />
    ),
  },
  {
    key: 4,
    title: "Profile",
    navigateTo: "Profile",
    image: <IconFont name="user-o" color={COLORS.BLACK} size={20} />,
    imageActive: <IconFont name="user" color={COLORS.WHITE} size={20} />,
  },
];

export const DRAWERTABS = [
  {
    key: 0,
    title: "Home",
    navigateTo: SCREENS.HOME,
    image: <IconF5 name="user-circle" color={COLORS.WHITE} size={20} />,
  },
  {
    key: 1,
    title: "My Favorites",
    navigateTo: SCREENS.FAVORITE,
    image: <IconM name="cards-heart" color={COLORS.WHITE} size={20} />,
  },
  {
    key: 2,
    title: "Market Places",
    navigateTo: "Shop",
    image: <IconE name="users" color={COLORS.WHITE} size={20} />,
  },

  {
    key: 3,
    title: "Calender",
    navigateTo: SCREENS.CALENDER,
    image: <IconM name="calendar" color={COLORS.WHITE} size={20} />,
  },
  {
    key: 4,
    title: "Subscription Package",
    navigateTo: SCREENS.SUBSCRIPTION,
    image: <IconF name="bell" color={COLORS.WHITE} size={20} />,
  },

  {
    key: 5,
    title: "My Orders",
    navigateTo: SCREENS.MY_ORDER,
    image: <IconM name="star" color={COLORS.WHITE} size={20} />,
  },
  {
    key: 6,
    title: "Settings",
    navigateTo: SCREENS.SETTING,
    image: <IconF name="settings" color={COLORS.WHITE} size={20} />,
  },
  {
    key: 7,
    title: "Contact Us",
    navigateTo: SCREENS.CONTACT,
    image: <IconF name="phone-call" color={COLORS.WHITE} size={20} />,
  },
  {
    key: 8,
    title: "About",
    navigateTo: SCREENS.ABOUT,
    image: <IconF5 name="user-circle" color={COLORS.WHITE} size={20} />,
  },
];
