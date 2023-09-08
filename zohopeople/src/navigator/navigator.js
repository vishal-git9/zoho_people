import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { IntroScreen } from "../screens/introScreen";
import BottomBar from "../components/bottombar/bottombar";
const Stack = createNativeStackNavigator();
export const Navigator = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator >
        <Stack.Screen name="Intro" component={IntroScreen}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
