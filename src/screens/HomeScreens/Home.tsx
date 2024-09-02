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
import { COLORS, FONTS, FONTSIZE } from "../../constants";
import { Typography } from "../../components/atoms/Typography";
import { commonStyles } from "../../globalStyle";
import { fbPostData } from "../../globalStyle/dummyData";
import { navigate } from "../../navigation/RootNavigation";
import { Button } from "../../components/atoms/Button";
import { View } from "react-native-ui-lib";
import { Header } from "../../components/atoms";

const Home = () => {
  const [data, setData] = useState([]);
  return (
    <SafeAreaContainer safeArea={false}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, paddingHorizontal: 20 }}
      >
        <Header titleText="Home" />
      </ScrollView>
    </SafeAreaContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: Platform.OS == "ios" ? 60 : 30,
  },
  headerView: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    borderRadius: 10,
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: FONTSIZE.L,
    color: COLORS.BLACK,
    alignSelf: "center",
  },
  iconStyle: {
    width: 18,
    height: 18,
    color: COLORS.PRIMARY,
  },
  dotStyle: {
    color: "red",
    position: "absolute",
    top: -5,
    right: -5,
    zIndex: 1000,
  },
  mainView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
  },
  centerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 22,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },

  // Modal Style

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
});

export default Home;
