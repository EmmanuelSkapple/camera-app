import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Typography from "./Typography";
import { mainColors } from "../../../utils/colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
interface HeaderScreenProps {
  text?: string;
  backAction?: () => void;
}

const HeaderScreen = ({ text, backAction }: HeaderScreenProps) => {
    const borderStyles = text ? {borderBottomWidth: 1, borderBottomColor: mainColors.primary} : {};
  return (
    <View style={[styles.container,borderStyles]}>
      {!!backAction ? (
        <View style={styles.backIcon}>
        <Icon
          name="arrow-left"
          size={30}
          color={mainColors.primary}
          onPress={backAction}
        />
        </View>
      ) : null}
      {text ? (
        <Typography
          variant="superTitle"
          isUpperCase={true}
          color={mainColors.primary}
        >
          {text}
        </Typography>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    width: "100%",
    height: 50,
  },
  backIcon: {
    position: "absolute",
    left: 10,
    top: 10,
    zIndex: 1,
  }
});

export default HeaderScreen;
