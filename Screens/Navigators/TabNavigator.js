import { StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons"; // Import icons from Expo
import Books from "../Books"; // Your "Books" component
import Setting from "../Setting"; // Your "Setting" component
import AccountScreen from "../AccountScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // Define icons based on the route name
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Sell") {
            iconName = focused ? "add-circle" : "add-circle-outline";
          } else if (route.name === "Account") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          }

          // Return the appropriate icon from Ionicons
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#2f95dc", // Color when active
        tabBarInactiveTintColor: "gray", // Color when inactive
      })}
    >
      <Tab.Screen
        name="Home"
        component={Books} // Your Books component
        options={{ tabBarLabel: "Home", headerShown: false }}
      />
      <Tab.Screen
        name="Sell"
        component={Books} // This could be a separate "Sell" screen for selling books
        options={{ tabBarLabel: "Sell", headerShown: false }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen} // A separate "Account" screen for the user
        options={{ tabBarLabel: "Account", headerShown: false }}
      />
      <Tab.Screen
        name="Settings"
        component={Setting} // Your Setting component
        options={{ tabBarLabel: "Settings", headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
