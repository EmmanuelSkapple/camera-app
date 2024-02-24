//we try to simulate a api call to a server but in this case we are using a AsyncStorage to store the data

import AsyncStorage from '@react-native-async-storage/async-storage';


export const getPhotos = async () => {
  try {
    const value = await AsyncStorage.getItem('photos');
    if (value !== null) {
      return JSON.parse(value) ;
    }
    return [];
  } catch (e) {
    console.log(e,"error in getPhotos");
  }
};

export const saveNewPhoto = async (photo: any) => {
    try {
        const value = await AsyncStorage.getItem('photos');
        if (value !== null) {
        const newValue = JSON.parse(value);
        newValue.push(photo);
        await AsyncStorage.setItem('photos', JSON.stringify(newValue));
        } else {
        await AsyncStorage.setItem('photos', JSON.stringify([photo]));
        }
    } catch (e) {
        console.log(e, "error in saveNewPhoto");
    }
};

export const deletePhoto = async (photo: any) => {
    try {
        const value = await AsyncStorage.getItem('photos');
        if (value !== null) {
        const newValue = JSON.parse(value);
        const index = newValue.findIndex((item: any) => item.id === photo.id);
        newValue.splice(index, 1);
        await AsyncStorage.setItem('photos', JSON.stringify(newValue));
        }
    } catch (e) {
        console.log(e, "error in deletePhoto");
    }
};
