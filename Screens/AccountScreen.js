import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const AccountScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: "https://via.placeholder.com/100" }} // Replace with actual profile picture URL
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>John Doe</Text>
        <Text style={styles.profileEmail}>johndoe@example.com</Text>
      </View>

      {/* Account Options */}
      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate("EditProfile")} // Replace with actual route
        >
          <Ionicons name="person-outline" size={24} color="black" />
          <Text style={styles.optionText}>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate("MyOrders")} // Replace with actual route
        >
          <Ionicons name="list-outline" size={24} color="black" />
          <Text style={styles.optionText}>My Adds</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate("PaymentMethods")} // Replace with actual route
        >
          <Ionicons name="card-outline" size={24} color="black" />
          <Text style={styles.optionText}>Payment Methods</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate("AddressBook")} // Replace with actual route
        >
          <Ionicons name="location-outline" size={24} color="black" />
          <Text style={styles.optionText}>Address Book</Text>
        </TouchableOpacity>
      </View>

      {/* Logout Button */}
      <View style={styles.logoutContainer}>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => {
            /* Implement logout logic */
            navigation.navigate("logIn");
          }}
        >
          <Ionicons name="log-out-outline" size={24} color="red" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  profileContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    paddingVertical: 30,
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  profileEmail: {
    fontSize: 14,
    color: "gray",
  },
  optionsContainer: {
    backgroundColor: "#fff",
    paddingVertical: 10,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#f1f1f1",
  },
  optionText: {
    fontSize: 16,
    marginLeft: 10,
  },
  logoutContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
  },
  logoutText: {
    fontSize: 16,
    color: "red",
    marginLeft: 10,
  },
});
