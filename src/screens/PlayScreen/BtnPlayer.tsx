// import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import { TouchableOpacity, View } from "react-native-ui-lib";
import { IMAGES } from "../../constants";
import { useState } from "react";

const BtnPlayer = () => {
  const [isHeartActive, setIsHeartActive] = useState(false);
  // Toggle heart state
  const handleHeartToggle = () => {
    setIsHeartActive(!isHeartActive);
  };

  return (
    <View row spread marginV-20>
      <Image
        source={IMAGES.replace}
        style={{ width: 30, height: 30 }}
        resizeMode="contain"
      />
      <TouchableOpacity>
        <Image
          source={IMAGES.playerControler}
          style={{ width: 235, height: 40 }}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleHeartToggle}>
        <Image
          source={isHeartActive ? IMAGES.heart : IMAGES.heartLine} 
          style={{ width: 30, height: 30, }}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default BtnPlayer;
