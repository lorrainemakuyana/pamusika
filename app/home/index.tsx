import React from "react";
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Logo from "~/images/icon-white.png";

function Home() {
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
          Home
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
}

export default Home;
