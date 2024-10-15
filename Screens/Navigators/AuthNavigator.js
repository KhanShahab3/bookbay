import { View, Text } from "react-native";
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../Login";
import SignUp from "../SignUp";

import BookDetail from "../BookDetail";

import TabNavigator from "./TabNavigator";
const Stack = createNativeStackNavigator();
const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="logIn"
        component={Login}
        options={{ headerShown: false }}
      />

      <Stack.Screen name="signUp" component={SignUp} />

      <Stack.Screen
        name="bookDetail"
        component={BookDetail}
        // options={{ headerShown: false }}
      />
      <Stack.Screen
        name="tab"
        component={TabNavigator}
        // options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
