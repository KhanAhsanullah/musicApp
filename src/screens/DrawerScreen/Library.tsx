import React, { useState } from "react";
import { Image, ScrollView, StyleSheet } from "react-native";
import { TouchableOpacity, View } from "react-native-ui-lib";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { Header, Typography } from "../../components/atoms";
import Slider from "../HomeScreens/Slider";
import SectionTitle from "../HomeScreens/SectionTitle";
import SongList from "../HomeScreens/SongList";
import ImageCardList from "../HomeScreens/ImageCardList";
import ArtistList from "../HomeScreens/ArtistList";
import FooterPlayer from "../HomeScreens/FooterPlayer";
import SongCard from "../HomeScreens/SongList";
import { IMAGES, SCREENS } from "../../constants";
import { AudioScreen } from "../../components/molucule/AudioScreen";
import { VideoScren } from "../../components/molucule/VideoScreen";
import TabList from "../HomeScreens/TabList";
import { navigate } from "../../navigation/RootNavigation";
import { useNavigation } from "@react-navigation/native";

const Library = () => {
  const [activeTab, setActiveTab] = useState(0);
  const navigation = useNavigation();

  return (
    <SafeAreaContainer safeArea={false}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <Header
          titleText="My Library"
          onPressLeft={() => navigation?.toggleDrawer()}
        />
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

export default Library;
