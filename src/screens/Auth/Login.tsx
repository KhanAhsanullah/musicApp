import React, { useState, useRef } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Keyboard,
} from "react-native";
import { useDispatch } from "react-redux";
import { COLORS, FONTSIZE, IMAGES, SCREENS } from "../../constants";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { setLoggedIn } from "../../redux/slice/user";
import { Button, InputText, Typography } from "../../components/atoms";
import { TouchableOpacity, View } from "react-native-ui-lib";
import {
  SocialLogin,
  VerticalLine,
  socialIcon,
} from "../../components/molucule";
import { navigate } from "../../navigation/RootNavigation";
import * as Validator from "../../utils/Validator";
import { authStyles } from "./AuthStyle";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [check, setCheck] = useState(true);

  const PasswordInput = useRef(null);

  // const _onSignin = () => {
  //   Validator.validate({ email, password }).then((err) => {
  //     setErrors(err);
  //     if (!err || !Object.keys(err).length) {
  //       dispatch(setLoggedIn(true));
  //     }
  //   });
  // };

  return (
    <SafeAreaContainer safeArea={false}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={authStyles.flex}
      >
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={authStyles.scrollContainer}
        >
          {/* <TouchableOpacity style={authStyles.closeIcon}>
            <Image source={IMAGES.cross} style={authStyles.iconSize} />
          </TouchableOpacity> */}

          <View center>
            <Typography
              size={FONTSIZE.M}
              color={COLORS.GREY}
              style={authStyles.marginVertical}
              textType="bold"
            >
              Music App name and logo
            </Typography>
            <Typography size={30} textType="bold">
              Welcome To
            </Typography>
            <Typography size={FONTSIZE.M} color={COLORS.GREY}>
              Music App
            </Typography>
            <Typography
              style={authStyles.marginVertical}
              size={FONTSIZE.L}
              color={COLORS.GREY}
            >
              Login to your account
            </Typography>

            <View style={authStyles.inputContainer}>
              <InputText
                placeholder="User Name"
                onChangeText={setEmail}
                value={email}
                // error={errors.email}
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() => PasswordInput.current?.focus()}
              />
              <VerticalLine />
              <InputText
                placeholder="Password"
                onChangeText={setPassword}
                value={password}
                // error={errors.password}
                returnKeyType="done"
                inputRef={PasswordInput}
                onSubmitEditing={Keyboard.dismiss}
                secureTextEntry
              />
            </View>
          </View>

          <View row spread marginV-20 style={authStyles.rememberMeContainer}>
            <View row style={authStyles.alignCenter}>
              <TouchableOpacity onPress={() => setCheck(!check)}>
                {check ? (
                  <Image source={IMAGES.tick} style={authStyles.rememberIcon} />
                ) : (
                  <Image
                    source={IMAGES.tick}
                    style={[authStyles.rememberIcon, { tintColor: "#fff" }]}
                  />
                )}
              </TouchableOpacity>
              <Typography
                size={FONTSIZE.S}
                color={COLORS.GREY}
                style={{ marginLeft: 0 }}
              >
                Remember me
              </Typography>
            </View>
            <TouchableOpacity style={{borderBottomWidth:0.2,borderColor:COLORS.GREY}} onPress={() => navigate(SCREENS.FORGOT_PASSWORD)}>
              <Typography size={FONTSIZE.S} color={COLORS.GREY}>
                Forgot your password?
              </Typography>
            </TouchableOpacity>
          </View>

          <Button
            label="Login"
            // onPress={_onSignin}
            onPress={()=> dispatch(setLoggedIn(true))}
            style={authStyles.buttonMargin}
          />

          <SocialLogin text="Or" style={authStyles.socialLoginText} />
          <View style={authStyles.socialIconsContainer}>{socialIcon()}</View>

          <Typography size={FONTSIZE.L} align="center" color={COLORS.GREY}>
            You Don’t have Account
          </Typography>
          <Button
            label="Register Now"
            onPress={() => navigate(SCREENS.SIGNUP)}
            style={authStyles.buttonMargin}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaContainer>
  );
};

export default Login;
