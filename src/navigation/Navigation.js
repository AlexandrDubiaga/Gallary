import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { MainScreen } from "../../src/screens/MainScreen";
import { FotoScreen } from "../../src/screens/FotoScreen";
import { THEME } from "../theme";
import { Platform } from "react-native";

const MainStack = createStackNavigator();
export const MainScreenNavigator = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor:
              Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <MainStack.Screen
          name="Main"
          options={{
            title: "Gallary",
            headerStyle: {
              backgroundColor:
                Platform.OS === "android" ? '#FFFFE0' : "#fff",

            },
            headerTintColor:
              Platform.OS === "android" ? "#4169E1" : THEME.MAIN_COLOR,
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize:24
            },
            headerTitleAlign: "center",
          }}
          component={MainScreen}
        />
        <MainStack.Screen name="FotoScreen" component={FotoScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};


