import React, { useState, useRef } from 'react';
import { FlatList, StyleSheet, View, Image, Text, Dimensions, TouchableOpacity, ScrollView, StyleProp, ViewStyle } from 'react-native';
import { IMAGES, screenHeight, SCREENS, screenWidth } from '../../constants';
import { navigate } from '../../navigation/RootNavigation';
import { TrackSlidesProps } from './ImageCardList';
import { Artist } from '../../redux/slice/Home/homeSlice';
import { Typography } from '../../components/atoms';

const { width } = Dimensions.get('window');

const ARTIST_DATA = [
  { id: '1', name: 'Gul Panra' },
  { id: '2', name: 'Laila Khan' },
  { id: '3', name: 'Laila Khan' },
  { id: '4', name: 'Amjad Khan' },
  { id: '5', name: 'Sara Khan' },
];
export interface ArtistSlidesProps {
  cardStyle?: StyleProp<ViewStyle>;
  customImages: Artist[];
}

const ArtistList: React.FC<ArtistSlidesProps> = ({
  cardStyle,
  customImages
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const onScroll = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / width);
    setActiveIndex(index);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {
          customImages.map((i) => (
            <TouchableOpacity onPress={() => navigate(SCREENS.ARTIST)} style={styles.artistItemContainer}>
              <View style={styles.imageContainer}>
                <Image source={i?.image !== null ? { uri: i.image } : IMAGES.userImg} style={styles.artistImage} />
              </View>
              <Typography style={styles.artistName}textType='bold' >
                {i?.name}
              </Typography>
            </TouchableOpacity>
          ))
        }
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  listContainer: {
    paddingVertical: 10,
  },
  artistItemContainer: {
    marginRight: 10,
  },
  artistItem: {
    borderRadius: 10,
    alignItems: 'center',
  },
  artistImage: {
    width: "100%", // Image fully covers the container width
    height: "100%", // Image fully covers the container height
    resizeMode: "cover", // Ensures aspect ratio consistency
  },
  artistName: {
    marginTop: 5,
    fontSize: 12,
    textAlign: 'center',
    color: '#fff',
  },
  dotsContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  imageContainer: {
    width: screenWidth(40), // Fixed width
    height: screenHeight(15), // Fixed height
    borderRadius: 10,
    overflow: "hidden", // Ensures image stays within the bounds
    // backgroundColor: "#f0f0f0", // Add a background color for better UX
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#fff',
  },
  inactiveDot: {
    backgroundColor: '#888',
  },
});

export default ArtistList;
