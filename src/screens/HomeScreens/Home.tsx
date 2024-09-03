import {
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  Alert,
  Modal,
  Platform,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { COLORS, FONTS, FONTSIZE, IMAGES } from "../../constants";
import { Typography } from "../../components/atoms/Typography";
import { commonStyles } from "../../globalStyle";
import { fbPostData } from "../../globalStyle/dummyData";
import { navigate } from "../../navigation/RootNavigation";
import { Button } from "../../components/atoms/Button";
import { View } from "react-native-ui-lib";
import { Header } from "../../components/atoms";
import Swiper from "react-native-swiper";

const Home = () => {
  const [data, setData] = useState([]);
  return (
    <SafeAreaContainer safeArea={false}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, paddingHorizontal: 20 }}
      >
        <Header titleText="Home" />
        <View>
          <View flex height={350}>
            <Swiper
              showsButtons={true}
              prevButton={
                <Text style={{ color: "#fff", fontSize: 60 }}>‹</Text>
              }
              nextButton={
                <Text style={{ color: "#fff", fontSize: 60 }}>›</Text>
              }
            >
              {SLIDER.map((i) => {
                return (
                  <View style={styles.slide}>
                    <Image
                      source={i.image}
                      style={{
                        width: "50%",
                        height: undefined,
                        aspectRatio: 1,
                      }}
                      resizeMode="contain"
                    />
                  </View>
                );
              })}
            </Swiper>
          </View>
          <Typography size={20} align="center">
            Top Songs
          </Typography>
        </View>
      </ScrollView>
    </SafeAreaContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: Platform.OS == "ios" ? 60 : 30,
  },
  slide: {
    width: "100%",
    justifyContent: "center",
    height: 300,
    alignItems: "center",
  },
});

const SLIDER = [
  { id: 1, image: IMAGES.song1 },
  { id: 2, image: IMAGES.song2 },
  { id: 3, image: IMAGES.song3 },
];

export default Home;
