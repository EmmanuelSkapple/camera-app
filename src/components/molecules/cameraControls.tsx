import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { cameraOptions } from "../../../types/cameraTypes";
import IconButton from "../atoms/iconButton";

interface CameraControlsProps {
  setOptions: (options: cameraOptions) => void;
  options: cameraOptions;
}

const CameraControls = ({ setOptions, options }: CameraControlsProps) => {
  return (
    <View style={styles.container}>
      <IconButton
        size={40}
        iconSize={25}
        onPress={() =>
          setOptions({
            ...options,
            cameraType: options.cameraType === "back" ? "front" : "back"
          })
        }
        iconName="camera-switch"
      />
      <IconButton
        active={options.flashMode === "on"}
        size={40}
        iconSize={25}
        onPress={() =>
          setOptions({
            ...options,
            flashMode: options.flashMode === "off" ? "on" : "off"
          })
        }
        iconName="flash"
      />
      <IconButton
        active={options.hdr}
        size={40}
        iconSize={25}
        onPress={() => setOptions({ ...options, hdr: !options.hdr })}
        iconName="hdr"
      />
      <IconButton
        active={options.optureSound}
        size={40}
        iconSize={25}
        onPress={() =>
          setOptions({ ...options, optureSound: !options.optureSound })
        }
        iconName="volume-high"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    right: 20,
    top: 0,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    gap: 20,
    zIndex: 1
  }
});

export default CameraControls;
