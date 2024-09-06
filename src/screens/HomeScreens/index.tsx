import React, { useState } from "react";
import { Image, ImageBackground, ScrollView, StyleSheet } from "react-native";
import { TouchableOpacity, View } from "react-native-ui-lib";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { Header, Typography } from "../../components/atoms";
import Slider from "./Slider";
import SectionTitle from "./SectionTitle";
import SongList from "./SongList";
import ImageCardList from "./ImageCardList";
import ArtistList from "./ArtistList";
import FooterPlayer from "./FooterPlayer";
import SongCard from "./SongList";
import { COLORS, IMAGES, SCREENS } from "../../constants";
import { AudioScreen } from "../../components/molucule/AudioScreen";
import { VideoScren } from "../../components/molucule/VideoScreen";
import TabList from "./TabList";
import { navigate } from "../../navigation/RootNavigation";
import { useDrawerStatus } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const [activeTab, setActiveTab] = useState(0);
  const navigation = useNavigation();

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
  const TOP_SONGS = [{ id: 1 }, { id: 2 }, { id: 3 }];
  const HitMusic = () => {
    return (
      <View row>
        <Image
          source={IMAGES.cameraCapture}
          style={{ width: 150, height: 150 }}
          resizeMode="cover"
        />
        <View marginL-10 marginT-10>
          <Typography size={14}>Top 10 Hits</Typography>
          <Typography size={20}>Trending Music</Typography>
          <TouchableOpacity>
            <Image
              source={IMAGES.play}
              style={{ width: 50, height: 50 }}
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  const renderTab = () => {
    switch (activeTab) {
      case 0:
        return (
          <AudioScreen
            onSubmit={() => {
              setActiveTab(1);
              navigate("Login");
            }}
          />
        );

      case 1:
        return (
          <VideoScren
            onSubmit={() => {
              setActiveTab(2);
            }}
          />
        );

      case 2:
        return (
          <VideoScren
            onSubmit={() => {
              setActiveTab(3);
            }}
          />
        );

      default:
        break;
    }
  };
  return (
    <SafeAreaContainer safeArea={false} >
       <View marginT-40 paddingH-10 backgroundColor={COLORS.MEHRON}>
        <Header
          titleText="Music APP"
          onPressLeft={() => navigation?.toggleDrawer()}
        />
        </View>
      <View style={styles.container}>
       
        <ScrollView showsVerticalScrollIndicator={false} >
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
            <SectionTitle title="New Releases" />
          </View>
          <ImageCardList />
          <View marginV-10>
            <SectionTitle title="Video Songs" />
          </View>
          <ImageCardList cardHeight={100} cardWidth={200} />
          <View marginV-10>
            <SectionTitle title="Top Artists" />
          </View>
          <ArtistList />
          <View marginV-10>
            <SectionTitle title="Trending Songs" />
          </View>
          <ImageCardList />
          <View marginV-10>
            <SectionTitle title="Pick Your Mood" />
          </View>
          <ImageCardList />
          {/* <Image
            source={IMAGES.dots}
            style={{ height: 10, width: 60, alignSelf: "center" }}
            resizeMode="cover"
          /> */}
        </ScrollView>
      </View>

      <TouchableOpacity style={{ marginVertical: 5 }}>
        <Image
          source={IMAGES.footer}
          style={{ height: 80, width: "100%" }}
          resizeMode="cover"
        />
      </TouchableOpacity>
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
    backgroundColor: COLORS.BLACK, // Optional: add background color to footer
  },
});

export default Home;
