import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { COLORS,IMAGES, SCREENS } from "../../constants";
import { navigate, onBack } from "../../navigation/RootNavigation";

export const FooterItem = (props:any) => {
  const {
    onPressRight,

  } = props;
  return (
    <TouchableOpacity onPress={()=>navigate(SCREENS.AUDIO_PLAY)} style={{ marginHorizontal:3,bottom:-10 }}>
    <Image
      source={IMAGES.footer}
      style={{ height: 80, width: "100%" }}
      resizeMode="contain"
    />
  </TouchableOpacity>
  );
};
