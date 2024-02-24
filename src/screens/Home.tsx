import React, { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import Typography from "../components/atoms/Typography";
import { getPhotos } from "../services/api";
import PhotoGallery from "../components/molecules/photoGallery";
import ButtonCamera from "../components/atoms/buttonCamera";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../routers/routeMain";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import HeaderScreen from "../components/atoms/headerScreen";
import { mainColors } from "../../utils/colors";

type HomeScreenProps = NativeStackNavigationProp<RootStackParamList, "Home">;

const Home = () => {
  const [photos, setPhotos] = React.useState<string[]>([]);
  const navigation = useNavigation<HomeScreenProps>();
  const isfocused = useIsFocused();
  const getPhotosList = async () => {
    const photosList = await getPhotos();
    console.log(photosList);
    setPhotos(photosList);
  };

  useEffect(() => {
    getPhotosList();
  }, [isfocused]);

  const goToCamera = () => {
    navigation.navigate("Camera");
  };

  return (
    <View style={styles.container}>
      <HeaderScreen text="Mi galeria" />
      <PhotoGallery photos={photos} />
      <View style={styles.footer}>
        <ButtonCamera onPress={goToCamera} animated />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: mainColors.background
  },
  footer: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    padding: 8,
    backgroundColor: mainColors.background,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Home;
