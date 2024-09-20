import React, { useState } from "react";
import { Image, ScrollView, StyleSheet } from "react-native";
import { TouchableOpacity, View } from "react-native-ui-lib";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { Header, Typography } from "../../components/atoms";
import Slider from "./Slider";
import SectionTitle from "./SectionTitle";
import ImageCardList from "./ImageCardList";
import ArtistList from "./ArtistList";
import SongCard from "./SongList";
import { COLORS, IMAGES, SCREENS } from "../../constants";
import TabList from "./TabList";
import { navigate } from "../../navigation/RootNavigation";
import { useNavigation } from "@react-navigation/native";
import { FooterItem } from "../../components/atoms/FooterItem";
import VideoCard from "./VideoCard";

const Home = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [play, setPlay] = useState(true);
  const navigation = useNavigation();

  const handlePlay = () => {
    navigate(SCREENS.AUDIO_PLAY)
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
  const TOP_SONGS = [{ id: 1 }, { id: 2 }, { id: 3 }];
  const HitMusic = () => {
    return (
      <View row>
        <Image
          source={IMAGES.cameraCapture}
          style={{ width: 150, height: 150 }}
          resizeMode="cover"
        />
            {/* <VideoPlayerComp /> */}
        <View marginL-10 marginT-10>
          <Typography size={14}>Top 10 Hits</Typography>
          <Typography size={20}>Trending Music</Typography>
          <TouchableOpacity onPress={()=>setPlay(!play)}>
            <Image
              source={play ? IMAGES.play : IMAGES.VideoImg}
              style={{ width: 50, height: 50 }}
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaContainer safeArea={false}>
      <View marginT-30 paddingH-10 backgroundColor={COLORS.MEHRON}>
        <Header onPressLeft={() => navigation?.toggleDrawer()} />
      </View>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View height={150} marginB-60 marginT-10>
            <Slider />
          </View>
          <View marginB-20 center>
            <Typography size={20} color={COLORS.WHITE}>
              Top Songs
            </Typography>
          </View>
          <View center>
            <TabList
              data={[
                {
                  id: 1,
                  label: "Audio",
                },
                {
                  id: 2,
                  label: "Video",
                },
                {
                  id: 3,
                  label: "Movie",
                },
              ]}
              onSelect={setActiveTab}
              selected={activeTab}
            />
          </View>
          <View marginV-20>
            {TOP_SONGS.map((i) => {
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
              );
            })}
          </View>
          <HitMusic />
          <View marginV-10>
            <SectionTitle title="New Releases" onPress={()=>navigate(SCREENS.VIEW,{
              title:'New Releases'
            })}/>
          </View>
          <ImageCardList
            cardWidth={120}
            cardHeight={80}
            customImages={IMAGES.imageCont}
          />
          <View marginV-10>
            <SectionTitle title="Video Songs" onPress={()=>navigate(SCREENS.VIEW_VIDEO,{
              title:'Video Songs'
            })}/>
          </View>

          <VideoCard />
          <View marginV-10>
            <SectionTitle title="Top Artists" onPress={()=>navigate(SCREENS.ARTIST)}/>
          </View>
          <ArtistList />
          <View marginV-10>
            <SectionTitle title="Trending Songs" onPress={()=>navigate(SCREENS.VIEW,{
              title:'Trending Songs'
            })}/>
          </View>
          <ImageCardList />
          <View marginV-10>
            <SectionTitle title="Pick Your Mood" onPress={()=>navigate(SCREENS.VIEW,{
              title:'Pick Your Mood'
            })}/>
          </View>
          <ImageCardList />
        </ScrollView>
      </View>

     <FooterItem />
    </SafeAreaContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.BLACK, 
  },
});

export default Home;
