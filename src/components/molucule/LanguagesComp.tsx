import React from "react";
import { FlatList, StyleSheet, Image, Text, Dimensions } from "react-native";
import { IMAGES } from "../../constants";
import { View } from "react-native-ui-lib";

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

export const LanguagesComp = () => {
  const renderItem = ({ item }: any) => (
    <View style={styles.artistItemContainer}>
      <View style={styles.artistItem}>
        <Image source={IMAGES.languageImg} style={styles.artistImage} />
      </View>
      <Text style={styles.artistName}>{item.name}</Text>
    </View>
  );

  return (
    <FlatList
      data={ARTIST_DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={3}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 0,
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
