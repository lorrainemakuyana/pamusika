import { Text, View, Image, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import Logo from "~/images/icon-white.png";
import React from "react";
import CustomButton from "@/components/buttons/CustomButton";

export default function Index() {
  return (
    <View className="h-full w-full flex">
      <View className="h-[70%] mt-14 flex justify-center items-center">
        <View
          style={{
            width: 150,
            height: 150,
          }}
          className="flex justify-center items-center shadow shadow-gray-400"
        >
          <Image className="rounded-full w-full h-full" source={Logo} />
        </View>
        <Text className="text-5xl font-bold font-ralewaybold mt-5">
          Pamusika
        </Text>
        <Text className="text-center mt-5 text-lg font-raleway mx-14">
          Everything you need {"\n"}
          at your convenience
        </Text>
      </View>
      <View className="flex mx-5">
        <CustomButton
          color="green"
          text="Let's get started!"
          onClick={() => {}}
        />
        <Pressable className="flex flex-row justify-center items-center mt-12">
          <Text className="text-center mr-1 font-raleway text-lg">
            I already have an account
          </Text>
          <Ionicons
            name="arrow-forward-circle-outline"
            size={24}
            color="#008000"
          />
        </Pressable>
      </View>
    </View>
  );
}
