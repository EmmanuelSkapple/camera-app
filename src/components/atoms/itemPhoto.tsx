import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { screenWidth } from "../../../utils/constants";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { mainColors } from "../../../utils/colors";
import { Video, ResizeMode } from "expo-av";
import * as Sharing from "expo-sharing";

interface ItemPhotoProps {
  url: string;
}

const ItemPhoto = ({ url }: ItemPhotoProps) => {
  const isVideo = url.includes("mp4") || url.includes("mov");

  const handleShare = async () => {
    try {
      await Sharing.shareAsync(url);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TouchableOpacity style={styles.container}>
      <Icon
        name={isVideo ? "video" : "image"}
        size={30}
        color={mainColors.background}
        style={styles.iconFormat}
      />
      <Icon
        name="share-variant"
        size={30}
        color={mainColors.background}
        style={styles.iconShare}
        onPress={handleShare}
      />
      {isVideo ? (
        <Video
          source={{ uri: url }}
          style={styles.image}
          resizeMode={ResizeMode.COVER}
          shouldPlay={false}
        />
      ) : (
        <Image resizeMode="cover" source={{ uri: url }} style={styles.image} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth / 3,
    height: screenWidth / 3,
    marginBottom: 10
  },
  image: {
    width: "90%",
    height: screenWidth / 3,
    borderRadius: 10
  },
  iconFormat: {
    position: "absolute",
    top: 5,
    left: 5,
    zIndex: 1,
    elevation: 4
  },
  iconShare: {
    position: "absolute",
    top: 5,
    right: 15,
    zIndex: 1,
    elevation: 4
  }
});

export default ItemPhoto;
