import { StatusBar} from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, Platform } from "react-native";
import {
  useFonts,
  Manrope_200ExtraLight,
  Manrope_300Light,
  Manrope_400Regular,
  Manrope_500Medium,
  Manrope_600SemiBold,
  Manrope_700Bold,
  Manrope_800ExtraBold
} from "@expo-google-fonts/manrope";
import { PublicStack } from "./src/routers/routeMain";
import { NavigationContainer } from "@react-navigation/native";
import { mainColors } from "./utils/colors";

export default function App() {
  const [fontsLoaded] = useFonts({
    Manrope_200ExtraLight,
    Manrope_300Light,
    Manrope_400Regular,
    Manrope_500Medium,
    Manrope_600SemiBold,
    Manrope_700Bold,
    Manrope_800ExtraBold
  });
  return (
    <SafeAreaView style={styles.adroidSafeArea}>
      <NavigationContainer>
        {fontsLoaded ? (
          <PublicStack />
        ) : (
          <View>
            <Text>Loading</Text>
          </View>
        )}
        <StatusBar  style="light" />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  adroidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
    backgroundColor:mainColors.background
  }
});
