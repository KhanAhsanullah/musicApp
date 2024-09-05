// import React from 'react';
// import { FlatList, StyleSheet, View, Image, Text } from 'react-native';
// import Swiper from 'react-native-swiper';
// import { IMAGES } from '../../constants';

// const IMAGE_CARD_DATA = [
//   { id: '1', title: 'Wo Larki Khawab Mere Dekhti Hai', duration: '6:10' },
//   { id: '2', title: 'Wo Larki Khawab Mere Dekhti Hai', duration: '6:10' },
//   { id: '3', title: 'Wo Larki Khawab Mere Dekhti Hai', duration: '6:10' },
// ];

// const ImageCardList = ({ cardHeight = 100, cardWidth = 150 }) => {
//   const renderItem = ({ item }) => (
//     <View style={styles.cardContainer}>
//       <Swiper
//         style={styles.wrapper}
//         dot={<View style={styles.dot} />}
//         activeDot={<View style={styles.activeDot} />}
//         paginationStyle={{
//           bottom: 10, // Ensuring dots are within the viewable area
//         }}
//         loop={true}
//       >
//         <View style={styles.slide}>
//           <Image
//             source={IMAGES.cameraCapture}
//             style={{ height: cardHeight, width: cardWidth }}
//             resizeMode="cover"
//           />
//           <Text style={styles.cardTitle}>{item.title}</Text>
//         </View>
//       </Swiper>
//     </View>
//   );

//   return (
//     <FlatList
//       data={IMAGE_CARD_DATA}
//       renderItem={renderItem}
//       keyExtractor={(item) => item.id}
//       horizontal
//       contentContainerStyle={styles.listContainer}
//       showsHorizontalScrollIndicator={false}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   listContainer: {
//     paddingVertical: 10,
//   },
//   cardContainer: {
//     height: 170,
//     width: 150,
//     marginRight: 10,
//     borderRadius: 8,
//     overflow: 'hidden',
//   },
//   wrapper: {
//     flex: 1,
//   },
//   slide: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   dot: {
//     backgroundColor: '#FFF',
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     margin: 3,
//   },
//   activeDot: {
//     backgroundColor: '#FF0000',
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     margin: 3,
//   },
//   cardTitle: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#FFF',
//     textAlign: 'center',
//     marginTop: 5,
//   },
// });

// export default ImageCardList;

import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";
import { COLORS, IMAGES } from "../../constants";

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
    id: "3",
    title: "Wo Larki Khawab Mere Dekhti Hai",
    img: IMAGES.imageCont,

  },
];

const CustomSlider = ({ cardWidth = 190, cardHeight = 100 }: any) => {
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
        style={styles.scrollView}
      >
        {IMAGES_CATEGORY.map((image, index) => (
          <View key={index} style={styles.slide}>
          
              <Image
                source={image.img}
                style={[
                  styles.image,
                  {
                    width: cardWidth,
                    height: cardHeight,
                    resizeMode:'cover',
                  },
                ]}
              />
            <Text style={styles.title}>{image.title}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Pagination Dots */}
      <View style={styles.dotsContainer}>
        {IMAGES_CATEGORY.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, activeIndex !== index && styles.activeDot]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  scrollView: {
    width: "100%",
  },
  slide: {
    // marginRight: 20,
    // justifyContent: "center",
    // alignItems: "center",
  },
  image: {
    borderRadius: 10,
  },

  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFF",
    textAlign: "center",
    marginVertical: 5,
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

export default CustomSlider;
