import React, { useState } from "react";
import { Image, ScrollView, StyleSheet } from "react-native";
import { TouchableOpacity, View } from "react-native-ui-lib";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { Header, Typography } from "../../components/atoms";
import { COLORS, IMAGES } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import TabList from "../HomeScreens/TabList";
import { AudioScreen } from "../../components/molucule/AudioScreen";
import { VideoScreen } from "../../components/molucule/VideoScreen";
import { MovieScreen } from "../../components/molucule/MovieScreen";
import LinearGradient from "react-native-linear-gradient";
import { FooterItem } from "../../components/atoms/FooterItem";

const Library = () => {
  const [activeTab, setActiveTab] = useState(0);
  const navigation = useNavigation();
  const renderTab = () => {
    switch (activeTab) {
      case 0:
        return (
          <AudioScreen
            onSubmit={() => {
              setActiveTab(1);
            }}
          />
        );

      case 1:
        return (
          <VideoScreen
        
            onSubmit={() => {
              setActiveTab(2);
            }}
          />
        );

      case 2:
        return (
          <MovieScreen
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
      <View marginT-30 paddingH-10 backgroundColor={COLORS.MEHRON}>
        <Header onPressLeft={() => navigation?.toggleDrawer()} />
      </View>
      {/* <LinearGradient
            style={{ borderRadius: 0,flex:1 }}
            colors={["#CF0056", "#600D62"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          > */}
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <Typography align="center" size={20}>
          My Library
        </Typography>
        <View center marginV-20>
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
        <View>{renderTab()}</View>
      </ScrollView>
      {/* </LinearGradient> */}
     <FooterItem />
    </SafeAreaContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
});

export default Library;
