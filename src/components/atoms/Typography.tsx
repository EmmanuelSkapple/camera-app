import React from "react";
import { Text, TextStyle } from "react-native";
import { mainColors } from "../../../utils/colors";

interface TypographyProps {
  variant?: "title" | "subtitle" | "paragraph" | "superTitle";
  color?: string;
  customedStyles?: TextStyle;
  isUpperCase?: boolean;
  children: any;
  numberOfLines?: number;
}

export default function Typography({
  variant,
  color = mainColors.tertiary,
  customedStyles,
  isUpperCase,
  children,
  numberOfLines = 2
}: TypographyProps) {
  const stylesText = { color, ...customedStyles };
  switch (variant) {
    case "superTitle":
      return (
        <Text
          numberOfLines={numberOfLines}
          style={{
            fontFamily: "Manrope_800ExtraBold",
            fontSize: 32,
            textTransform: isUpperCase ? "uppercase" : "none",
            ...stylesText
          }}
        >
          {children}
        </Text>
      );
    case "title":
      return (
        <Text
          numberOfLines={numberOfLines}
          style={{
            fontFamily: "Manrope_700Bold",
            fontSize: 22,
            textTransform: isUpperCase ? "uppercase" : "none",
            ...stylesText
          }}
        >
          {children}
        </Text>
      );

    case "subtitle":
      return (
        <Text
          numberOfLines={numberOfLines}
          style={{
            fontFamily: "Manrope_400Regular",
            fontSize: 16,
            textTransform: isUpperCase ? "uppercase" : "none",
            ...stylesText
          }}
        >
          {children}
        </Text>
      );
    case "paragraph":
      return (
        <Text
          numberOfLines={numberOfLines}
          style={{
            fontFamily: "Manrope_300Light",
            fontSize: 12,
            textTransform: isUpperCase ? "uppercase" : "none",
            ...stylesText
          }}
        >
          {children}
        </Text>
      );
    default:
      return (
        <Text
          numberOfLines={numberOfLines}
          style={{
            fontFamily: "Manrope_700Bold",
            fontSize: 20,
            textTransform: isUpperCase ? "uppercase" : "none",
            ...stylesText
          }}
        >
          {children}
        </Text>
      );
  }
}
