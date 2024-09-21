// import React, { useState } from "react";
// import {  Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
// import { View } from "react-native-ui-lib";
// import SafeAreaContainer from "../../containers/SafeAreaContainer";
// import { Header, Typography } from "../../components/atoms";
// import { COLORS, IMAGES } from "../../constants";
// import { useNavigation } from "@react-navigation/native";
// import { LanguagesComp } from "../../components/molucule/LanguagesComp";

// const SearchSCreen = () => {
//   const navigation = useNavigation();
//   return (
//     <SafeAreaContainer safeArea={false}>
//       <View marginT-30 paddingH-10 backgroundColor={COLORS.MEHRON}>
//         <Header onPressLeft={() => navigation?.toggleDrawer()} />
//       </View>
//       <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
//         <Typography align="center" size={20}>
//           Search
//         </Typography>
  
//       </ScrollView>
//       <TouchableOpacity style={{ marginHorizontal:3,bottom:-10 }}>
//         <Image
//           source={IMAGES.footer}
//           style={{ height: 80, width: "100%" }}
//           resizeMode="contain"
//         />
//       </TouchableOpacity>
//     </SafeAreaContainer>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 20,
//   },
// });

// export default SearchSCreen;


import React, { useState } from "react";
import { Image, ImageBackground, ScrollView, StyleSheet } from "react-native";
import { TouchableOpacity, View } from "react-native-ui-lib";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { Header, Typography } from "../../components/atoms";
import Slider from "../HomeScreens/Slider";
import SectionTitle from "../HomeScreens/SectionTitle";
import ImageCardList from "../HomeScreens/ImageCardList";
import ArtistList from "../HomeScreens/ArtistList";
import SongCard from "../HomeScreens/SongList";
import { COLORS, IMAGES, SCREENS } from "../../constants";
import { AudioScreen } from "../../components/molucule/AudioScreen";
import { useNavigation } from "@react-navigation/native";
import { VideoScreen } from "../../components/molucule/VideoScreen";
import { MovieScreen } from "../../components/molucule/MovieScreen";
import TabList from "../HomeScreens/TabList";
import { FooterItem } from "../../components/atoms/FooterItem";

const Home = () => {
  const [activeTab, setActiveTab] = useState(0);
  const navigation = useNavigation();
  const [play, setPlay] = useState(true);


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
          <TouchableOpacity onPress={()=>setPlay(!play)}>
            <Image
                source={!play ? IMAGES.play : IMAGES.pause}
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
                  // onPlay={handlePlay}
                  // onDownload={handleDownload}
                  // onLike={handleLike}
                  // onMore={handleMore}
                />
              );
            })}
          </View>
          <HitMusic />
         
          <View marginV-10>
            <SectionTitle title="Top Artists" />
          </View>
          <ArtistList />


          <View marginV-10>
            <SectionTitle title="Video Songs" />
          </View>

          <ImageCardList
            cardWidth={130}
            cardHeight={100}
            cardStyle={{margin:20}}
            customImages={IMAGES.cameraImgL}
          />
         
          <View marginV-10>
            <SectionTitle title="Trending Songs" />
          </View>
          <ImageCardList />
          <View marginV-10>
            <SectionTitle title="Our Recommendation" />
          </View>
          <View marginB-50>
          <ImageCardList />
          </View>
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
