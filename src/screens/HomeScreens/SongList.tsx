import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from "react-native";
import { COLORS, IMAGES } from "../../constants";
import { Typography } from "../../components/atoms";

const SongCard = ({
  song,
  artist,
  duration,
  onPlay,
  onDownload,
  onLike,
  onMore,
}: any) => {
  const [expanded, setExpanded] = useState(false);
  const [isHeartActive, setIsHeartActive] = useState(false);
  const handleHeartToggle = () => {
    setIsHeartActive(!isHeartActive);
  };
  const [modalVisible, setModalVisible] = useState(false);
  const DROPDOWN_STATUS = [
    { id: 1, title: "Share" },
    { id: 2, title: "Add To Queue" },
    { id: 3, title: "Add To Playlist" },
    { id: 4, title: "View Detail" },
  ];
  const CustomModal = () => {
    return (
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <TouchableOpacity
          onPress={() => setModalVisible(false)}
          style={styles.centeredView}
        >
          <View style={styles.modalView}>
            {DROPDOWN_STATUS.map((i) => (
              <Typography size={16}>{i.title}</Typography>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>
    );
  };
  return (
    <>
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <TouchableOpacity onPress={onPlay}>
            <Image source={IMAGES.play} style={styles.icon} />
          </TouchableOpacity>
          <Image style={styles.image} source={IMAGES.cameraCapture} />
          <View style={styles.info}>
            <Text style={styles.songTitle}>{song}</Text>
            <Text style={styles.artistName}>{artist}</Text>
          </View>
          <TouchableOpacity
            onPress={() => setExpanded(!expanded)}
            style={{ alignItems: "center" }}
          >
            {/* <TouchableOpacity onPress={() => setExpanded(!expanded)}> */}
            <Image
              source={expanded ? IMAGES.dropdown : IMAGES.dropdown}
              style={{ width: 20, height: 20 }}
            />
            <Text style={styles.duration}>{duration}</Text>
          </TouchableOpacity>
        </View>

        {expanded && (
          <View style={styles.actions}>
            <TouchableOpacity onPress={onDownload}>
              <Image source={IMAGES.download} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleHeartToggle}>
              <Image
                source={isHeartActive ? IMAGES.heart : IMAGES.heartLine}
                style={styles.icon}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Image source={IMAGES.dotsVertical} style={styles.icon} />
            </TouchableOpacity>
          </View>
        )}
      </View>
      <CustomModal />
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
    backgroundColor: "#1E1E1E",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
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
