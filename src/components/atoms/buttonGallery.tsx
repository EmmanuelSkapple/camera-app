import React from "react";
import { Text, View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { mainColors } from "../../../utils/colors";
interface ButtonGalleryProps {
  onPress: () => void;
}

const ButtonGallery = ({ onPress }: ButtonGalleryProps) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPress} >
        <Icon name="image-multiple" size={35} color={mainColors.tertiary} />
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    left: 40,
    bottom: 10,
    zIndex: 1,
  }
});

export default ButtonGallery;
