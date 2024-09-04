import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { View } from 'react-native-ui-lib';
import Swiper from 'react-native-swiper';
import { IMAGES } from '../../constants';

const SLIDER_DATA = [
  { id: 1, image: IMAGES.song1 },
  { id: 2, image: IMAGES.song2 },
  { id: 3, image: IMAGES.song3 },
];

const Slider = () => {
  return (
    <View style={styles.sliderContainer}>
      <Swiper
        showsButtons={true}
        prevButton={<Text style={styles.swiperButton}>‹</Text>}
        nextButton={<Text style={styles.swiperButton}>›</Text>}
      >
        {SLIDER_DATA.map((item) => (
          <View key={item.id} style={styles.slide}>
            <Image
              source={item.image}
              style={styles.slideImage}
              resizeMode="contain"
            />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    height: 300,
  },
  swiperButton: {
    color: '#fff',
    fontSize: 60,
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 400,
    backgroundColor: 'transparent',
  },
  slideImage: {
    width: '100%',
    height: '100%',
  },
});

export default Slider;
