import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";

const { Extrapolate, interpolate } = Animated;
const { height: wHeight, width: wWidth } = Dimensions.get("window");
export const backgroundImage = require("../../assets/uber-eats-bg.jpg");

export const HEADER_IMAGE_HEIGHT = wHeight / 3;

const styles = StyleSheet.create({
  image: {
    top: 0,
    left: 0,
    width: wWidth,
    resizeMode: "cover",
    position: "absolute"
  }
});

interface HeaderImageProps {
  y: Animated.Value<number>;
}

export default ({ y }: HeaderImageProps) => {
  const height = interpolate(y, {
    inputRange: [-100, 0],
    outputRange: [HEADER_IMAGE_HEIGHT, HEADER_IMAGE_HEIGHT],
    extrapolateRight: Extrapolate.CLAMP
  });
  const top = interpolate(y, {
    inputRange: [0, 100],
    outputRange: [0, -100],
    extrapolateLeft: Extrapolate.CLAMP
  });
  return (
    <Animated.Image
      source={backgroundImage}
      style={[styles.image, { top, height }]}
    />
  );
};