import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { View } from "react-native-ui-lib";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { Header, Typography } from "../../components/atoms";
import { COLORS, IMAGES } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import { LanguagesComp } from "../../components/molucule/LanguagesComp";
import ArtistList from "../HomeScreens/ArtistList";
import SectionTitle from "../HomeScreens/SectionTitle";
import { FooterItem } from "../../components/atoms/FooterItem";

const Language = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaContainer safeArea={false}>
      <View marginT-30 paddingH-10 backgroundColor={COLORS.MEHRON}>
        <Header onPressLeft={() => navigation?.toggleDrawer()} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <Typography align="center" size={20}>
          Top Artist
        </Typography>
        <ArtistList />

        <View marginV-10>
            <SectionTitle title="Urdu" />
          </View>
          <ArtistList />

          <View marginV-10>
            <SectionTitle title="Pashto" />
          </View>
          <ArtistList />
      </ScrollView>
      <FooterItem />
    </SafeAreaContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});

export default Language;
