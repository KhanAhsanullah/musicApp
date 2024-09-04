import React from 'react';
import { Image, ScrollView, StyleSheet } from 'react-native';
import { TouchableOpacity, View } from 'react-native-ui-lib';
import SafeAreaContainer from '../../containers/SafeAreaContainer';
import { Header, Typography } from '../../components/atoms';
import Slider from './Slider';
import SectionTitle from './SectionTitle';
import SongList from './SongList';
import ImageCardList from './ImageCardList';
import ArtistList from './ArtistList';
import FooterPlayer from './FooterPlayer';
import SongCard from './SongList';
import { IMAGES } from '../../constants';


const Home = () => {
  const handlePlay = () => {
    // Play song
  };

  const handleDownload = () => {
    // Download song
  };

  const handleLike = () => {
    // Like song
  };

  const handleMore = () => {
    // More options
  };
  const TOP_SONGS = [
    { id: 1 },
    { id: 2 },
    { id: 3 }
  ]
  const HitMusic = () => {
    return (
      <View row>
        <Image
          source={IMAGES.cameraCapture}
          style={{ width: 150, height: 150 }}
          resizeMode='cover'
        />
        <View marginL-10 marginT-10>
          <Typography size={14}>Top 10 Hits</Typography>
          <Typography size={20}>Trending Music</Typography>
          <TouchableOpacity>
            <Image
              source={IMAGES.play}
              style={{ width: 50, height: 50 }}
              resizeMode='cover'
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  return (
    <SafeAreaContainer safeArea={false}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <Header titleText="Music APP" />
        <Slider />
        <SectionTitle title="Top Songs" />


        {
          TOP_SONGS.map((i) => {
            return (
              <SongCard
                song="Wo Larki Khawab Mere Dekhti Hai"
                artist="Zeeshan Khan Rokhri"
                duration="05:23"
                onPlay={handlePlay}
                onDownload={handleDownload}
                onLike={handleLike}
                onMore={handleMore}
              />
            )
          })
        }

        <HitMusic />
        <SectionTitle title="New Releases" />
        <ImageCardList />
        <Image
            source={IMAGES.dots} 
            style={{ height: 10, width: 60 ,alignSelf:"center"}}
            resizeMode="cover"
          />
        <SectionTitle title="Video Songs" />
        <ImageCardList  cardHeight={90} cardWidth={190}/>
        <Image
            source={IMAGES.dots} 
            style={{ height: 10, width: 60 ,alignSelf:"center"}}
            resizeMode="cover"
          />
        <SectionTitle title="Top Artists" />
        <ArtistList />
        <Image
            source={IMAGES.dots} 
            style={{ height: 10, width: 60 ,alignSelf:"center"}}
            resizeMode="cover"
          />
        <SectionTitle title="Trending Songs" />
        <ImageCardList />
        <Image
            source={IMAGES.dots} 
            style={{ height: 10, width: 60 ,alignSelf:"center"}}
            resizeMode="cover"
          />
        <SectionTitle title="Pick Your Mood" />
        <ImageCardList />
        <Image
            source={IMAGES.dots} 
            style={{ height: 10, width: 60 ,alignSelf:"center"}}
            resizeMode="cover"
          />
        <FooterPlayer />
      </ScrollView>
    </SafeAreaContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});

export default Home;

