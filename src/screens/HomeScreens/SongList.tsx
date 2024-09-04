import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { IMAGES } from '../../constants';

const SongCard = ({ song, artist, duration, onPlay, onDownload, onLike, onMore }: any) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <TouchableOpacity onPress={onPlay}>
          <Image
            source={IMAGES.play}
            style={styles.icon}
          />
        </TouchableOpacity>
        <Image style={styles.image} source={IMAGES.cameraCapture} />
        <View style={styles.info}>
          <Text style={styles.songTitle}>{song}</Text>
          <Text style={styles.artistName}>{artist}</Text>
        </View>
        <View style={{alignItems:"center"}}>
          <TouchableOpacity onPress={() => setExpanded(!expanded)}>
            <Image
              source={expanded
                ? IMAGES.dropdown
                : IMAGES.dropdown}
              style={{width:20,height:20}}
            />
          </TouchableOpacity>
          <Text style={styles.duration}>{duration}</Text>

        </View>
      </View>
      {expanded && (
        <View style={styles.actions}>
          <TouchableOpacity onPress={onDownload}>
            <Image
              source={IMAGES.download}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={onLike}>
            <Image
              source={IMAGES.heart}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={onMore}>
            <Image
              source={IMAGES.dotsVertical}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1A1A1A',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    borderWidth:1,
    borderColor:'#2B2B2B'
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
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
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  artistName: {
    color: '#AAAAAA',
    fontSize: 14,
  },
  duration: {
    color: '#AAAAAA',
    fontSize: 14,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  icon: {
    width: 24,  // Adjust the size based on your icon dimensions
    height: 24,
  },
});

export default SongCard;


