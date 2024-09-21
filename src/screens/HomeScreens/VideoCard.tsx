import React, { useState } from "react";
import { Image, Text, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { COLORS, IMAGES, SCREENS } from "../../constants";
import VideoPlayerComp from "../../components/atoms/VideoPlayerComp";
import { Typography } from "../../components/atoms";
import { View } from "react-native-ui-lib";
import { navigate } from "../../navigation/RootNavigation";

const { width } = Dimensions.get("window");

const IMAGES_CATEGORY = [
  {
    id: "1",
    title: "Wo Larki Khawab \n Mere Dekhti Hai",
    img: IMAGES.imageCont,
  },
  {
    id: "2",
    title: "Wo Larki Khawab \n Mere Dekhti Hai",
    img: IMAGES.imageCont,
  },
  {
    id: "3",
    title: "Wo Larki Khawab \n Mere Dekhti Hai",
    img: IMAGES.imageCont,
  },
  {
    id: "4",
    title: "Wo Larki Khawab \n Mere Dekhti Hai",
    img: IMAGES.imageCont,
  },
 
];

const VideoCard = ({
}: {
  cardWidth?: number;
  cardHeight?: number;
  cardStyle?: Object;
  customImages?: { id: string; title: string; img: any }[];
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (event: any) => {
    const scrollPosition = Math.ceil(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(scrollPosition);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {IMAGES_CATEGORY.map((item, index) => (
          <TouchableOpacity onPress={()=>navigate(SCREENS.VIDEO_PLAY)} key={index} >
            <View marginV-10 marginR-10>
              <View style={styles.artistItem}>
                <View
                  style={{
                    position: "absolute",
                    right: 10,
                    bottom: 5,
                    borderWidth: 1,
                    backgroundColor: COLORS.PRIMARY,
                    borderRadius: 10,
                    paddingHorizontal: 5,
                  }}
                >
                  <Typography size={10}>6:10</Typography>
                </View>
                <Image
                  source={IMAGES.imageCont}
                  style={styles.artistImage}
                  resizeMode="contain"
                />
              </View>
              <Typography size={12} style={styles.artistName}>
                {item.title}
              </Typography>
              <View row center style={{ alignItems: "center" }}>
                <Image
                  source={IMAGES.eye}
                  style={{ width: 15, height: 15 }}
                  resizeMode="contain"
                />
                <Typography size={9}> 519 views</Typography>
              </View>
            </View>
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
    // gap: 20,
  },
  slide: {
    // justifyContent: "center",
    // alignItems: "center",
    // width: 140,
    // margin:20
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFF",
    textAlign: "center",
    marginVertical: 15,
    width: "80%",
  },
  dotsContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: -10,
    justifyContent: "center",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ddd",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#333",
  },
  artistItem: {
    backgroundColor: "#2B2B2B",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    width: width * 0.45,
    height: 100,
  },
  artistImage: {
    width: 100,
    height: 80,
  },
  artistName: {
    marginTop: 5,
    textAlign: "center",
  },
});

export default VideoCard;
