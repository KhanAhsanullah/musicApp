import React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { View } from "react-native-ui-lib";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { Header, Typography } from "../../components/atoms";
import { COLORS, IMAGES } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import AboutVideo from "./AboutVideo";

const { width } = Dimensions.get("window");

const VideoPlay = () => {
  const navigation = useNavigation();

  // Array for social icons and their titles
  const socialData = [
    { icon: IMAGES.heartLine, title: "1 likes" },
    { icon: IMAGES.eye, title: "41 views" },
    { icon: IMAGES.share, title: "1 shares" },
    { icon: IMAGES.clock, title: "watches" },
  ];

  const QUEUE = [
    { id: 1, name: "Wo Larki Khawab \n Mere Dekhti Hai" },
    { id: 2, name: "Wo Larki Khawab \n Mere Dekhti Hai" },
    { id: 3, name: "Wo Larki Khawab \n Mere Dekhti Hai" },
    { id: 4, name: "Wo Larki Khawab \n Mere Dekhti Hai" },
    { id: 5, name: "Wo Larki Khawab \n Mere Dekhti Hai" },
    { id: 6, name: "Wo Larki Khawab \n Mere Dekhti Hai" },
  ];
  const renderItem = ({ item }: any) => (
    <View marginV-10 marginR-10>
      <View style={styles.artistItem}>
        <View
          style={{
            position: "absolute",
            right: 10,
            bottom: 5,
            borderWidth: 1,
            backgroundColor: COLORS.PRIMARY,
            borderRadius: 5,
            paddingHorizontal: 5,
          }}
        >
          <Typography size={10}>6:10</Typography>
        </View>
        <Image
          source={IMAGES.imageCont}
          style={styles.artistImage}
          resizeMode="contain"
        />
      </View>
      <Typography size={10} style={styles.artistName}>
        {item.name}
      </Typography>
      <View row center style={{ alignItems: "center" }}>
        <Image
          source={IMAGES.eye}
          style={{ width: 15, height: 15 }}
          resizeMode="contain"
        />
        <Typography size={9}> 519 views</Typography>
      </View>
    </View>
  );

  return (
    <SafeAreaContainer safeArea={false}>
      <View marginT-30 paddingH-10 backgroundColor={COLORS.MEHRON}>
        <Header onPressLeft={() => navigation?.toggleDrawer()} />
      </View>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View center width={"100%"} height={200}>
            <Image
              source={IMAGES.VideoImg}
              style={{ flex: 1 }}
              resizeMode="contain"
            />
          </View>
          <View center marginV-20>
            <Typography size={25}>Bawa Jee Sialkot</Typography>
            <Typography size={14}>Nadeem Abbas Khan Lonay Wala</Typography>
          </View>

          <View style={styles.socialBarStyle}>
            <View row style={{ alignItems: "center", gap: 10 }}>
              {socialData.map((item, index) => (
                <View row key={index} style={{ alignItems: "center", gap: 5 }}>
                  <Image
                    source={item.icon}
                    style={{ width: 15, height: 15 }}
                    resizeMode="contain"
                  />
                  <Typography size={14}>{item.title}</Typography>
                </View>
              ))}
            </View>
          </View>

          <View marginV-10>
            <AboutVideo />
          </View>

          <View spread row>
            <Typography size={18}>Queue</Typography>
            <TouchableOpacity>
              <Image
                source={IMAGES.ViewAll}
                style={{ width: 80, height: 25 }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>

          <FlatList
            data={QUEUE}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={2}
          />
        </ScrollView>
      </View>
    </SafeAreaContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  socialBarStyle: {
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 10,
    backgroundColor: COLORS.BLACK_OPACITY,
  },

  artistItem: {
    backgroundColor: "#2B2B2B",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    width: width * 0.45,
    height: 100,
  },
  artistImage: {
    width: 100,
    height: 80,
  },
  artistName: {
    marginTop: 5,
    textAlign: "center",
  },
});

export default VideoPlay;
