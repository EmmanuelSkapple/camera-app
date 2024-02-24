import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator
} from "react-native";
import Typography from "./Typography";
import { mainColors } from "../../../utils/colors";

interface ButtonProps {
  onPress: Function;
  title: string;
  loading?: boolean;
}

export default function ButtonPrimary({
  onPress,
  title,
  loading = false
}: ButtonProps) {
  return (
    <TouchableOpacity onPress={() => onPress()} style={styles.btnContainer}>
      {loading ? (
        <ActivityIndicator color={mainColors.tertiary} size={20} />
      ) : (
        <Typography customedStyles={{textAlign:'center'}} variant="title" color={mainColors.tertiary}>
          {title}
        </Typography>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    width: "100%",
    paddingVertical: 8,
    paddingHorizontal:16,
    borderRadius: 5,
    marginTop: 10,
    backgroundColor: mainColors.primary
  }
});
