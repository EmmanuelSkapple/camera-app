import LottieView from "lottie-react-native";
import React from "react";
import { View, StyleSheet } from "react-native";
import { screenWidth } from "../../../utils/constants";

const AnimationCamera = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require("../../../assets/animations/camera-animation.json")}
        style={{ width: "100%", height: "100%" }}
        autoPlay
        loop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 3,
    width: screenWidth/2,
    height: screenWidth/2,
    justifyContent: "center",
    alignItems: "center",
    top: "10%",
  }
});

export default AnimationCamera;
