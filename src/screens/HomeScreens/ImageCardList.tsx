import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  ScrollView,
  FlatList,
} from "react-native";
import { IMAGES, parseDuration, screenHeight, screenWidth, SCREENS } from "../../constants";
import { navigate } from "../../navigation/RootNavigation";
import { MediaItem } from "../../redux/slice/Tops/TopsSlice";
import { Typography } from "../../components/atoms";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import TrackPlayer from "react-native-track-player";
import { playTrack } from "../../redux/slice/Player/mediaPlayerSlice";

export interface TrackSlidesProps {
  cardStyle?: StyleProp<ViewStyle>;
  customImages: MediaItem[];
  columns?: boolean; // Optional: Number of columns for vertical layout
}

const ImageCardList: React.FC<TrackSlidesProps> = ({
  cardStyle,
  customImages,
  columns,
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const handlePlay = async (item: MediaItem) => {
    if (item.type === "audio") {
      handleAudioSong(item);
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
        artist: i.artist?.name || "Unknown Artist",
        artwork: i.cover_image,
        duration: parseDuration(i.duration),
      });
      await TrackPlayer.play();
      dispatch(playTrack(i));
      console.log("Now playing:", i.title);
    } catch (error) {
      console.error("Error playing track:", error);
    }
  };

  // Grid Item Renderer for FlatList
  const renderItem = ({ item }: { item: MediaItem }) => (
    <TouchableOpacity onPress={() => handlePlay(item)} style={[styles.artistItemContainer, cardStyle]}>
      <View style={styles.imageContainer}>
        <Image source={item?.cover_image ? { uri: item.cover_image } : IMAGES.userImg} style={styles.image} />
      </View>
      <Typography textType="bold" numberOfLines={2} style={styles.artistName}>
        {item?.title}
      </Typography>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {columns ? (
        <FlatList
          data={customImages}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2} // Dynamic number of columns
          // columnWrapperStyle={styles.columnWrapper} // Add padding between rows
          // contentContainerStyle={styles.flatListContent}
          // style={{ flex:1,}}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {customImages.map((item) => (
            <TouchableOpacity onPress={() => handlePlay(item)} style={[styles.artistItemContainer, cardStyle]} key={item.id}>
              <View style={styles.imageContainer}>
                <Image source={item?.cover_image ? { uri: item.cover_image } : IMAGES.userImg} style={styles.image} />
              </View>
              <Typography textType="bold" numberOfLines={2} style={styles.artistName}>
                {item?.title}
              </Typography>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  flatListContent: {
    paddingBottom: 20,
  },
  columnWrapper: {
    flex:1,
    justifyContent: "space-between",
  },
  artistItemContainer: {
    margin: 10,
    gap: 5,
    flex: 1, // Ensure items stretch to fill column width
  },
  imageContainer: {
    width: screenWidth(40),
    height: screenHeight(15),
    borderRadius: 10,
    overflow: "hidden",
  },
  artistName: {
    textAlign: "center",
    marginTop: 5,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default ImageCardList;
