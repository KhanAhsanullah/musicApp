import React, { useState, useRef } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Keyboard,
} from "react-native";
import { useDispatch } from "react-redux";
import { COLORS, FONTSIZE, IMAGES } from "../../constants";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { setLoggedIn } from "../../redux/slice/user";
import { Button, InputText, Typography } from "../../components/atoms";
import { TouchableOpacity, View } from "react-native-ui-lib";
import {
  SocialLogin,
  VerticalLine,
  socialIcon,
} from "../../components/molucule";
import * as Validator from '../../utils/Validator';
import { authStyles } from "./AuthStyle";

const SignUp = () => {
  const dispatch = useDispatch();
  const [email, setEmail]:any = useState('');
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const PasswordInput = useRef(null);
  const ConfirmPasswordInput = useRef(null);

  const _onSignin = () => {
    Validator.validate({ email, password ,confirmPassword}).then((err) => {
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
        style={authStyles.flex}
      >
        <View row spread center style={{ marginHorizontal: 20,top: 50,}}>
          <TouchableOpacity flex>
            <Image
              source={IMAGES.leftArrow}
              style={{ width: 20, height: 20 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={IMAGES.cross} style={authStyles.iconSize} />
          </TouchableOpacity>
        </View>
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={authStyles.scrollContainer}
        >
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
              Sign Up For New account
            </Typography>

            <View style={authStyles.inputContainer}>
              <InputText
                placeholder="User Name"
                onChangeText={setEmail}
                value={email}
                error={errors?.email}
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
                secureTextEntry
                onSubmitEditing={() => ConfirmPasswordInput.current?.focus()}
              />
              <VerticalLine />
              <InputText
                placeholder="Confirm Password"
                onChangeText={setConfirmPassword}
                value={confirmPassword}
                error={errors.confirmPassword}
                returnKeyType="done"
                inputRef={ConfirmPasswordInput}
                onSubmitEditing={Keyboard.dismiss}
                secureTextEntry
              />
            </View>
          </View>

          <View marginV-20>
            <Button
              label="Sign Up"
              onPress={_onSignin}
              style={authStyles.buttonMargin}
            />
          </View>
          <SocialLogin text="Or" style={authStyles.socialLoginText} />
          <View style={authStyles.socialIconsContainer}>{socialIcon()}</View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaContainer>
  );
};
export default SignUp;
