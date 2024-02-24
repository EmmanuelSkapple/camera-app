import React from 'react'
import {Text, View, StyleSheet} from 'react-native';

interface PhotoItemProps {
  url: string;
}

const PhotoItem = ({ url }:PhotoItemProps) => {
  return (
    <View style={styles.container}>
     <Text> photoItem </Text>
    </View>
  )
}

const styles = StyleSheet.create({
 container: {
 flex:1
 },
});

export default PhotoItem;