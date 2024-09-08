import React, { useState, useRef } from 'react';
import { FlatList, StyleSheet, View, Image, Text, Dimensions } from 'react-native';
import { IMAGES } from '../../constants';

const { width } = Dimensions.get('window');

const ARTIST_DATA = [
  { id: '1', name: 'Gul Panra' },
  { id: '2', name: 'Laila Khan' },
  { id: '3', name: 'Laila Khan' },
  { id: '4', name: 'Amjad Khan' },
  { id: '5', name: 'Sara Khan' },
];

const ArtistList = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  
  const onScroll = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / width); 
    setActiveIndex(index);
  };

  const renderItem = ({ item }: any) => (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>

    <View>
      <View style={styles.artistItem}>
        <Image source={IMAGES.userImg} style={styles.artistImage} />
      </View>
     
    </View>
     <Text style={[styles.artistName, { marginLeft:-10, alignSelf: 'center' }]}>
     {item.name}
   </Text>
  </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={ARTIST_DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16} 
        contentContainerStyle={styles.listContainer}
      />

      {/* Pagination Dots */}
      <View style={styles.dotsContainer}>
        {ARTIST_DATA.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              activeIndex === index ? styles.activeDot : styles.inactiveDot, // Apply styles based on activeIndex
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  listContainer: {
    // paddingVertical: 10,
  },
  artistItem: {
    backgroundColor: '#2B2B2B',
    marginRight: 20,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    width: width * 0.275, 
    height: 100,
  },
  artistImage: {
    width: 50,
    height: 80,
    backgroundColor: '#ccc',
    borderRadius: 25,
  },
  artistName: {
    marginTop: 5,
    fontSize: 12,
    textAlign: 'center',
    color: '#fff',
    alignSelf: 'center',
  },
  dotsContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#fff', // Active dot color
  },
  inactiveDot: {
    backgroundColor: '#888', // Inactive dot color
  },
});

export default ArtistList;
