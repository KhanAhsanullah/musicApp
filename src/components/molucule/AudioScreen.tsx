import React, { useState } from "react";
import { Text, View } from "react-native-ui-lib";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { commonStyles } from "../../globalStyle";
import { COLORS, IMAGES } from "../../constants";
import { AudioCard } from "../atoms/AudioCard";
import Accordion from "react-native-collapsible/Accordion";

export const AudioScreen = () => {
  const CONTENT = [
    {
      title: "My Playlist",
    },
    {
      title: 'Favourite Artist',
    },
    {
      title: 'Favourite Artist',
    },
   
  ];

  const [activeSection, setActiveSection] = useState(null);

  const renderHeader = (section, _, isActive) => {
    return (
      <View style={[styles.header, isActive && styles.active]}>
        <Text style={styles.headerText}>{section.title}</Text>
        <Image
          source={isActive ? IMAGES.dropdown : IMAGES.dropdown}
          style={styles.arrowIcon}
          resizeMode="contain"
        />
      </View>
    );
  };

  const renderContent = (section: any, _: any, isActive: any) => {
    return (
      <View style={[styles.content, isActive && styles.active]}>
           {
            CONTENT.map((i)=>{
              return(
                <AudioCard />
              )
            })
           }
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
        duration={400}
        onChange={(sections) => toggleSection(sections[0])}
      />
    </SafeAreaContainer>
  );
};

const styles = StyleSheet.create({
 
  header: {
    backgroundColor: COLORS.BORDER,
    padding: 20,
    marginBottom: 20,
    bottom:-12,
    top:20,
    zIndex: 999,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 16,
    width:"80%",
    fontWeight: '500',
    color: 'white',
  },
  content: {
    zIndex:-1,
    borderRadius: 5,
    borderColor: COLORS.BORDER,
    borderWidth: 1,
  },
  arrowIcon: {
    width: 12,
    height: 12,
  },
  active: {
    color: 'black',
  },
});
