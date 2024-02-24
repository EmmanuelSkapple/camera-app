import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { cameraOptions } from "../../../types/cameraTypes";
import Typography from "../atoms/Typography";
import { mainColors } from "../../../utils/colors";

interface OptionsFooterCameraProps {
    setOptions: (options:cameraOptions) => void;
    options: cameraOptions;
}

const OptionsFooterCamera = ({setOptions, options}: OptionsFooterCameraProps) => {

  return (
    <View style={styles.container}>
        <View style={styles.containerQuality}>
        <TouchableOpacity onPress={()=> setOptions({ ...options, quality: 720})}>
            <Typography color={options.quality === 720 ? mainColors.primary: mainColors.tertiary}  variant="subtitle">
                720p
            </Typography>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> setOptions({ ...options, quality: 1080})}>
            <Typography color={options.quality === 1080 ? mainColors.primary: mainColors.tertiary }  variant="subtitle">
                1080p
            </Typography>
        </TouchableOpacity>
        </View>
        <View style={styles.containerFPS}>
        <TouchableOpacity onPress={()=> setOptions({ ...options, fps: 30})}>
            <Typography color={options.fps === 30 ? mainColors.primary: mainColors.tertiary}  variant="subtitle">
                30fps
            </Typography>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> setOptions({ ...options, fps: 60})}>
            <Typography color={options.fps === 60 ? mainColors.primary: mainColors.tertiary }  variant="subtitle">
                60fps
            </Typography>
        </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
  },
  containerQuality: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 30,
  },
  containerFPS: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 30,
  }

});

export default OptionsFooterCamera;
