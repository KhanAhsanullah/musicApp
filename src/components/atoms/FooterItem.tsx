import React from "react";
import { TouchableOpacity, Image, StyleSheet, View } from "react-native";
import { COLORS, IMAGES, SCREENS } from "../../constants";
import { navigate, onBack } from "../../navigation/RootNavigation";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MovingText } from "./MovingText";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { PlayPauseButton, SkipToNextButton } from "../molucule/PlayerControls";
import { getFocusedRouteNameFromRoute, useRoute } from "@react-navigation/native";

export const FooterItem = (props: any) => {
  const {
    onPressRight,

  } = props;
  const insets = useSafeAreaInsets();
  const {
    currentTrack,
    isPlaying,
    volume,
    mute,
    media_duration,
    currentTime,
    isShuffled,
  } = useSelector((state: RootState) => state.mediaPlayer);
  const route = useRoute();
  const routeName = getFocusedRouteNameFromRoute(route);

  if (currentTrack.file_path === "" || routeName == "AudioPLay" || currentTrack.type !== "audio") return null
  return (
    <TouchableOpacity onPress={() => navigate(SCREENS.AUDIO_PLAY)} style={{
      position: 'absolute',
      bottom: insets.bottom,
      zIndex: 100,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#252525',
      padding: 8,
      borderRadius: 12,
      paddingVertical: 10,
    }}>
      <>
        <Image
          source={{ uri: currentTrack.cover_image }}
          style={styles.trackArtworkImage}
        />

        <View style={styles.trackTitleContainer}>
          <MovingText
            style={styles.trackTitle}
            text={currentTrack.title ?? ''}
            animationThreshold={25}
          />
        </View>

        <View style={styles.trackControlsContainer}>
          <PlayPauseButton iconSize={24} />
          <SkipToNextButton iconSize={22} />
        </View>
      </>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  trackArtworkImage: {
    width: 40,
    height: 40,
    borderRadius: 8,
  },
  trackTitleContainer: {
    flex: 1,
    overflow: 'hidden',
    marginLeft: 10,
    color: COLORS.WHITE
  },
  trackTitle: {
    color: COLORS.WHITE,
    fontSize: 18,
    fontWeight: '600',
    paddingLeft: 10,
  },
  trackControlsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 20,
    marginRight: 16,
    paddingLeft: 16,
  },
})