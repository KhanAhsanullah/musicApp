import React, { useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Text, View } from "react-native-ui-lib";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { Header, Typography } from "../../components/atoms";
import { COLORS, IMAGES } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import { LanguagesComp } from "../../components/molucule/LanguagesComp";
const { width } = Dimensions.get("window");
const ARTIST_DATA = [
  { id: "1", name: "All" },
  { id: "2", name: "Urdu" },
  { id: "3", name: "Saraiki" },
  { id: "4", name: "Punjabi" },
  { id: "5", name: "Sindhi" },
  { id: "6", name: "Pashto" },
  { id: "7", name: "Balochi" },
];

const ViewSongs = (props: any) => {
const title = props?.route?.params?.title
  const navigation = useNavigation();
  const renderItem = ({ item }: any) => (
    <View style={styles.artistItemContainer}>
      <View style={styles.artistItem}>
        <Image source={IMAGES.cameraImgL} style={styles.artistImage} />
      </View>
      <Text style={styles.artistName}>{item.name}</Text>
    </View>
  );
  return (
    <SafeAreaContainer safeArea={false}>
      <View marginT-30 paddingH-10 backgroundColor={COLORS.MEHRON}>
        <Header onPressLeft={() => navigation?.toggleDrawer()} />
      </View>
      <View style={{}}>
        <Typography align="center" size={20}>
          {title}
        </Typography>
        <FlatList
          data={ARTIST_DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={3}
          contentContainerStyle={styles.listContainer}
        />
      </View>

      {/* <TouchableOpacity style={{ marginHorizontal: 3, bottom: -10 }}>
        <Image
          source={IMAGES.footer}
          style={{ height: 80, width: "100%" }}
          resizeMode="contain"
        />
      </TouchableOpacity> */}
    </SafeAreaContainer>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 20,
  },
  artistItemContainer: {
    marginHorizontal: 5,
    marginVertical: 10,
  },
  artistItem: {
    backgroundColor: "#2B2B2B",
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
    width: width * 0.275,
    height: 100,
  },
  artistImage: {
    width: 50,
    height: 80,
    backgroundColor: "#ccc",
    borderRadius: 25,
  },
  artistName: {
    marginTop: 5,
    fontSize: 12,
    color: "#fff",
    textAlign: "center",
  },
});

export default ViewSongs;
