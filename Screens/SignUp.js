import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const SignUp = ({ navigation }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <View style={{ marginTop: responsiveHeight(15) }}>
        <Text style={{ fontSize: 24, fontWeight: "500", color: "#1252AE" }}>
          SignUp
        </Text>
        <Text
          style={{ fontSize: 14, fontWeight: "500", top: 15, color: "#303030" }}
        >
          Register to get started
        </Text>

        <TextInput
          style={{
            width: responsiveWidth(85),
            backgroundColor: "rgba(18, 82, 174, 0.11)",
            borderRadius: 15,
            height: responsiveHeight(5),
            marginTop: responsiveHeight(5),
            paddingHorizontal: 15,
          }}
          placeholder="Name"
          value={userData.name}
          onChangeText={(text) => setUserData({ ...userData, name: text })}
        />

        <TextInput
          style={{
            width: responsiveWidth(85),
            backgroundColor: "rgba(18, 82, 174, 0.11)",
            borderRadius: 15,
            height: responsiveHeight(5),
            marginTop: responsiveWidth(10),
            paddingHorizontal: 15,
          }}
          placeholder="Email"
          value={userData.email}
          onChangeText={(text) => setUserData({ ...userData, email: text })}
        />

        <TextInput
          style={{
            width: responsiveWidth(85),
            backgroundColor: "rgba(18, 82, 174, 0.11)",
            borderRadius: 15,
            height: responsiveHeight(5),
            marginTop: responsiveHeight(5),
            paddingHorizontal: 15,
          }}
          placeholder="Phone"
          value={userData.phone}
          onChangeText={(text) => setUserData({ ...userData, phone: text })}
        />

        <TextInput
          style={{
            width: responsiveWidth(85),
            backgroundColor: "rgba(18, 82, 174, 0.11)",
            borderRadius: 15,
            height: responsiveHeight(5),
            marginTop: responsiveWidth(10),
            paddingHorizontal: 15,
          }}
          placeholder="Password"
          value={userData.password}
          onChangeText={(text) => setUserData({ ...userData, password: text })}
          secureTextEntry={true}
        />

        <TextInput
          style={{
            width: responsiveWidth(85),
            backgroundColor: "rgba(18, 82, 174, 0.11)",
            borderRadius: 15,
            height: responsiveHeight(5),
            marginTop: responsiveWidth(10),
            paddingHorizontal: 15,
          }}
          placeholder="Confirm password"
          value={userData.confirmPassword}
          onChangeText={(text) =>
            setUserData({ ...userData, confirmPassword: text })
          }
          secureTextEntry={true}
        />

        <TouchableOpacity style={{ top: 10, left: responsiveWidth(40) }}>
          <Text
            style={{
              color: "rgba(18, 82, 174, 1)",
              fontSize: 16,
              fontWeight: "500",
              left: 30,
            }}
          >
            Forgot password?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.sign_in_btn}
          onPress={() => {
            navigation.navigate("logIn");
          }}
        >
          <Text
            style={{
              color: "#F1F1F1",
              fontSize: 16,
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ flexDirection: "row", top: 25, padding: 5 }}
          onPress={() => {
            navigation.navigate("log");
          }}
        >
          <Text style={{ color: "rgba(48, 48, 48, 1)", fontSize: 14 }}>
            Already have an account
          </Text>
          <Text
            style={{
              color: "#1252AE",
              fontSize: 16,
              fontWeight: "400",
              left: 5,
            }}
          >
            SignIn
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  sign_in_btn: {
    marginTop: responsiveWidth(6),
    backgroundColor: "#1252AE",
    width: responsiveWidth(85),
    height: responsiveHeight(5),
    borderRadius: 15,
    justifyContent: "center",
    top: 15,
  },
  google_btn: {
    marginTop: responsiveWidth(10),
    width: responsiveWidth(85),
    height: responsiveHeight(5),
    borderRadius: 15,
    justifyContent: "center",
    backgroundColor: "rgba(18, 82, 174, 0.11)",
    flexDirection: "row",
  },
  google_img: {
    width: responsiveWidth(10),
    height: responsiveHeight(3),
    marginTop: 6,
  },
});
