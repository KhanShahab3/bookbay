import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";

import { useNavigation } from "@react-navigation/native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email);
  console.log(password);

  return (
    <View style={{ alignItems: "center" }}>
      <View style={{ top: responsiveHeight(20) }}>
        <Text style={{ fontSize: 24, fontWeight: "500", color: "#1252AE" }}>
          Welcome Back!
        </Text>
        <Text
          style={{
            width: responsiveWidth(70),
            fontSize: 14,
            fontWeight: "500",
            top: 15,
            color: "#303030",
          }}
        >
          Sign in to your account to get access to your courses
        </Text>
        <TextInput
          style={styles.email_input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.password_input}
          placeholder="password"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
        {/* <TouchableOpacity style={{ top: 10, left: responsiveWidth(40) }}>
            <Text
              style={{
                color: "rgba(18, 82, 174, 1)",
                fontSize: 16,
                fontWeight: "500",
              }}
            >
              Forgot password?
            </Text>
          </TouchableOpacity> */}
        <TouchableOpacity
          style={styles.sign_in_btn}
          onPress={() => {
            navigation.navigate("tab");
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
            Sign In
          </Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.google_btn} >
            <Image
              source={require("../assets/Google.png")}
              style={styles.google_img}
            />
            <Text
              style={{
                textAlign: "center",
                marginTop: responsiveHeight(1),
                fontSize: 14,
                color: "rgba(48, 48, 48, 0.84)",
              }}
            >
              Sign in with google
            </Text>
          </TouchableOpacity> */}
        <TouchableOpacity
          style={{ flexDirection: "row", top: 25, padding: 5 }}
          onPress={() => {
            navigation.navigate("signUp");
          }}
        >
          <Text style={{ color: "rgba(48, 48, 48, 1)", fontSize: 14 }}>
            Don’t have an account?
          </Text>
          <Text
            style={{
              color: "#1252AE",
              fontSize: 16,
              fontWeight: "400",
              left: 5,
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  email_input: {
    width: responsiveWidth(85),
    backgroundColor: "rgba(18, 82, 174, 0.11)",
    borderRadius: 15,
    height: responsiveHeight(5),
    marginTop: responsiveHeight(5),
    paddingHorizontal: 15,
  },
  password_input: {
    width: responsiveWidth(85),
    backgroundColor: "rgba(18, 82, 174, 0.11)",
    borderRadius: 15,
    height: responsiveHeight(5),
    marginTop: responsiveWidth(10),
    paddingHorizontal: 15,
  },

  sign_in_btn: {
    marginTop: responsiveWidth(6),
    backgroundColor: "#1252AE",
    width: responsiveWidth(85),
    height: responsiveHeight(5),
    borderRadius: 15,
    justifyContent: "center",
  },
  google_btn: {
    marginTop: responsiveWidth(6),
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
