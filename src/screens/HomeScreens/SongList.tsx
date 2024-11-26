import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { COLORS, IMAGES, SCREENS } from "../../constants";
import { navigate } from "../../navigation/RootNavigation";
import { StopPropagation } from "../../components/atoms/StopPropagation";
import { TrackShortcutsMenu } from "../../components/atoms/TrackShortcutsMenu";
import { MediaItem } from "../../redux/slice/Tops/TopsSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { addFavourite, removeFavourite } from "../../redux/slice/Player/mediaPlayerSlice";

interface SongCardProps {
  track: MediaItem;
  onPlay: () => void;
  onDownload: () => void;
  onLike: () => void;
  onMore: () => void;
}

const SongCard: React.FC<SongCardProps> = ({
  track,
  onPlay,
  onLike,
  onMore,
  onDownload,
}) => {
  const dispatch = useDispatch<AppDispatch>()
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <TouchableOpacity style={styles.card} onPress={onPlay}>
        <View style={styles.cardContent}>
          <TouchableOpacity onPress={() => navigate(SCREENS.AUDIO_PLAY)}>
            <Image source={IMAGES.play} style={styles.icon} />
          </TouchableOpacity>
          <Image style={styles.image} source={track.cover_image !== null ? { uri: track.cover_image } : IMAGES.cameraCapture} />
          <View style={styles.info}>
            <Text style={styles.songTitle}>{track.title}</Text>
            <Text style={styles.artistName}>{track.artist?.name}</Text>
          </View>
          <StopPropagation>
            <TrackShortcutsMenu track={track}>
              <Image
                source={expanded ? IMAGES.dropdown : IMAGES.dropdown}
                style={{ width: 20, height: 20 }}
              />
            </TrackShortcutsMenu>
          </StopPropagation>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    // backgroundColor: '#0E0B10',
    backgroundColor: "#231F25",
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#2B2B2B",
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  songTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  artistName: {
    color: "#AAAAAA",
    fontSize: 14,
  },
  duration: {
    color: "#AAAAAA",
    fontSize: 14,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    gap: 20,
  },
  icon: {
    width: 24, // Adjust the size based on your icon dimensions
    height: 24,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#393939",
    borderRadius: 10,
    padding: 10,
    // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default SongCard;
