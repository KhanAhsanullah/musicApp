import React, { useState } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TextInput,
} from "react-native";
import { COLORS, FONTSIZE, IMAGES, SCREENS } from "../../constants";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { Button, InputText, Typography } from "../../components/atoms";
import { Image, TouchableOpacity, View } from "react-native-ui-lib";
import { navigate, onBack } from "../../navigation/RootNavigation";
import { authStyles } from "./AuthStyle";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  return (
    <SafeAreaContainer safeArea={false}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={authStyles.flex}
      >
        <TouchableOpacity onPress={() => onBack()} marginT-50 marginH-20>
          <Image
            source={IMAGES.leftArrow}
            style={{ width: 20, height: 20 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View flex marginV-50 marginH-20 spread>
          <Typography
            size={FONTSIZE.M}
            color={COLORS.GREY}
            style={authStyles.marginVertical}
            textType="bold"
            align="center"
          >
            Music App name and logo
          </Typography>
          <View>
            <Typography
              size={FONTSIZE.M}
              color={COLORS.GREY}
              style={authStyles.marginVertical}
              textType="bold"
              align="center"
            >
              Recover Your Password
            </Typography>
            <View
              style={[
                authStyles.inputContainer,
                { alignSelf: "center", width: "70%" },
              ]}
            >
              <TextInput
                placeholder="Email"
                placeholderTextColor="white"
                onChangeText={setEmail}
                value={email}
                keyboardType="email-address"
                returnKeyType="done"
                onSubmitEditing={Keyboard.dismiss}
                style={{ color:COLORS.WHITE,paddingHorizontal:20,}}
              />
            </View>
            {/* <View
              style={[
                authStyles.inputContainer,
                { alignSelf: "center", width: "70%" },
              ]}
            >
              <InputText
                placeholder="Email"
                onChangeText={setEmail}
                value={email}
                keyboardType="email-address"
                returnKeyType="done"
                onSubmitEditing={Keyboard.dismiss}
              />
            </View> */}
            <Button
              label="Send Code"
              onPress={() => {
                navigate(SCREENS.RESET_PASS);
              }}
              style={[authStyles.buttonMargin, { marginHorizontal: 100 }]}
            />
          </View>
          <View>
            <Typography size={FONTSIZE.L} align="center" color={COLORS.GREY}>
              You Don’t have Account
            </Typography>
            <Button
              label="Register Now"
              onPress={() => navigate("SignUp")}
              style={[authStyles.buttonMargin, { marginHorizontal: 100 }]}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaContainer>
  );
};
export default ForgotPassword;
