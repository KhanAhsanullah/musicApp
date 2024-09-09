import React, { useState } from "react";
import { Text, View } from "react-native-ui-lib";
import { Image, ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { COLORS, IMAGES } from "../../constants";
import { AudioCard } from "../atoms/AudioCard";
import Accordion from "react-native-collapsible/Accordion";
import LinearGradient from "react-native-linear-gradient";

export const AudioScreen = () => {
  const CONTENT = [
    {
      title: "My Playlist",
    },
    {
      title: "Favourite Artist",
    },
    {
      title: "Favourite Artist",
    },
  ];

  const [activeSection, setActiveSection] = useState(null);

  const renderHeader = (section, _, isActive) => {
    return (
      // <LinearGradient
      // style={[styles.header]}
      //       colors={[ "#888888"]}
      //       start={{ x: 1, y: 0 }}
      //       end={{ x: 0, y: 0 }}
      //     >
<View style={[styles.header, isActive && styles.active]}> 
        {/* <View style={styles.headerBlur} /> */}
        <Text style={styles.headerText}>{section.title}</Text>
        <Image
          source={IMAGES.dropdown}
          style={styles.arrowIcon}
          resizeMode="contain"
        />
      </View>
      // </LinearGradient>
    );
  };

  const renderContent = (section: any, _: any, isActive: any) => {
    return (
      <View style={[styles.content, styles.activeContent]}>
        {CONTENT.map((i) => {
          return <AudioCard />;
        })}
      </View>
    );
  };

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <SafeAreaContainer safeArea={false}>
      <Accordion
        sections={CONTENT}
        activeSections={[activeSection]}
        touchableComponent={TouchableOpacity}
        expandMultiple={false}
        renderHeader={renderHeader}
        renderContent={renderContent}
        // duration={400}
        onChange={(sections) => toggleSection(sections[0])}
      />
    </SafeAreaContainer>
  );
};

const styles = StyleSheet.create({
  header: {
    position: "relative",
    backgroundColor: "#888888",
    padding: 20,
    marginBottom: 20,
    bottom: -20,
    zIndex: 999,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden", 
    opacity:0.6
  },
  headerBlur: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    // blurRadius: 10,

  },
  headerText: {
    fontSize: 16,
    width: "80%",
    fontWeight: "500",
    color: "white",
  },
  content: {
    zIndex: -1,
    borderRadius: 5,
    borderColor: "#2B2B2B",
    borderWidth: 1,
  },
  arrowIcon: {
    width: 12,
    height: 12,
  },
  active: {
    color: "black",
  },
  activeContent: {
    backgroundColor: "#2B2B2B",
    opacity:0.9
  },
});
