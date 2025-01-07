import CustomButton from "@/components/buttons/CustomButton";
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Logo from "~/images/icon-white.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {};
  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View className="flex-1 w-full h-full items-center justify-center">
        <View
          style={{
            width: 120,
            height: 120,
          }}
          className="flex justify-center items-center shadow shadow-gray-400"
        >
          <Image className="rounded-full w-full h-full" source={Logo} />
        </View>
        <Text className="text-4xl font-bold font-ralewaybold mt-5 mb-10">
          Login
        </Text>
        <View className="flex px-5 w-full mt-5">
          <TextInput
            className="w-full h-14 border border-gray-700 rounded-md px-3"
            placeholder="Email address"
            autoComplete="email"
            keyboardType="email-address"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          <TextInput
            className="w-full h-14 border border-gray-700 rounded-md px-3 mt-10"
            placeholder="Password"
            secureTextEntry
            autoComplete="password"
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
        </View>
      </View>
      <View className="flex justify-end px-5 w-full my-12">
        <CustomButton
          color="green"
          text="Login"
          href="/auth"
          disabled={!email || !password}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

export default Login;
