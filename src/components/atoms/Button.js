import React, {useEffect, useState} from 'react';
import {TouchableOpacity, StyleSheet, View, Text} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../../constants';
import { commonStyles } from '../../globalStyle';
import {Typography} from './Typography';


export const Button = (props) => {
  const {
    onPress = () => {},
    backgroundColor = COLORS.PRIMARY,
    label,
    disabled = false,
    style = {},
    btnStyle = {},
    isGradient = false,
    rightIcon = null,
    textColor = "#fff",
    borderColor = COLORS.BORDER,
    borderWidth = 2,
    borderRadius = 10,
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
        setPreventTap(!preventTap);
        onPress();
      }}
      activeOpacity={0.8}
      style={style}
    >
      {isGradient ? (
        <View
          style={[
            btnStyle,
            styles.button,
            {
              backgroundColor: disabled ? "#999B9F" : backgroundColor,
              borderRadius: borderRadius,
              marginHorizontal: 10,
            },
          ]}
        >
          <Text color={textColor} size={16}>
            {label}
          </Text>
          {rightIcon && rightIcon}
        </View>
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
              // marginHorizontal: 10
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
