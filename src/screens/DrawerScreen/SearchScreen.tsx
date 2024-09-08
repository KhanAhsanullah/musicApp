import React, { useState } from "react";
import { Image, ScrollView, StyleSheet } from "react-native";
import { TouchableOpacity, View } from "react-native-ui-lib";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { Header, Typography } from "../../components/atoms";
import { useNavigation } from "@react-navigation/native";

const SearchScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaContainer safeArea={false}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <Header titleText="Search" onPressLeft={() => navigation?.toggleDrawer()}/>
  
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

export default SearchScreen;
