import React, { useState } from "react";
import { Image, ImageBackground, ScrollView, StyleSheet } from "react-native";
import { TouchableOpacity, View } from "react-native-ui-lib";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { Header, Typography } from "../../components/atoms";
import { COLORS, IMAGES } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import { FooterItem } from "../../components/atoms/FooterItem";
import { commonStyles } from "../../globalStyle";
import LineBarPLayer from "./LineBarPLayer";
import BtnPlayer from "./BtnPlayer";

const AudioPLay = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaContainer safeArea={false}>
      <View marginT-30 paddingH-10 backgroundColor={COLORS.MEHRON}>
        <Header onPressLeft={() => navigation?.toggleDrawer()} />
      </View>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image
            source={IMAGES.arrowDown}
            style={{ width: 20, height: 20, alignSelf: "flex-end" }}
            resizeMode="contain"
          />

          <View center width={"100%"} height={200}>
            <Image
              source={IMAGES.imageAudio}
              style={{ flex: 1 }}
              resizeMode="contain"
            />
          </View>
          <View center marginV-20>
            <Typography size={25}>Kithaan Guzaari Raat</Typography>
            <Typography size={14}>Nadeem Abbas Khan Lonay Wala</Typography>
          </View>
          {LineBarPLayer()}
          {BtnPlayer()}
          {/* <AudioTrackPLayer /> */}
        </ScrollView>
      </View>
    </SafeAreaContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.BLACK,
  },
});

export default AudioPLay;

// import React from "react";
// import { Image, ScrollView, StyleSheet } from "react-native";
// import { AudioTrackPlayer, Typography } from "../../components/atoms";
// import SafeAreaContainer from "../../containers/SafeAreaContainer";
// import { Header } from "../../components/atoms";
// import { COLORS, IMAGES } from "../../constants";
// import { useNavigation } from "@react-navigation/native";
// import { View } from "react-native-ui-lib";

// const AudioPlay = () => {
//   const navigation = useNavigation();

//   return (
//     <SafeAreaContainer safeArea={false}>
//       <View marginT-30 paddingH-10 backgroundColor={COLORS.MEHRON}>
//         <Header onPressLeft={() => navigation?.toggleDrawer()} />
//       </View>
//       <View style={styles.container}>
//         <ScrollView showsVerticalScrollIndicator={false}>
//           <Image
//             source={IMAGES.arrowDown}
//             style={{ width: 20, height: 20, alignSelf: "flex-end" }}
//             resizeMode="contain"
//           />
//           <View center width={"100%"} height={200}>
//             <Image
//               source={IMAGES.imageAudio}
//               style={{ flex: 1 }}
//               resizeMode="contain"
//             />
//           </View>
//           <View center >
//             <Typography>Kithaan Guzaari Raat</Typography>
//           </View>
//           <AudioTrackPlayer />
//         </ScrollView>
//       </View>
//     </SafeAreaContainer>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 10,
//   },
// });

// export default AudioPlay;
