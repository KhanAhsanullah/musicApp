import React, { useState } from "react";
import { Text, View } from "react-native-ui-lib";
import { Image, StyleSheet } from "react-native";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { commonStyles } from "../../globalStyle";
import { COLORS, IMAGES } from "../../constants";
import { Typography } from "../atoms";

export const AudioCard = () => {
  return (
      <View
        row
        spread
        centerV
        paddingV-10
        style={[{ 
          // backgroundColor: "#2B2B2B" ,
          backgroundColor: COLORS.BORDER,

        }]}
      >
        <View row center gap-10 marginL-10>
          <Image
            source={IMAGES.play}
            style={{
              width: 30,
              height: 30,
              resizeMode: "cover",
            }}
          />
          <View center style={styles.containerImg}>
            <Image
              source={IMAGES.cameraCapture}
              style={{
                width: 40,
                height: 40,
                resizeMode: "cover",
              }}
            />
          </View>
          <Typography style={{width:'40%'}} >Wo Larki Khawab Mere Dekhti Hai</Typography>

          <Image
            source={IMAGES.heart}
            style={{
              width: 30,
              height: 30,
              resizeMode: "cover",
            }}
          />
            <Image
            source={IMAGES.dotsVertical}
            style={{
              width: 30,
              height: 30,
              resizeMode: "cover",
            }}
          />
         
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  containerImg: {
    backgroundColor: COLORS.BLACK,
    borderRadius: 10,
    borderWidth: 1,
    width: 70,
    height: 70,
  },
});
