import React, { useEffect, useRef } from "react";
import {
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
  View
} from "react-native";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import { mainColors } from "../../../utils/colors";
interface ButtonCameraProps {
  onPress: () => void;
  onLongPress?: () => void;
  animated?: boolean;
  iconName?: string;
  iconSize?: number;
  iconColor?: string;
}

const ButtonCamera = ({
  onPress,
  animated,
  iconName,
  iconColor = mainColors.secondary,
  iconSize = 30,
  onLongPress
}: ButtonCameraProps) => {
  const animation = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const pulse = Animated.loop(
      Animated.sequence([
        Animated.timing(animation, {
          toValue: 1.2,
          duration: 1000,
          useNativeDriver: true
        }),
        Animated.timing(animation, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true
        })
      ])
    );
    animated && pulse.start();
    return () => pulse.stop();
  }, [animation]);

  const animatedStyles = {
    transform: [{ scale: animation }]
  };

  return (
    <Animated.View style={[styles.container, animatedStyles]}>
      <TouchableWithoutFeedback onLongPress={onLongPress} onPress={onPress}>
        <Icons
          name={iconName ?? "camera-outline"}
          size={iconSize}
          color={iconColor}
        />
      </TouchableWithoutFeedback>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 40,
    backgroundColor: mainColors.tertiary,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1
  }
});

export default ButtonCamera;
