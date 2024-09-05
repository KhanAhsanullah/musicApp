import React from 'react';
import { FlatList, StyleSheet, View, Image, Text } from 'react-native';
import { IMAGES } from '../../constants';

const ARTIST_DATA = [
  { id: '1', name: 'Gul Panra' },
  { id: '2', name: 'Laila Khan' },
  { id: '3', name: 'Zeeshan Khan' },
];

const ArtistList = () => {
  const renderItem = ({ item }:any) => (
    <View style={styles.artistItem}>
      <Image source={IMAGES.userImg} style={styles.artistImage} />
      <Text  style={styles.artistName}>{item.name}</Text>
    </View>
  );

  return (
    <FlatList
      data={ARTIST_DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      horizontal
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 10,
  },
  artistItem: {
    backgroundColor:'#2B2B2B',
    marginRight: 20,
    borderWidth:1,
    borderRadius:10,
    justifyContent:"center",
    alignItems:'center',
    paddingTop:10,
    width:110,
    height:110,
  },
  artistImage: {
    width: 50,
    height: 50,
    backgroundColor: '#ccc',
    borderRadius: 25,
  },
  artistName: {
    marginTop: 5,
    fontSize: 14,
    textAlign: 'center',
    color:'#fff'
  },
});

export default ArtistList;
