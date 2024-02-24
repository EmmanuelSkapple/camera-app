import React from "react";
import {
  Image,
  View,
  StyleSheet,
  Modal,
  TouchableHighlight
} from "react-native";
import ButtonPrimary from "../atoms/buttonPrimary";
import { screenHeight, screenWidth } from "../../../utils/constants";
import IconButton from "../atoms/iconButton";
import { Video, ResizeMode } from "expo-av";

interface ModalPreviewProps {
  modalVisible: boolean;
  url: string;
  setModalVisible: (value: boolean) => void;
  saveImage: () => void;
  isVideo?: boolean;
}

const ModalPreview = ({
  modalVisible,
  setModalVisible,
  url,
  saveImage,
  isVideo
}: ModalPreviewProps) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.closeBtn}>
            <IconButton
              size={40}
              iconSize={25}
              onPress={() => setModalVisible(!modalVisible)}
              iconName="close"
            />
          </View>
          <View style={styles.imageContainer}>
            {isVideo && url ? (
              <Video
                source={{ uri: url }}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode={ResizeMode.CONTAIN}
                shouldPlay
                isLooping
                style={styles.image}
              />
            ) : (
              <Image
                resizeMode="cover"
                source={{ uri: url }}
                style={styles.image}
              />
            )}
          </View>
          <ButtonPrimary title="Guardar" onPress={() => saveImage()} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
    shadowColor: "#000",
    justifyContent: "center",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  imageContainer: {
    marginVertical: 16
  },
  image: {
    width: screenWidth - 100,
    height: screenHeight - 300,
    borderRadius: 10
  },
  closeBtn: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1
  }
});

export default ModalPreview;
