import { Image, View } from "react-native"
import { IMAGES } from "../constants"

export const LineVerticalImage = () =>{
    return(
        <View style={{ marginHorizontal: 20 }}>
                <Image
                  source={IMAGES.lineV}
                  style={{ width: "100%" }}
                  resizeMode="cover"
                />
              </View>
    )
}