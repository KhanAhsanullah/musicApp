import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  Alert,
  Modal,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import {
  COLORS,
  coustomHeader,
  FONTS,
  FONTSIZE,
  IMAGES,
  SCREENS,
} from "../../constants";
import { Typography } from "../../components/atoms/Typography";
import { commonStyles } from "../../globalStyle";

import Icon from "react-native-vector-icons/FontAwesome";
import IconEntypo from "react-native-vector-icons/Entypo";
import IconAnt from "react-native-vector-icons/AntDesign";
import FeatherIcon from "react-native-vector-icons/Feather";
import IconM from "react-native-vector-icons/MaterialCommunityIcons";
import IconF from "react-native-vector-icons/Fontisto";
import AdIcon from "react-native-vector-icons/AntDesign";

import Lottie from "lottie-react-native";
import { fbPostData } from "../../globalStyle/dummyData";
import { navigate } from "../../navigation/RootNavigation";
import { CommitCompenent } from "../../components/atoms/CommitCompenent";
import { Button } from "../../components/atoms/Button";


const Home = () => {
  const [data, setData] = useState([]);
  const [userLike, setUserLike] = useState(true);
  const [isFocused, setIsFocused] = useState();
  const animationRef = useRef < Lottie > null;
  const [modalVisible, setModalVisible] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setModalVisible(true);
  //   }, 500);
  // }, []);

  useEffect(() => {
    setData(fbPostData);
  }, []);
  const socialIcon = (item) => {
    return (
      <View style={[styles.commentView, { flexDirection: "row", flex: 1 }]}>
        <TouchableOpacity
          onPress={() => setUserLike(!userLike)}
          style={[
            // commonStyles.flexRowAlignCenter,
            { marginRight: 20, flexDirection: "row", alignItems: "center" },
          ]}
        >
          <IconAnt
            name="like2"
            color={userLike ? COLORS.BLACK : "#3a75d8"}
            size={12}
            style={{ marginRight: 5 }}
          />
          <Typography size={12} color={userLike ? COLORS.BLACK : "#3a75d8"}>
            Like
          </Typography>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            // commonStyles.flexRowAlignCenter,
            { marginRight: 20, flexDirection: "row", alignItems: "center" },
          ]}
        >
          <FeatherIcon
            name="message-circle"
            color="#ecbd01"
            size={12}
            style={{ marginRight: 5 }}
          />
          <Typography size={12} color="#ecbd01">
            Comments
          </Typography>
        </TouchableOpacity>

        <TouchableOpacity
          // onPress={() => setModalComment(!modalComment)}
          style={[
            // commonStyles.flexRowAlignCenter,
            { marginRight: 20, flexDirection: "row", alignItems: "center" },
          ]}
        >
          <FeatherIcon
            name="gift"
            color={"#49bf97"}
            size={12}
            style={{ marginRight: 5 }}
          />
          <Typography size={12} color={"#49bf97"}>
            Gift
          </Typography>
        </TouchableOpacity>

        <TouchableOpacity
          // onPress={() => setModalComment(!modalComment)}
          style={[
            commonStyles.flexRowAlignCenter,
            { flexDirection: "row", alignItems: "center" },
          ]}
        >
          <IconM
            name="share-outline"
            color={"#3f7cd7"}
            size={12}
            style={{ marginRight: 5 }}
          />
          <Typography size={12} color="#3f7cd7">
            Share
          </Typography>
        </TouchableOpacity>
      </View>
    );
  };
  const HomeCard = ({ item }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          navigate(SCREENS.FAVORITE, {
            showCard: true,
          });
        }}
        style={[commonStyles.cardWithShadow, { paddingHorizontal: 20 }]}
      >
        <View style={[commonStyles.flexJustRowAlign, { marginVertical: 10 }]}>
          <View style={commonStyles.flexRowAlign}>
            <Image
              source={item.profile_Image}
              style={{ width: 40, height: 40, borderRadius: 20 }}
              resizeMode="cover"
            />
            <View style={{ marginLeft: 10 }}>
              <Typography size={FONTSIZE.S} style={{ flex: 0.5 }}>
                {item.profile_name}
              </Typography>
              <View style={commonStyles.flexRowAlign}>
                <IconEntypo
                  name="stopwatch"
                  color={COLORS.PRIMARY}
                  style={{}}
                  size={12}
                />
                <Typography
                  textType={FONTS.PoppinsSemiBold}
                  size={FONTSIZE.S}
                  style={{ marginLeft: 10 }}
                >
                  {item.duration}
                </Typography>
              </View>
            </View>
            <Lottie
              ref={animationRef}
              source={require("../../components/Animation/confirmation.json")}
              autoPlay
              style={{ height: 50, width: 60, alignSelf: "center" }}
            />
          </View>
          <IconM name="dots-horizontal" size={20} />
        </View>
        {/* </View> */}
        <View style={commonStyles.lineBar} />
        <Typography
          size={14}
          textType={FONTS.PoppinsSemiBold}
          style={{ marginVertical: 10 }}
        >
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod
        </Typography>
        <View style={{ marginVertical: 20 }}>
          <Image
            source={item.postImage}
            style={{ width: "100%", height: 200, borderRadius: 10 }}
            resizeMode="cover"
          />
        </View>
        <View
          style={[
            commonStyles.flexJustRowAlign,
            { marginVertical: 10, flex: 1 },
          ]}
        >
          <View style={commonStyles.flexRowAlign}>
            <Icon name="heart" size={20} color={"red"} />
            <Typography size={12} style={{ marginLeft: 10 }}>
              25 Likes, 4 Love
            </Typography>
          </View>

          <View style={commonStyles.flexRowAlign}>
            <Typography size={12} style={{ marginLeft: 10 }}>
              23 Comments
            </Typography>

            <Typography size={12} style={{ marginLeft: 5 }}>
              . 2 Shares
            </Typography>
          </View>
        </View>

        <View style={[commonStyles.lineBar, { marginVertical: 10 }]} />
        {socialIcon(item)}
        <View style={[commonStyles.lineBar, { marginVertical: 10 }]} />
        <TouchableOpacity onPress={() => navigate(SCREENS.POST_DETAIL)}>
          <CommitCompenent />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaContainer safeArea={false}>
      {coustomHeader()}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, paddingHorizontal: 20 }}
      >
        <TouchableOpacity
          onPress={() => {
            navigate(SCREENS.FOLLOWER_SCREEN);
          }}
          style={{
            marginVertical: 30,
            borderRadius: 10,
            backgroundColor: COLORS.HALF_WHITE,
            paddingHorizontal: 20,
            flexDirection: "row",
            paddingVertical: 15,
          }}
        >
          <View
            style={{
              flex: 0.17,
              justifyContent: "center",
            }}
          >
            <AdIcon name={"search1"} size={18} color={COLORS.BLACK} />
          </View>
          <Typography
            textType={FONTS.PoppinsRegular}
            size={FONTSIZE.XS}
            color={COLORS.SECONDRY}
          >
            Search here
          </Typography>
          {/* <SerachComponent /> */}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigate(SCREENS.POST_SCREEN)}
          style={[commonStyles.cardWithShadow, [styles.headerView]]}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image source={IMAGES.avatar} style={{ width: 40, height: 40 }} />
            <Typography
              textType={FONTS.PoppinsSemiBold}
              style={{ marginLeft: 10 }}
            >
              Share something?
            </Typography>
          </View>
          <Icon name={"camera"} size={20} />
        </TouchableOpacity>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={HomeCard}
          keyExtractor={(item) => item.id}
        />
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <TouchableOpacity
                  onPress={() => setModalVisible(false)}
                  style={{ alignSelf: "flex-end" }}
                >
                  <IconF name="close-a" size={16} />
                </TouchableOpacity>

                <Lottie
                  useRef={animationRef}
                  source={require("../../components/Animation/SystemLottie.json")}
                  autoPlay
                  style={{ height: 100, width: 100, alignSelf: "center" }}
                />

                <Typography
                  size={20}
                  textType="bold"
                  style={{ marginVertical: 0 }}
                >
                  Survey TIme!
                </Typography>
                <Typography
                  size={20}
                  textType="bold"
                  style={{ marginVertical: 0 }}
                >
                  Let's Celebrate You!
                </Typography>
                <Typography
                  align="center"
                  size={12}
                  style={{ marginVertical: 0 }}
                >
                  Let connections know what makes your heart sing!
                </Typography>

                <View
                  style={[
                    commonStyles.flexJustRowAlign,
                    { marginVertical: 20, paddingHorizontal: 10 },
                  ]}
                >
                  <View style={commonStyles.flexJustRowAlign}>
                    <IconF name="heart" size={16} color={COLORS.PRIMARY} />
                    <Typography
                      align="center"
                      size={12}
                      numberOfLines={3}
                      style={{ marginHorizontal: 10 }}
                    >
                      All of your favorite things right here in one spot. All of
                      <Typography color={COLORS.PRIMARY}>
                        {" "}
                        Authentic. Intentional. Unapologetically
                      </Typography>{" "}
                      YOU
                    </Typography>
                    <IconF name="heart" size={16} color={COLORS.PRIMARY} />
                  </View>
                </View>
                <Button
                  label="All About Me"
                  style={{ width: 300 }}
                  onPress={() => {
                    setModalVisible(false);
                    navigate(SCREENS.MY_FAV);
                  }}
                />
              </View>
            </View>
          </Modal>
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
  headerView: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    borderRadius: 10,
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: FONTSIZE.L,
    color: COLORS.black,
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
