import {
  View,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
  Animated
} from "react-native";
import React, { useState } from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { COLORS, DRAWERTABS, FONTSIZE, IMAGES, SCREENS } from "../constants";
import { Typography } from "../components/atoms/Typography";
import IconM from "react-native-vector-icons/MaterialCommunityIcons";
import { navigate, onBack } from "./RootNavigation";
import { MainStackNavigator } from "./MainStackNavigator";
import { setLoggedIn } from "../redux/slice/user";
import { useDispatch } from "react-redux";
// import Animated from "react-native-reanimated";
const Drawer = createDrawerNavigator();

const DrawerScreen = () => {
// const [progress, setprogress] = useState(new Animated.Value(0));
// const scale = Animated.interpolateNode(progress,{
//   inputRange : [0,1],
//   outputRange : [1, 0.8]
// })

// const borderRadius = Animated.interpolateNode(progress,{
//   inputRange : [0,1],
//   outputRange : [0,26]
// })

// const animatedStyle = {borderRadius ,transform : [{scale}]}


const dispatch = useDispatch();

const CustomDrawerItem = ({ item, index }) => {
  return (
    <TouchableOpacity
      onPress={() => navigate(item.navigateTo)}
      style={styles.categoriesStyle}
    >
      {item.image}
      <Typography size={FONTSIZE.M} color={COLORS.WHITE} style={{ alignSelf: "center", marginLeft: 10 }}>
        {item.title}
      </Typography>
    </TouchableOpacity>
  );
};
const CustomDrawerContent = () => {
  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={{ flex: 1 }}
    >
      <View style={{ flex: 1, paddingHorizontal: 20 }}>
        {/* Profile */}
        <View
          style={{
            marginVertical: 40,
            flexDirection: "row",
          }}
        >
          <Image
            source={IMAGES.avatar}
            style={{ width: 50, height: 50, borderRadius: 25 }}
            resizeMode="contain"
          />
         <View>
         <Typography color={COLORS.WHITE} size={FONTSIZE.L} style={{ marginLeft: 10 }}>
            John Smith
          </Typography>

          <Typography color={COLORS.WHITE} size={FONTSIZE.S} style={{ marginLeft: 10 }}>
            john@gmail.com
          </Typography>
         </View>
        </View>
        {/* Menu Item*/}

        <FlatList
          data={DRAWERTABS}
          renderItem={({ item }) => <CustomDrawerItem item={item} />}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
        {/* Logout */}
        <TouchableOpacity
          onPress={() => customAlert()}
          style={{ marginBottom: 60, flexDirection: "row" }}
        >
          <Typography color={COLORS.WHITE} size={FONTSIZE.M} style={{ alignSelf: "center", marginRight: 10 }}>
            Logout
          </Typography>
          <IconM name="logout" color={COLORS.WHITE} size={18} />

        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};


const customAlert = (props) => {
  Alert.alert("Logout", "Do you want to logout?", [
    {
      text: "Cancel",
      onPress: null,
    },
    {
      text: "OK",
     onPress : ()=>dispatch(setLoggedIn(false))
     
    },
  ]);
};
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.PRIMARY }}>
       
      <Drawer.Navigator
        drawerType="slide"
        overlayColor="transparent"
        drawerStyle={{
          flex: 1,
          width: "65%",
          paddingRight: 20,
          backgroundColor: "transparent",
        }}
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            backgroundColor: COLORS.PRIMARY,
            width: 320,
            borderRadius:20
          }
        }}
        sceneContainerStyle={{ backgroundColor: "transparent" }}
        drawerContent={(props) => {
          // setTimeout(() => {
          //   setprogress(props.progress);
          // }, 0);

          return <CustomDrawerContent navigation={props.navigation} />;
        }}
        initialRouteName="Home" >
        <Drawer.Screen name="Home"
        
        component={MainStackNavigator} 
        // drawerAnimationStyle = {animatedStyle}
        />
      </Drawer.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  categoriesStyle: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    marginRight: 20,
  },
  categoriesImgStyle: {
    width: 20,
    height: 20,
    borderRadius: 30,
    alignSelf: "center",
  },
  mainView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
  },
});

export default DrawerScreen;
