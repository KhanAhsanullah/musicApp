import React from "react";
import { Text } from "react-native";
import { COLORS, FONTS, FONTSIZE } from "../../constants";

export const Typography = (props:any) => {
  const {
    textType = "regular",
    size = 12,
    color = COLORS.WHITE,
    align = "left",
    style = {},
    numberOfLines = undefined,
    capitalize = false,
    ellipsizeMode = "tail",
  } = props;

  let textStyle = {
    lineHeight: size * 1.6,
    fontSize: size,
    color: color,
    textAlign: align,
    textTransform: capitalize ? "capitalize" : "none",
    ...style,
  };

  switch (textType) {
    case "bold":
      textStyle.fontFamily = FONTS.PoppinsBold;
      break;
    case "semiBold":
      textStyle.fontFamily = FONTS.PoppinsSemiBold;
      break;
    case "regular":
      textStyle.fontFamily = FONTS.PoppinsMedium;
      break;
    case "light":
      textStyle.fontFamily = FONTS.PoppinsRegular;
      break;
    case "heading":
      textStyle.fontFamily = FONTS.CarterOneRegular;
      break;
    default:
      textStyle.fontFamily = FONTS.PoppinsRegular;
      break;
  }

  return (
    <Text
      style={textStyle}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
    >
      {props.children}
    </Text>
  );
};
