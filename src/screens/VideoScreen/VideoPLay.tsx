import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { View } from "react-native-ui-lib";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { Header, Typography } from "../../components/atoms";
import { COLORS, IMAGES, SCREENS } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import { FooterItem } from "../../components/atoms/FooterItem";
import { commonStyles } from "../../globalStyle";
import LineBarPLayer from "./LineBarPLayer";
import BtnPlayer from "./BtnPlayer";
import DownloadPlayer from "./DownloadPlayer";
import SongCard from "../HomeScreens/SongList";
import { navigate, onBack } from "../../navigation/RootNavigation";

const VideoPlay = () => {
  const navigation = useNavigation();
  const TOP_SONGS = [{ id: 1 }, { id: 2 }, { id: 3 }];

  return (
    <SafeAreaContainer safeArea={false}>
      <View marginT-30 paddingH-10 backgroundColor={COLORS.MEHRON}>
        <Header onPressLeft={() => navigation?.toggleDrawer()} />
      </View>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* <TouchableOpacity onPress={() => onBack()}>
            <Image
              source={IMAGES.arrowDown}
              style={{ width: 20, height: 20, alignSelf: "flex-end" }}
              resizeMode="contain"
            />
          </TouchableOpacity> */}
          <View center width={"100%"} height={200}>
            <Image
              source={IMAGES.VideoImg}
              style={{ flex: 1 }}
              resizeMode="contain"
            />
          </View>
          <View center marginV-20>
            <Typography size={25}>Bawa Jee Sialkot</Typography>
            <Typography size={14}>Nadeem Abbas Khan Lonay Wala</Typography>
          </View>
          {/* {LineBarPLayer()}
          {BtnPlayer()}
          {DownloadPlayer()} */}
          <View spread row >
          <Typography size={18} >
            Queue
          </Typography>
          <TouchableOpacity >
          <Image
              source={IMAGES.ViewAll}
              style={{ width:80,height:25 }}
              resizeMode="contain"
            />
            </TouchableOpacity>
          </View>
          
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

export default VideoPlay;

