// import React from 'react';
// import { Image, StyleSheet, Text } from 'react-native';
// import { View } from 'react-native-ui-lib';
// import Swiper from 'react-native-swiper';
// import { IMAGES } from '../../constants';
// import { BlurView } from '@react-native-community/blur';

// const SLIDER_DATA = [
//   { id: 1, image: IMAGES.slide3 },
//   { id: 2, image: IMAGES.slide2 },
//   { id: 3, image: IMAGES.slide1 },
// ];

// // Dummy image to be used at the edges
// const DUMMY_IMAGE = IMAGES.dummy;

// const Slider = () => {
//   return (
//     <View style={styles.sliderContainer}>
//       <Swiper
//         showsButtons={false} // Remove navigation buttons
//         showsPagination={true} // Keep pagination dots
//         dotStyle={styles.dotStyle} // Pagination dot styling
//         activeDotStyle={styles.activeDotStyle}
//         loop={true}
//       >
//         {SLIDER_DATA.map((item, index) => (
//           <View key={item.id} style={styles.slide}>
//             {/* Previous Image - Blurred or Dummy */}
//             <BlurView
//               style={styles.previousImageBlur}
//               blurType="light"
//               blurAmount={10}
//             >
//               <Image
//                 source={index > 0 ? SLIDER_DATA[index - 1].image : DUMMY_IMAGE}
//                 style={styles.previousImage}
//                 resizeMode="cover"
//               />
//             </BlurView>

//             {/* Next Image - Blurred or Dummy */}
//             <BlurView
//               style={styles.nextImageBlur}
//               blurType="light"
//               blurAmount={10}
//             >
//               <Image
//                 source={
//                   index < SLIDER_DATA.length - 1
//                     ? SLIDER_DATA[index + 1].image
//                     : DUMMY_IMAGE
//                 }
//                 style={styles.nextImage}
//                 resizeMode="cover"
//               />
//             </BlurView>

//             {/* Current Image - Clear */}
//             <Image
//               source={item.image}
//               style={styles.currentImage}
//               resizeMode="cover"
//             />
//           </View>
//         ))}
//       </Swiper>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   sliderContainer: {
//     height: 200,
//     position: 'relative',
//   },
//   dotStyle: {
//     backgroundColor: '#fff',
//     opacity: 0.5,
//   },
//   activeDotStyle: {
//     backgroundColor: '#fff',
//   },
//   slide: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: 200,
//     position: 'relative',
//   },
//   // Blurred Previous Image
//   previousImageBlur: {
//     position: 'absolute',
//     left: '-60%',
//     top: 0,
//     width: '100%',
//     height: '100%',
//     overflow: 'hidden',
//   },
//   previousImage: {
//     width: '75%',
//     height: '100%',
//     opacity: 0.6, // Slightly reduce opacity for blur effect
//     borderRadius: 20,
//   },
//   // Blurred Next Image
//   nextImageBlur: {
//     position: 'absolute',
//     right: '-60%',
//     top: 0,
//     width: '100%',
//     height: '100%',
//     overflow: 'hidden',
//   },
//   nextImage: {
//     width: '75%',
//     height: '100%',
//     opacity: 0.6, // Slightly reduce opacity for blur effect
//     borderRadius: 20,
//   },
//   // Clear Current Image
//   currentImage: {
//     width: '75%',
//     height: '100%',
//     borderRadius: 20,
//     zIndex: 1, // Bring it above the blurred images
//   },
// });

// export default Slider;





import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { View } from 'react-native-ui-lib';
import Swiper from 'react-native-swiper';
import { IMAGES } from '../../constants';
import { BlurView } from '@react-native-community/blur';

const SLIDER_DATA = [
  { id: 1, image: IMAGES.slide3 },
  { id: 2, image: IMAGES.slide2 },
  { id: 3, image: IMAGES.slide1 },
];

const DUMMY_IMAGE = IMAGES.dummy;

const Slider = () => {
  return (
    <View style={styles.sliderContainer}>
      <Swiper
        showsButtons={false}
        showsPagination={true}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        loop={true}
      >
        {SLIDER_DATA.map((item, index) => (
          <View key={item.id} style={styles.slide}>
            {/* Previous Image - Blurred or Dummy */}
            <BlurView
              style={styles.previousImageBlur}
              blurType="light"
              blurAmount={10}
            >
              <Image
                source={index > 0 ? SLIDER_DATA[index - 1].image : DUMMY_IMAGE}
                style={styles.previousImage}
                resizeMode="cover"
              />
            </BlurView>

            {/* Next Image - Blurred or Dummy */}
            <BlurView
              style={styles.nextImageBlur}
              blurType="light"
              blurAmount={10}
            >
              <Image
                source={
                  index < SLIDER_DATA.length - 1
                    ? SLIDER_DATA[index + 1].image
                    : DUMMY_IMAGE
                }
                style={styles.nextImage}
                resizeMode="cover"
              />
            </BlurView>

            {/* Current Image - Clear */}
            <Image
              source={item.image}
              style={styles.currentImage}
              resizeMode="cover"
            />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    height: 200,
    position: 'relative',
  },
  dotStyle: {
    backgroundColor: '#fff',
    opacity: 0.5,
  },
  activeDotStyle: {
    backgroundColor: '#fff',
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    position: 'relative',
  },
  // Blurred Previous Image
  previousImageBlur: {
    position: 'absolute',
    left: '-30%', 
    top: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  previousImage: {
    width: '60%', 
    height: '70%', 
    opacity: 0.6,
    borderRadius: 20,
  },
  // Blurred Next Image
  nextImageBlur: {
    position: 'absolute',
    right: '-30%', 
    top: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  nextImage: {
    width: '60%', // Scale down width
    height: '70%', // Scale down height
    opacity: 0.6,
    borderRadius: 20,
  },
  // Clear Current Image
  currentImage: {
    width: '75%', // Keep the current image size
    height: '100%', // Maintain the original height
    borderRadius: 20,
    zIndex: 1,
  },
});

export default Slider;
