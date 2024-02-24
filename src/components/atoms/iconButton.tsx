import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import { mainColors } from "../../../utils/colors";
interface ButtonCameraProps {
  onPress: () => void;
  iconName?: string;
  iconSize?: number;
  size?: number;
  active?: boolean;
}

const IconButton = ({onPress, iconName, iconSize= 20,size=30, active}: ButtonCameraProps) => {

  return (
    <View style={[styles.container,{width:size,height:size,borderRadius: size, backgroundColor:active? mainColors.primary : mainColors.tertiary}]}>
        <TouchableWithoutFeedback onPress={onPress} >
         <Icons name={iconName ?? "circle"} size={iconSize} color={ active ? mainColors.tertiary :mainColors.secondary} />
        </TouchableWithoutFeedback>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  }
});

export default IconButton;
