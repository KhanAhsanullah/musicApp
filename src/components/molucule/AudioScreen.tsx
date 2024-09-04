import React, { useState } from "react";
import { Text, View } from "react-native-ui-lib";
import { Image } from "react-native";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { commonStyles } from "../../globalStyle";
import { IMAGES } from "../../constants";

export const AudioScreen = () => {
  return (
    <SafeAreaContainer safeArea={false}>
      <View marginH-10 marginV-20>
        <View
          row
          spread
          centerV
          style={[commonStyles.cardWithShadow, { paddingVertical: 20 }]}
        >
          <Image
            source={IMAGES.avatar}
            style={{
              width: 22,
              height: 22,
              resizeMode: "contain",
            }}
          />
          <View>
            <Text small regular>
              Details
            </Text>
            <Text small regular>
              Sunday, 12th Nov
            </Text>
          </View>

          <View>
            <Text small regular>
              Number
            </Text>
            <Text small semibold>
              1511452
            </Text>
          </View>

          <View>
            <Text small regular>
              Price
            </Text>
            <Text small semibold>
              £2.00
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaContainer>
  );
};
