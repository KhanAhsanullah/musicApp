import React, { useState } from "react";
import {
  ActivityIndicator,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { View } from "react-native-ui-lib";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { Header, Typography } from "../../components/atoms";
import { COLORS, IMAGES } from "../../constants";
import { useActiveTrack } from "react-native-track-player";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MovingText } from "../../components/atoms/MovingText";
import Icon from "../../components/atoms/Icon";
import { PlayerControls } from "../../components/molucule/PlayerControls";
import { PlayerProgressBar } from "../../components/molucule/PlayerProgressbar";
import { PlayerVolumeBar } from "../../components/molucule/PlayerVolumeBar";
import { PlayerRepeatToggle } from "../../components/molucule/PlayerRepeatToggle";
import { toggleDrawer } from "../../navigation/RootNavigation";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { CollapsableContainer } from "../../components/molucule/CollapsableContainer";

const AudioPLay = () => {
  const activeTrack = useActiveTrack()
  const { top, bottom } = useSafeAreaInsets()
  const {
    currentTrack,
    isPlaying,
    volume,
    mute,
    media_duration,
    currentTime,
    isShuffled,
  } = useSelector((state: RootState) => state.mediaPlayer);
  // const { isFavorite, toggleFavorite } = useTrackPlayerFavorite()
  const [expanded, setExpanded] = useState(false);
  if (!activeTrack) {
    return (
      <View style={[{ justifyContent: 'center', flex: 1 }]}>
        <ActivityIndicator color={COLORS.PRIMARY} />
      </View>
    )
  }

  return (
    <SafeAreaContainer safeArea={true}>
      <View style={styles.overlayContainer}>
        <DismissPlayerSymbol />
        <View paddingH-10 style={{paddingTop: Platform.OS == 'android' ? 20:0}}>
          <Header onPressLeft={() => toggleDrawer()} />
        </View>

        <ScrollView>
          <View style={styles.artworkImageContainer}>
            <Image
              source={{ uri: activeTrack.artwork ?? IMAGES.imageAudio }}
              resizeMode="cover"
              style={styles.artworkImage}
            />
          </View>
          <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Typography size={18}>About Track</Typography>
                <TouchableOpacity onPress={() => setExpanded(!expanded)} style={styles.iconButton}>
                  <Image
                    source={IMAGES.dropdown}
                    style={styles.dropdownIcon}
                  />
                </TouchableOpacity>
              </View>

              <CollapsableContainer expanded={expanded}>
                <View style={styles.detailRow}>
                  <Typography size={16} color={COLORS.PLACEHOLDER}>Duration</Typography>
                  <Typography size={16} color={COLORS.PLACEHOLDER}>{currentTrack.duration}</Typography>
                </View>
                <View style={styles.detailRow}>
                  <Typography size={16} color={COLORS.PLACEHOLDER}>Language</Typography>
                  <Typography size={16} color={COLORS.PLACEHOLDER}>{currentTrack.language?.name}</Typography>
                </View>
                <View style={styles.detailRow}>
                  <Typography size={16} color={COLORS.PLACEHOLDER}>Artist</Typography>
                  <Typography size={16} color={COLORS.PLACEHOLDER}>{currentTrack.artist?.name}</Typography>
                </View>
              </CollapsableContainer>
            </View>
          <View style={{ flex: 1, gap: 20, top: 10 }}>
            <View style={{ marginTop: 'auto' }}>
              <View style={{ height: 60 }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  {/* Track title */}
                  <View style={styles.trackTitleContainer}>
                    <MovingText
                      text={activeTrack.title ?? ''}
                      animationThreshold={30}
                      style={styles.trackTitleText}
                    />
                  </View>

                  <Icon
                    vector="FontAwesome6Free-Regular"
                    name={currentTrack.is_favorite ? 'heart' : 'heart-o'}
                    size={20}
                    color={COLORS.PRIMARY}
                    style={{ marginHorizontal: 14 }}
                  // onPress={toggleFavorite}
                  />
                </View>

                {activeTrack.artist && (
                  <Typography numberOfLines={1} style={[styles.trackArtistText, { marginTop: 6 }]}>
                    {activeTrack.artist}
                  </Typography>
                )}
              </View>

              <PlayerProgressBar style={{ marginTop: 32 }} />

              <PlayerControls style={{ marginTop: 40 }} />
            </View>

            <PlayerVolumeBar style={{ marginTop: 'auto', marginBottom: 30 }} />
            
            <View style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <PlayerRepeatToggle size={30} style={{ marginBottom: 6 }} />
            </View>
            
          </View>
        </ScrollView>
      </View>
    </SafeAreaContainer>
  )
}
const DismissPlayerSymbol = () => {
  return (
    <View
      style={{
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      <View
        accessible={false}
        style={{
          width: 80,
          height: 8,
          borderRadius: 8,
          backgroundColor: '#fff',
          opacity: 0.7,
        }}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  overlayContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  artworkImageContainer: {
    shadowOffset: {
      width: 0,
      height: 8,

    },
    shadowOpacity: 0.44,
    shadowRadius: 11.0,
    flexDirection: 'row',
    justifyContent: 'center',
    height: 200,
  },
  artworkImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 12,
  },
  trackTitleContainer: {
    flex: 1,
    overflow: 'hidden',
  },
  trackTitleText: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.WHITE
  },
  trackArtistText: {
    fontSize: 12,
    opacity: 0.8,
    maxWidth: '90%',
  },
  detailRow: {
    flex: 1,
    width: '100%',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
  },
  card: {
    backgroundColor: "#231F25",
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#2B2B2B",
    marginVertical:10
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconButton: {
    alignItems: "center",
  },
  dropdownIcon: {
    width: 20,
    height: 20,
  },
});

export default AudioPLay;

