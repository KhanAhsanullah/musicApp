import React, { useContext, useEffect, useMemo, useState } from "react";
import {
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { COLORS, FONTSIZE, IMAGES, SCREENS } from "../../constants";
import { navigate, onBack } from "../../navigation/RootNavigation";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native-ui-lib";
import { Typography } from "./Typography";
import { setLoggedIn } from "../../redux/slice/user";
import { useDispatch } from "react-redux";

export const Header = (props: any) => {
  const dispatch = useDispatch();

  const navigation = useNavigation();
  const {
    onPressRight2,
    onPressLeft = () => onBack(),
    leftIcon = "arrow-left",
    rightIcon = "arrow-left",
    rightIcon2 = "arrow-left",
    titleText = "Music APP",
    titleColor = COLORS.WHITE,
    style = {},
  } = props;
  return (

    <View paddingH-20 style={[styles.container]}>
      <View style={[styles.headerView]}>
        <View row center flex style={{marginLeft:-20}}>
        {leftIcon && (
          <TouchableOpacity onPress={onPressLeft} style={{ flex: 1 }}>
            <Image
              source={IMAGES.menu}
              style={{ width: 20, height: 20 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
        <View style={{left:-20}}>
        <Typography
          size={FONTSIZE.M}
          textType="semiBold"
          numberOfLines={1}
          color={titleColor}
        >
          {titleText}
        </Typography>
        </View>
       
        </View>
       <View flex style={{flexDirection:"row",gap:10,marginRight:-20}}>
       {rightIcon && (
          <TouchableOpacity style={{flex: 1 ,marginLeft:100, alignItems:"flex-end"}}
          onPress={()=> dispatch(setLoggedIn(false))}
          >
            <Image
              source={IMAGES.user}
              style={{ width: 30, height: 30, }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
         {rightIcon2 && (
          <TouchableOpacity onPress={onPressRight2} style={{ flex: 1 ,alignItems:"flex-end"}}>
            <Image
              source={IMAGES.search}
              style={{ width: 30, height: 30, }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
       </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS == "ios" ? 60 : 0,
   
    
  },
  headerView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:'center',
    height: 60,
  },
  headerText: {
    fontSize: FONTSIZE.L,
    color: COLORS.BLACK,
    alignSelf: "center",
  },
});
