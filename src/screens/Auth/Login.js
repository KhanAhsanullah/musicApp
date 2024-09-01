import React, { useState, useRef } from "react";
import {Image,StyleSheet,KeyboardAvoidingView, Platform,ScrollView, Keyboard,} from "react-native";
import { useDispatch } from "react-redux";
import { COLORS, FONTSIZE, IMAGES } from "../../constants";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { setLoggedIn } from "../../redux/slice/user";
import { Button, InputText, Typography } from "../../components/atoms";
import { TouchableOpacity, View } from "react-native-ui-lib";
import { SocialLogin,VerticalLine,socialIcon,} from "../../components/molucule";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const PasswordInput = useRef(null);

  const _onSignin = () => {
    Validator.validate({ email, password }).then((err) => {
      setErrors(err);
      if (!err || !Object.keys(err).length) {
        dispatch(setLoggedIn(true));
      }
    });
  };

  return (
    <SafeAreaContainer safeArea={false}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={styles.flex}
      >
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
        >
          <TouchableOpacity style={styles.closeIcon}>
            <Image source={IMAGES.cross} style={styles.iconSize} />
          </TouchableOpacity>

          <View center>
            <Typography
              size={FONTSIZE.M}
              color={COLORS.GREY}
              style={styles.marginVertical}
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
              style={styles.marginVertical}
              size={FONTSIZE.L}
              color={COLORS.GREY}
            >
              Login to your account
            </Typography>

            <View style={styles.inputContainer}>
              <InputText
                placeholder="User Name"
                onChangeText={setEmail}
                value={email}
                error={errors.email}
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() => PasswordInput.current?.focus()}
              />
              <VerticalLine />
              <InputText
                placeholder="Password"
                onChangeText={setPassword}
                value={password}
                error={errors.password}
                returnKeyType="done"
                inputRef={PasswordInput}
                onSubmitEditing={Keyboard.dismiss}
                secureTextEntry
              />
            </View>
          </View>

          <View row spread marginV-20 style={styles.rememberMeContainer}>
            <View row style={styles.alignCenter}>
              <TouchableOpacity>
                <Image source={IMAGES.tick} style={styles.rememberIcon} />
              </TouchableOpacity>
              <Typography size={FONTSIZE.M} color={COLORS.GREY}>
                Remember me
              </Typography>
            </View>
            <Typography size={FONTSIZE.M} color={COLORS.GREY}>
              Forgot your password?
            </Typography>
          </View>

          <Button
            label="Login"
            onPress={_onSignin}
            style={styles.buttonMargin}
          />

          <SocialLogin text="Or" style={styles.socialLoginText} />
          <View style={styles.socialIconsContainer}>{socialIcon()}</View>

          <Typography size={FONTSIZE.L} align="center" color={COLORS.GREY}>
            You Don’t have Account
          </Typography>
          <Button label="Register Now" style={styles.buttonMargin} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaContainer>
  );
};

const styles = StyleSheet.create({
  flex: { flex: 1 },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingTop: Platform.OS === "ios" ? 100 : 60,
  },
  closeIcon: {
    position: "absolute",
    right: 20,
    top: 50,
  },
  iconSize: {
    width: 30,
    height: 30,
  },
  marginVertical: {
    marginVertical: 20,
  },
  inputContainer: {
    backgroundColor: COLORS.INPUT_VIEW,
    width: "100%",
    borderRadius: 20,
  },
  rememberMeContainer: {
    flex: 1,
    alignItems: "center",
  },
  alignCenter: {
    alignItems: "center",
  },
  rememberIcon: {
    width: 45,
    height: 45,
    resizeMode: "contain",
  },
  buttonMargin: {
    marginVertical: 20,
    marginHorizontal: 30,
  },
  socialLoginText: {
    textAlign: "center",
    marginHorizontal: 20,
  },
  socialIconsContainer: {
    marginVertical: 40,
  },
});

export default Login;
