import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import Typography from "../atoms/Typography";
import ItemPhoto from "../atoms/itemPhoto";

interface PhotoGalleryProps {
  photos: string[];
}

const PhotoGallery = ({ photos }: PhotoGalleryProps) => {
  const itemPhoto = ({ item }: { item: string }) => {
    return <ItemPhoto url={item} />;
  };

  if (photos.length === 0) {
    return (
      <View style={styles.container}>
        <Typography variant="title">No hay fotos</Typography>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={photos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={itemPhoto}
        numColumns={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default PhotoGallery;
