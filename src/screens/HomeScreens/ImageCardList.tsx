import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from "react-native";
import { IMAGES, parseDuration, screenHeight, SCREENS, screenWidth } from "../../constants";
import { navigate } from "../../navigation/RootNavigation";
import { MediaItem } from "../../redux/slice/Tops/TopsSlice";
import { Typography } from "../../components/atoms";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import TrackPlayer from "react-native-track-player";
import { playTrack } from "../../redux/slice/Player/mediaPlayerSlice";

const { width } = Dimensions.get("window");

export interface TrackSlidesProps {
  cardStyle?: StyleProp<ViewStyle>;
  customImages: MediaItem[];
}

const ImageCardList: React.FC<TrackSlidesProps> = ({
  cardStyle,
  customImages,
}) => {
  const dispatch = useDispatch<AppDispatch>()

  const handlePlay = async (item: MediaItem) => {
    if (item.type === "audio") {
      handleAudioSong(item)
    } else if (item.type === "video") {
      await TrackPlayer.reset();
      navigate(SCREENS.VIDEO_PLAY);
    }
    dispatch(playTrack(item));
  };

  const handleAudioSong = async (i: MediaItem) => {
    try {
      await TrackPlayer.reset();
      await TrackPlayer.add({
        id: i.id.toString(),
        url: i.file_path,
        title: i.title,
        artist: i.artist?.name || 'Unknown Artist',
        artwork: i.cover_image,
        duration: parseDuration(i.duration),
      });
      await TrackPlayer.play();
      dispatch(playTrack(i));
      console.log('Now playing:', i.title);
    } catch (error) {
      console.error('Error playing track:', error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {customImages.map((item, index) => (
          <TouchableOpacity onPress={() => handlePlay(item)} style={styles.artistItemContainer} >
            <View style={styles.imageContainer}>
              <Image source={item?.cover_image !== null ? { uri: item.cover_image } : IMAGES.userImg} style={styles.image} />
            </View>
            <Typography textType='bold' numberOfLines={2} style={styles.artistName} >
              {item?.title}
            </Typography>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  artistItemContainer: {
    marginRight: 10,
    gap: 5
  },
  imageContainer: {
    width: screenWidth(40), // Fixed width
    height: screenHeight(15), // Fixed height
    borderRadius: 10,
    overflow: "hidden", // Ensures image stays within the bounds
    // backgroundColor: "#f0f0f0", // Add a background color for better UX
  },
  artistName: {
    width: screenWidth(35),
    textAlign: "center"
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default ImageCardList;



