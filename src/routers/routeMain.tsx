import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Camera from "../screens/Camera";

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  Home: any;
  Camera: any;
};

const StackPublic = createNativeStackNavigator<RootStackParamList>();

export function PublicStack() {
  return (
    <StackPublic.Navigator>
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={Home}
      />
      <Stack.Screen
        name="Camera"
        options={{ headerShown: false }}
        component={Camera}
      />
    </StackPublic.Navigator>
  );
}
