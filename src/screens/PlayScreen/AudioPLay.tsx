import React, { useEffect, useState } from "react";
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
import TrackPlayer, { Track, useActiveTrack } from "react-native-track-player";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MovingText } from "../../components/atoms/MovingText";
import Icon from "../../components/atoms/Icon";
import { PlayerControls } from "../../components/molucule/PlayerControls";
import { PlayerProgressBar } from "../../components/molucule/PlayerProgressbar";
import { PlayerVolumeBar } from "../../components/molucule/PlayerVolumeBar";
import { PlayerRepeatToggle } from "../../components/molucule/PlayerRepeatToggle";
import { toggleDrawer } from "../../navigation/RootNavigation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { CollapsableContainer } from "../../components/molucule/CollapsableContainer";
import {
  addFavourite,
  removeFavourite,
  removeFromQueue,
} from "../../redux/slice/Player/mediaPlayerSlice";
import { MediaItem } from "../../redux/slice/Tops/TopsSlice";

const AudioPLay = () => {
  const dispatch = useDispatch<AppDispatch>();
  const activeTrack = useActiveTrack();

  const { top, bottom } = useSafeAreaInsets();
  const {
    currentTrack,
    isPlaying,
    volume,
    mute,
    media_duration,
    currentTime,
    isShuffled,
    queue,
  } = useSelector((state: RootState) => state.mediaPlayer);

  const [expanded, setExpanded] = useState(false);
  const [myQueue, setMyQueue] = useState<Track[]>([]);
  useEffect(() => {
    const getQueue = async () => {
      const TrackPlayerqueue = await TrackPlayer.getQueue();
      setMyQueue(TrackPlayerqueue);
    };
    getQueue();
  }, [queue]);

  if (!activeTrack) {
    return (
      <View style={[{ justifyContent: "center", flex: 1 }]}>
        <ActivityIndicator color={COLORS.PRIMARY} />
      </View>
    );
  }
  const handleLikeToggle = (i: MediaItem) => {
    i.is_favorite
      ? dispatch(removeFavourite({ mediaId: i.id, type: "song" }))
      : dispatch(addFavourite({ mediaId: i.id, type: "song" }));
  };

  const handleRemoveTrack = async (trackId: any) => {
    try {
      console.log('Removing track with ID:', trackId);
      const queue = await TrackPlayer.getQueue();
      const trackIndex = queue.findIndex((track) => track.id === trackId);
      if (trackIndex === -1) {
        console.error('Track not found in TrackPlayer queue:', trackId);
        return;
      }
      console.log('Removing track at index:', trackIndex);
      await TrackPlayer.remove([trackIndex]); 
      dispatch(removeFromQueue(trackId));
      const updatedQueue = await TrackPlayer.getQueue(); 
      setMyQueue(updatedQueue); 
      console.log('Track removed successfully. Updated queue:', updatedQueue);
    } catch (error) {
      console.error('Error removing track:', error);
    }
  };
  return (
    <SafeAreaContainer safeArea={true}>
      <View style={styles.overlayContainer}>
        <DismissPlayerSymbol />
        <View
          paddingH-10
          style={{ paddingTop: Platform.OS == "android" ? 20 : 0 }}
        >
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
              <TouchableOpacity
                onPress={() => setExpanded(!expanded)}
                style={styles.iconButton}
              >
                <Image source={IMAGES.dropdown} style={styles.dropdownIcon} />
              </TouchableOpacity>
            </View>

            <CollapsableContainer expanded={expanded}>
              <View style={styles.detailRow}>
                <Typography size={16} color={COLORS.PLACEHOLDER}>
                  Duration
                </Typography>
                <Typography size={16} color={COLORS.PLACEHOLDER}>
                  {currentTrack.duration}
                </Typography>
              </View>
              <View style={styles.detailRow}>
                <Typography size={16} color={COLORS.PLACEHOLDER}>
                  Language
                </Typography>
                <Typography size={16} color={COLORS.PLACEHOLDER}>
                  {currentTrack.language?.name}
                </Typography>
              </View>
              <View style={styles.detailRow}>
                <Typography size={16} color={COLORS.PLACEHOLDER}>
                  Artist
                </Typography>
                <Typography size={16} color={COLORS.PLACEHOLDER}>
                  {currentTrack.artist?.name}
                </Typography>
              </View>
            </CollapsableContainer>
          </View>
          <View style={{ flex: 1, gap: 20, top: 10 }}>
            <View style={{ marginTop: "auto" }}>
              <View style={{ height: 60 }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  {/* Track title */}
                  <View style={styles.trackTitleContainer}>
                    <MovingText
                      text={activeTrack.title ?? ""}
                      animationThreshold={30}
                      style={styles.trackTitleText}
                    />
                  </View>

                  <Icon
                    vector="FontAwesome6Free-Regular"
                    name={currentTrack.is_favorite ? "heart" : "heart-o"}
                    size={20}
                    color={COLORS.PRIMARY}
                    style={{ marginHorizontal: 14 }}
                    onPress={() => handleLikeToggle(currentTrack)}
                  />
                   <PlayerRepeatToggle size={30} style={{ marginBottom: 6 }} />
                </View>

                {activeTrack.artist && (
                  <Typography
                    numberOfLines={1}
                    style={[styles.trackArtistText, { marginTop: 6 }]}
                  >
                    {activeTrack.artist}
                  </Typography>
                )}
                
              </View>

              <PlayerProgressBar style={{ marginTop: 32 }} />

              <PlayerControls style={{ marginTop: 40 }} />
            </View>

            <PlayerVolumeBar style={{ marginTop: "auto", marginBottom: 30 }} />

          </View>
          <View gap-10>
            {myQueue.length !== 0 &&
              myQueue.map((i) => (
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    gap: 10,
                    justifyContent: "space-between",
                    backgroundColor: "#231F25",
                    borderRadius: 10,
                    marginBottom: 10,
                    padding: 10,
                    borderWidth: 1,
                    borderColor: "#2B2B2B",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      gap: 10,
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={{ uri: i.artwork }}
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: 10,
                        resizeMode: "cover",
                      }}
                    />
                    <Typography textType="bold">{i.title}</Typography>
                  </View>
                  <Icon
                    vector="Entypo"
                    name="circle-with-minus"
                    color={COLORS.PRIMARY}
                    size={25}
                    onPress={() => handleRemoveTrack(i.id)}
                  />
                </View>
              ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaContainer>
  );
};
const DismissPlayerSymbol = () => {
  return (
    <View
      style={{
        position: "relative",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <View
        accessible={false}
        style={{
          width: 80,
          height: 8,
          borderRadius: 8,
          backgroundColor: "#fff",
          opacity: 0.7,
        }}
      />
    </View>
  );
};
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
    flexDirection: "row",
    justifyContent: "center",
    height: 200,
  },
  artworkImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 12,
  },
  trackTitleContainer: {
    flex: 1,
    overflow: "hidden",
  },
  trackTitleText: {
    fontSize: 22,
    fontWeight: "700",
    color: COLORS.WHITE,
  },
  trackArtistText: {
    fontSize: 12,
    opacity: 0.8,
    maxWidth: "90%",
  },
  detailRow: {
    flex: 1,
    width: "100%",
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
    marginVertical: 10,
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
