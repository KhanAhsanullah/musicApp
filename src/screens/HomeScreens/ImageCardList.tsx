import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";
import { IMAGES } from "../../constants";
import VideoPlayerComp from "../../components/atoms/VideoPlayerComp";

const { width } = Dimensions.get("window");

const IMAGES_CATEGORY = [
  {
    id: "1",
    title: "Wo Larki Khawab Mere Dekhti Hai",
    img: IMAGES.imageCont,
  },
  {
    id: "2",
    title: "Wo Larki Khawab Mere Dekhti Hai",
    img: IMAGES.imageCont,
  },
  {
    id: "3",
    title: "Wo Larki Khawab Mere Dekhti Hai",
    img: IMAGES.imageCont,
  },
  {
    id: "4",
    title: "Wo Larki Khawab Mere Dekhti Hai",
    img: IMAGES.imageCont,
  },
  {
    id: "1",
    title: "Wo Larki Khawab Mere Dekhti Hai",
    img: IMAGES.imageCont,
  },
  {
    id: "2",
    title: "Wo Larki Khawab Mere Dekhti Hai",
    img: IMAGES.imageCont,
  },
  {
    id: "3",
    title: "Wo Larki Khawab Mere Dekhti Hai",
    img: IMAGES.imageCont,
  },
  {
    id: "4",
    title: "Wo Larki Khawab Mere Dekhti Hai",
    img: IMAGES.imageCont,
  },
];

const ImageCardList = ({
  cardWidth = 120,
  cardHeight = 80,
  cardStyle ,
  customImages = IMAGES_CATEGORY,
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
        {IMAGES_CATEGORY.map((image, index) => (
          <View key={index} style={[styles.slide, {cardStyle }]}>
            <Image
              source={image.img} 
              style={[
                {
                  width: cardWidth,
                  height: cardHeight,
                  borderRadius: 10,
                  // marginTop: 20,
                },
              ]}
            />
         
            <Text numberOfLines={2} style={styles.title}>{image.title}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Pagination Dots */}
      {/* <View style={styles.dotsContainer}>
        {IMAGES_CATEGORY.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, activeIndex !== index && styles.activeDot]}
          />
        ))}
      </View> */}
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
    justifyContent:'center',
    alignItems:'center',
    width:140,
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
});

export default ImageCardList;



