// import React, { useState } from "react";
// import { Image, ScrollView, StyleSheet } from "react-native";
// import { TouchableOpacity, View } from "react-native-ui-lib";
// import SafeAreaContainer from "../../containers/SafeAreaContainer";
// import { Header, Typography } from "../../components/atoms";
// import Slider from "./Slider";
// import SectionTitle from "./SectionTitle";
// import SongList from "./SongList";
// import ImageCardList from "./ImageCardList";
// import ArtistList from "./ArtistList";
// import FooterPlayer from "./FooterPlayer";
// import SongCard from "./SongList";
// import { IMAGES, SCREENS } from "../../constants";
// import { AudioScreen } from "../../components/molucule/AudioScreen";
// import { VideoScren } from "../../components/molucule/VideoScreen";
// import TabList from "./TabList";
// import { navigate } from "../../navigation/RootNavigation";
// import { useDrawerStatus } from '@react-navigation/drawer';
// import { useNavigation } from "@react-navigation/native";

// const Home = () => {
//   const [activeTab, setActiveTab] = useState(0);
//   const navigation = useNavigation()

//   const handlePlay = () => {
//     // Play song
//   };

//   const handleDownload = () => {
//     // Download song
//   };

//   const handleLike = () => {
//     // Like song
//   };

//   const handleMore = () => {
//     // More options
//   };
//   const TOP_SONGS = [{ id: 1 }, { id: 2 }, { id: 3 }];
//   const HitMusic = () => {
//     return (
//       <View row>
//         <Image
//           source={IMAGES.cameraCapture}
//           style={{ width: 150, height: 150 }}
//           resizeMode="cover"
//         />
//         <View marginL-10 marginT-10>
//           <Typography size={14}>Top 10 Hits</Typography>
//           <Typography size={20}>Trending Music</Typography>
//           <TouchableOpacity>
//             <Image
//               source={IMAGES.play}
//               style={{ width: 50, height: 50 }}
//               resizeMode="cover"
//             />
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   };
//   const renderTab = () => {
//     switch (activeTab) {
//       case 0:
//         return (
//           <AudioScreen
//             onSubmit={() => {
//               setActiveTab(1)
//               navigate('Login')
//             }}
//           />
//         );

//       case 1:
//         return (
//           <VideoScren
//             onSubmit={() => {
//               setActiveTab(2);
//             }}
//           />
//         );

//       case 2:
//         return (
//           <VideoScren
//             onSubmit={() => {
//               setActiveTab(3);
//             }}
//           />
//         );

//       default:
//         break;
//     }
//   };
//   return (
//     <SafeAreaContainer safeArea={false}>
//       <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
//         <Header titleText="Music APP" onPressLeft={()=>navigation?.toggleDrawer()}/>
//         <Slider />
//         <View margin-10 center>
//           <TabList
//             data={[
//               {
//                 id: 1,
//                 label: "Audio",
         
//               },
//               {
//                 id: 2,
//                 label: "Video",
//               },
//               {
//                 id: 3,
//                 label: "Movie",
//               },
//             ]}
//             onSelect={setActiveTab}
//             selected={activeTab}
//           />
//         </View>
//         <SectionTitle title="Top Songs" />
//         {TOP_SONGS.map((i) => {
//           return (
//             <SongCard
//               song="Wo Larki Khawab Mere Dekhti Hai"
//               artist="Zeeshan Khan Rokhri"
//               duration="05:23"
//               onPlay={handlePlay}
//               onDownload={handleDownload}
//               onLike={handleLike}
//               onMore={handleMore}
//             />
//           );
//         })}

//         <HitMusic />
//         <SectionTitle title="New Releases" />
//         <ImageCardList />
//         <Image
//           source={IMAGES.dots}
//           style={{ height: 10, width: 60, alignSelf: "center" }}
//           resizeMode="cover"
//         />
//         <SectionTitle title="Video Songs" />
//         <ImageCardList cardHeight={90} cardWidth={190} />
//         <Image
//           source={IMAGES.dots}
//           style={{ height: 10, width: 60, alignSelf: "center" }}
//           resizeMode="cover"
//         />
//         <SectionTitle title="Top Artists" />
//         <ArtistList />
//         <Image
//           source={IMAGES.dots}
//           style={{ height: 10, width: 60, alignSelf: "center" }}
//           resizeMode="cover"
//         />
//         <SectionTitle title="Trending Songs" />
//         <ImageCardList />
//         <Image
//           source={IMAGES.dots}
//           style={{ height: 10, width: 60, alignSelf: "center" }}
//           resizeMode="cover"
//         />
//         <SectionTitle title="Pick Your Mood" />
//         <ImageCardList />
//         <Image
//           source={IMAGES.dots}
//           style={{ height: 10, width: 60, alignSelf: "center" }}
//           resizeMode="cover"
//         />
//         <View style={{position:'absolute',bottom:0,flex:1}}>
//         <TouchableOpacity>
//           <Image
//             source={IMAGES.footer}
//             style={{ height: 100, width: "100%" }}
//             resizeMode="contain"
//           />
//         </TouchableOpacity>
//         </View>
//         {/* <FooterPlayer /> */}
//         {/* <View marginH-20>{renderTab()}</View> */}
//       </ScrollView>
//     </SafeAreaContainer>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 20,
//   },
// });

// export default Home;



import React, { useState } from "react";
import { Image, ScrollView, StyleSheet } from "react-native";
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
import { useDrawerStatus } from '@react-navigation/drawer';
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const [activeTab, setActiveTab] = useState(0);
  const navigation = useNavigation()

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
              setActiveTab(1)
              navigate('Login')
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
    <SafeAreaContainer safeArea={false}>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header titleText="Music APP" onPressLeft={()=>navigation?.toggleDrawer()}/>
          <Slider />
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
          <SectionTitle title="Top Songs" />
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

          <HitMusic />
          <View marginV-20>
          <SectionTitle title="New Releases" />
          </View>
          <ImageCardList />
          <SectionTitle title="Video Songs" />
          <ImageCardList cardHeight={120} cardWidth={200} />
         
          <SectionTitle title="Top Artists" />
          <ArtistList />
         
          <SectionTitle title="Trending Songs" />
          <ImageCardList />
          {/* <Image
            source={IMAGES.dots}
            style={{ height: 10, width: 60, alignSelf: "center" }}
            resizeMode="cover"
          /> */}
          <SectionTitle title="Pick Your Mood" />
          <ImageCardList />
          {/* <Image
            source={IMAGES.dots}
            style={{ height: 10, width: 60, alignSelf: "center" }}
            resizeMode="cover"
          /> */}
        </ScrollView>
         
        </View>
        <TouchableOpacity>
            <Image
              source={IMAGES.footer}
              style={{ height:80, width: "100%" }}
              resizeMode='cover'
            />
          </TouchableOpacity>
    </SafeAreaContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.BLACK, // Optional: add background color to footer
  },
});

export default Home;


