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
import { authStyles } from "./SubscriptionStyle";

const OTPScreen = () => {
  const [email, setEmail] = useState("");
  const [check, setCheck] = useState(true);

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
              size={FONTSIZE.L}
              color={COLORS.GREY}
              style={authStyles.marginVertical}
              textType="bold"
              align="center"
            >
              OTP
            </Typography>
            <View
              style={[
                authStyles.inputContainer,
                { alignSelf: "center", width: "100%" },
              ]}
            >
              <TextInput
                placeholder="-     -      -     - "
                placeholderTextColor="white"
                onChangeText={setEmail}
                value={email}
                keyboardType="phone-pad"
                returnKeyType="done"
                onSubmitEditing={Keyboard.dismiss}
                style={{
                  color: COLORS.WHITE,
                  paddingHorizontal: 20,
                  textAlign: "center",
                }}
              />
            </View>
            <Button
              label="Verify"
              onPress={() => {
                navigate(SCREENS.RESET_PASS);
              }}
              style={[authStyles.buttonMargin, { marginHorizontal: 60 }]}
            />
          </View>
          <View />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaContainer>
  );
};
export default OTPScreen;
