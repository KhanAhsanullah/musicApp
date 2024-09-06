import React, { Component, useContext, useMemo, useState } from "react";
import { StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Text, View } from "react-native-ui-lib";
import { COLORS } from "../../constants";

const TabList = (props: any) => {
  const { data = [], onSelect = () => {}, selected = 0 } = props;
  return (
    <View style={styles.tabView}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {data.map((item: any, i: any) => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.activeTabText,
              {
                backgroundColor: selected == i ? COLORS.PRIMARY : '#49001E',
                borderColor: "red",
                borderWidth: 1,
              },
            ]}
            onPress={() => {
              onSelect(i)
            }}
          >
            <Text extraSmall12 semibold color={"#fff"}>
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  tabView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // marginBottom: 10,
    height: 35,
  },
  activeTabText: {
    paddingVertical: 5,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginRight: 20,
  },
  tabText: {
    color: "#000",
  },
});

export default TabList;
