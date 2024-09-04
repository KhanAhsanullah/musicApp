import React from 'react';
import { FlatList, StyleSheet, View, Image, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import { IMAGES } from '../../constants';

const IMAGE_CARD_DATA = [
  { id: '1', title: 'Wo Larki Khawab Mere Dekhti Hai', duration: '6:10' },
  { id: '2', title: 'Wo Larki Khawab Mere Dekhti Hai', duration: '6:10' },
  { id: '3', title: 'Wo Larki Khawab Mere Dekhti Hai', duration: '6:10' },
];

const ImageCardList = ({ cardHeight = 100, cardWidth = 150 }) => {
  const renderItem = ({ item }:any) => (
    <View style={styles.cardContainer}>
      <Swiper
        style={styles.wrapper}
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />}  
        paginationStyle={{
          bottom: 0,
        }}
        loop={true}
      >
        <View style={styles.slide}>
          <Image
            source={IMAGES.cameraCapture} 
            style={{ height: cardHeight, width: cardWidth }}
            resizeMode="cover"
          />
          <Text style={styles.cardTitle}>{item.title}</Text>
        </View>
      </Swiper>

     
    </View>
  );

  return (
    <FlatList
      data={IMAGE_CARD_DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      horizontal
      contentContainerStyle={styles.listContainer}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 10,
  },
  cardContainer: {
    height: 170,
    width: 150,
    marginRight: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
  wrapper: {
    flex: 1,
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    backgroundColor: '#FFF',
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  activeDot: {
    backgroundColor: '#FF0000',  
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
    marginTop: 5,
  },
});

export default ImageCardList;
