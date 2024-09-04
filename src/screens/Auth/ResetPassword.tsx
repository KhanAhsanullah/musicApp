import React, { useRef, useState } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TextInput,
} from "react-native";
import { COLORS, FONTSIZE, IMAGES } from "../../constants";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { Button, InputText, Typography } from "../../components/atoms";
import {  Image, TouchableOpacity, View } from "react-native-ui-lib";
import { navigate, onBack } from "../../navigation/RootNavigation";
import { VerticalLine } from "../../components/molucule";
import { authStyles } from "./AuthStyle";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const PasswordInput = useRef(null);
  const ConfirmPasswordInput = useRef(null);
  return (
    <SafeAreaContainer safeArea={false}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={authStyles.flex}
      >
         <TouchableOpacity onPress={()=>onBack()} marginT-50 marginH-20>
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
            <View style={[authStyles.inputContainer,{alignSelf: "center",width: "70%",}]}>
             
              <TextInput
                placeholder="Password"
                placeholderTextColor="white"
                onChangeText={setPassword}
                value={password}
                returnKeyType="done"
                ref={PasswordInput}
                secureTextEntry
                onSubmitEditing={() => ConfirmPasswordInput.current?.focus()}
                style={{color:COLORS.WHITE,paddingHorizontal:20,textAlign:"center"}}
              />
              <VerticalLine />
              <TextInput
                placeholder="Confirm Password"
                placeholderTextColor="white"
                onChangeText={setConfirmPassword}
                value={confirmPassword}
                returnKeyType="done"
                ref={ConfirmPasswordInput}
                onSubmitEditing={Keyboard.dismiss}
                secureTextEntry
                style={{color:COLORS.WHITE,paddingHorizontal:20,textAlign:"center"}}
              />
            </View>
            <Button
              label="Save"
              onPress={() => {}}
              style={[authStyles.buttonMargin,{
                marginVertical: 50,
                marginHorizontal: 100,
              }]}
            />
          </View>
          <View>
            <Typography size={FONTSIZE.L} align="center" color={COLORS.GREY}>
              You Don’t have Account
            </Typography>
            <Button
              label="Register Now"
              onPress={() => navigate("SignUp")}
              style={[authStyles.buttonMargin,{marginVertical: 10,marginHorizontal: 100,}]}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaContainer>
  );
};
export default ResetPassword;
