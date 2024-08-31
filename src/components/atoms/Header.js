import React, { useContext, useEffect, useMemo, useState } from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Platform,
} from "react-native";
import IconRight from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Icon from "react-native-vector-icons/FontAwesome";
import { COLORS, FONTSIZE, SCREENS } from "../../constants";
import { Typography } from "./Typography";
import { navigate, onBack } from "../../navigation/RootNavigation";
import { useNavigation } from "@react-navigation/native";

export const Header = (props) => {
  const navigation = useNavigation();

  const {
    onPressRight = ()=>navigate(SCREENS.CART),
    onPressRight2,
    onPressLeft=()=>onBack(),
    leftIcon = "arrow-left",
    rightIcon,
    rightIconColor = COLORS.WHITE,
    rightIcon2,
    rightIconColor2 = COLORS.WHITE,
    titleText = "",
    centerImg,
    leftIconColor = COLORS.BLACK,
    titleColor = COLORS.BLACK,
    backgroundColor,
    borderBottomRightRadius = 20,
    borderBottomLeftRadius = 20,
    style = {},
  } = props;
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: backgroundColor,
          borderBottomRightRadius: borderBottomRightRadius,
          borderBottomLeftRadius: borderBottomLeftRadius,
        },
      ]}
    >
      <View style={styles.headerView}>
        {leftIcon && (
          <TouchableOpacity 
          onPress={onPressLeft}
          style={{ flex: 1 }}>
            <Icon name={leftIcon} size={20} color={leftIconColor} />
          </TouchableOpacity>
        )}
        {centerImg ? (
          <Image
            source={centerImg}
            style={{ width: 40, height: 40 }}
            color={COLORS.WHITE}
            resizeMode="contain"
          />
        ) : (
          <View style={{}}>
            <Typography
              size={FONTSIZE.M}
              align="center"
              style={[styles.headerText, {}]}
              textType="semiBold"
              numberOfLines={1}
              color={titleColor}
            >
              {titleText}
            </Typography>
          </View>
        )}

        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
          <View style={{ flex: 1 }}>
            <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
              {rightIcon && (
                <TouchableOpacity onPress={onPressRight}>
                  <MaterialIcons
                    name={rightIcon}
                    style={{ marginLeft: 30 }}
                    size={22}
                    color={rightIconColor}
                  />
                </TouchableOpacity>
              )}
            </View>
          </View>

          <View style={{ flex: 0.5 }}>
            <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
              {rightIcon2 && (
                <TouchableOpacity onPress={onPressRight2}>
                  <MaterialIcons
                    name={rightIcon2}
                    style={{}}
                    size={22}
                    color={rightIconColor2}
                  />
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: Platform.OS == "ios" ? 60 : 30,
    paddingBottom: 20,
  },
  headerView: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
  },
  headerText: {
    fontSize: FONTSIZE.L,
    color: COLORS.black,
    alignSelf: "center",
  },
 
});
