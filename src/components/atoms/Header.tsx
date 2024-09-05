import React, { useContext, useEffect, useMemo, useState } from "react";
import {
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { COLORS, FONTSIZE, IMAGES } from "../../constants";
import { navigate, onBack } from "../../navigation/RootNavigation";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native-ui-lib";
import { Typography } from "./Typography";

export const Header = (props: any) => {
  const navigation = useNavigation();
  const {
    onPressRight,
    onPressRight2,
    onPressLeft = () => onBack(),
    leftIcon = "arrow-left",
    rightIcon = "arrow-left",
    rightIconColor = COLORS.WHITE,
    rightIcon2 = "arrow-left",
    rightIconColor2 = COLORS.WHITE,
    titleText = "",
    centerImg,
    leftIconColor = COLORS.BLACK,
    titleColor = COLORS.WHITE,
    backgroundColor,
    borderBottomRightRadius = 20,
    borderBottomLeftRadius = 20,
    style = {},
  } = props;
  return (

    <View paddingH-20 style={styles.container}>
      <View style={styles.headerView}>
        <View row center flex>
        {leftIcon && (
          <TouchableOpacity onPress={onPressLeft} style={{ flex: 1 }}>
            {/* <Icon name={leftIcon} size={20} color={leftIconColor} /> */}
            <Image
              source={IMAGES.menu}
              style={{ width: 20, height: 20 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
        <Typography
          size={FONTSIZE.M}
          // align="center"
          // style={[styles.headerText, {}]}
          textType="semiBold"
          numberOfLines={1}
          color={titleColor}
        >
          {titleText}
        </Typography>
        </View>
       <View flex style={{flexDirection:"row",gap:10,marginRight:-20}}>
       {rightIcon && (
          <TouchableOpacity onPress={onPressLeft} style={{flex: 1 ,marginLeft:80, alignItems:"flex-end"}}>
            <Image
              source={IMAGES.user}
              style={{ width: 40, height: 40, }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
         {rightIcon2 && (
          <TouchableOpacity onPress={onPressLeft} style={{ flex: 1 ,alignItems:"flex-end"}}>
            <Image
              source={IMAGES.search}
              style={{ width: 40, height: 40, }}
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
    paddingTop: Platform.OS == "ios" ? 60 : 20,
    
  },
  headerView: {
    flexDirection: "row",
    alignItems: "center",
    height: 60,
  },
  headerText: {
    fontSize: FONTSIZE.L,
    color: COLORS.BLACK,
    alignSelf: "center",
  },
});
