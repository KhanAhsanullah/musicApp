import React, { useState, useRef, useEffect } from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Linking,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Alert,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import * as Validator from '../../utils/Validator';
import { COLORS, FONTSIZE, IMAGES, screenHeight, SCREENS } from "../../constants";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { commonStyles } from "../../globalStyle";
import { Typography } from "../../components/atoms/Typography";
import { InputText } from "../../components/atoms/InputText";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button } from "../../components/atoms/Button";
import { navigate } from "../../navigation/RootNavigation";
import { setLoggedIn } from "../../redux/slice/user";

const SignUp = (props) => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});

  const inputRefs = useRef([]);
  const [email, setEmail] = useState("a@gm.com");
  const [password, setPassword] = useState("23213213213");

  const [secureEntry, setSecureEntry] = useState(true);
  const EmailInput = React.createRef();
  const PasswordInput = React.createRef();

  const _onSignin = () => {
    let validateData = { email, password };
    Validator.validate(validateData).then(async (err) => {
      setErrors(err);
      if (err && Object.keys(err).length) return;
      dispatch(setLoggedIn(true));
    });
  };
  return (
    <SafeAreaContainer safeArea={false}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{ flex: 1 }}
      >
        <ImageBackground
          source={IMAGES.bkImg}
          style={{ flex: 1 }}
          resizeMode="cover"
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            bounces={false}
            contentContainerStyle={{
              paddingHorizontal: 20,
              paddingTop: Platform.OS === "ios" ? 100 : 60,
            }}
          >
            <Image
              source={IMAGES.fullLogo}
              style={{
                height: 150,
                width: 300,
                alignSelf: "center",
                marginVertical: 10,
              }}
              resizeMode="contain"
            />
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Typography
                color={COLORS.BLACK}
                size={FONTSIZE.XXL}
                textType="bold"
                align="center"
              >
                Welcome Back!
              </Typography>
              <Typography
                style={{ marginTop: 10 }}
                color={COLORS.MEDIUM_GREY}
                size={FONTSIZE.L}
              >
                Let's share happiness togather
              </Typography>
            </View>

            <View style={{ marginTop: 50 }}>
              <InputText
                title={"Email"}
                placeholder={"Enter your email address"}
                onChangeText={(text) => {
                  setEmail(text);
                }}
                value={email}
                error={errors.email}
                autoCapitalize={"none"}
                keyboardType={"email-address"}
                returnKeyType={"next"}
                inputRef={EmailInput}
                onSubmitEditing={() =>
                  PasswordInput.current && PasswordInput.current.focus()
                }
                leftIconVisibility={true}
                leftIconName={"email"}
                allowSpacing={false}
                style={{ marginVertical: 10 }}
                rightIcon={
                  email.length > 5 && (
                    <TouchableOpacity
                      style={{ justifyContent: "center", marginHorizontal: 8 }}
                      onPress={() => setSecureEntry(!secureEntry)}
                    >
                      <Icon name={"check"} size={15} color={COLORS.DARK_GREY} />
                    </TouchableOpacity>
                  )
                }
              />

              <InputText
                title={"Password"}
                placeholder={"Enter your password"}
                onChangeText={(text) => setPassword(text)}
                value={password}
                error={errors.password}
                autoCapitalize={"none"}
                returnKeyType={"done"}
                secureTextEntry={secureEntry}
                inputRef={PasswordInput}
                onSubmitEditing={() => {
                  Keyboard.dismiss();
                }}
                style={{ marginVertical: 10 }}
                leftIconVisibility={true}
                leftIconName={"lock"}
                rightIcon={
                  <TouchableOpacity
                    style={{ justifyContent: "center", marginHorizontal: 8 }}
                    onPress={() => setSecureEntry(!secureEntry)}
                  >
                    <Icon
                      name={secureEntry ? "eye-slash" : "eye"}
                      size={15}
                      color={COLORS.darkGray}
                    />
                  </TouchableOpacity>
                }
                cardStyle={{ backgroundColor: "#fff" }}
              />
            </View>
            <TouchableOpacity
              style={{ alignSelf: "flex-end", flex: 1 }}
              onPress={() => navigate(SCREENS.FORGET_PASS)}
            >
              <Typography
                size={FONTSIZE.XS}
                style={{ marginVertical: 0 }}
                align="right"
                color={COLORS.MEDIUM_GREY}
              >
                Forgot Password?
              </Typography>
            </TouchableOpacity>
            <View style={{ marginVertical: 20 }}>
              <Button
                label={"Sign In"}
                backgroundColor={COLORS.PRIMARY}
                borderRadius={10}
                onPress={_onSignin}
              />
            </View>

            <View style={{ marginVertical: 20 }}>
              <SocialLogin text={"Or Log In With "} />
              <View style={{ marginVertical: 20 }}>{socialIcon()}</View>
            </View>
            <View style={styles.bottomView}>
              <Typography align="center">New to Catch Me Up?&nbsp;</Typography>
              <TouchableOpacity
                onPress={() => {
                  navigate("SignUp");
                }}
              >
                <Typography color={COLORS.PRIMARY} align="center">
                  Create Account
                </Typography>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </ImageBackground>
      </KeyboardAvoidingView>
    </SafeAreaContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    flex: 1,
  },
  bottomView: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginVertical: 20,
  },
  socialIconStyle: {
    paddingLeft: 20,
    justifyContent: "center",
  },
  socialIconBorder: {
    width: 50,
    height: 50,
    resizeMode: "cover",
    borderWidth: 1,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    borderColor: COLORS.PRIMARY,
  },
});



export default SignUp;
