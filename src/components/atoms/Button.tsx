import React, { useEffect, useState } from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { COLORS, FONTSIZE } from "../../constants";
import { commonStyles } from "../../globalStyle";
import { Typography } from "./Typography";
import { Text } from "react-native-ui-lib";

export const Button = (props: any) => {
  const {
    onPress = () => {},
    // backgroundColor = COLORS.BLACK,
    label,
    disabled = false,
    style = {},
    btnStyle = {},
    isGradient = true,
    rightIcon = null,
    textColor = "#fff",
    borderColor = COLORS.BORDER,
    borderWidth = 2,
    borderRadius = 30,
    btnHeight = 50,
  } = props;

  const [preventTap, setPreventTap] = useState(false);

  useEffect(() => {
    preventTap && setTimeout(() => setPreventTap((prev) => !prev), 500);
  }, [preventTap]);

  return (
    <TouchableOpacity
      disabled={disabled || preventTap}
      onPress={() => {
        // setPreventTap(!preventTap);
        onPress();
      }}
      activeOpacity={0.8}
      style={style}
    >
      {isGradient ? (
        <>
          <LinearGradient
            style={{ borderRadius: 50 }}
            colors={["#CF0056", "#600D62"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <View
              style={[
                btnStyle,
                {
                  alignItems: "center",
                  justifyContent: "center",
                  marginVertical: 10,
                  flexDirection: "row",
                }
                // styles.button,
                // {
                //   backgroundColor: disabled ? "#999B9F" : 'red',
                //   borderRadius: borderRadius,
                //   marginHorizontal: 10,
                // },
              ]}
            >
              <Typography color={textColor} size={FONTSIZE.L}>
                {label}
              </Typography>
              {rightIcon && rightIcon}
            </View>
          </LinearGradient>
        </>
      ) : (
        <View
          style={[
            btnStyle,
            styles.button,
            {
              backgroundColor: disabled ? COLORS.WHITE : backgroundColor,
              borderRadius: borderRadius,
              borderColor: borderColor,
              borderWidth: borderWidth,
              height: btnHeight,
            },
          ]}
        >
          <Typography color={textColor} size={16}>{`${label} `}</Typography>
          {rightIcon && rightIcon}
        </View>
      )}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    flexDirection: "row",
    ...commonStyles.boxShadow,
  },
});
