import { Text, View, Image, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import Logo from "~/images/icon-white.png";
import React, { useEffect } from "react";
import CustomButton from "@/components/buttons/CustomButton";
import { Link } from "expo-router";

export default function Landing() {
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
      <View className="mx-5">
        <CustomButton
          color="green"
          text="Let's get started!"
          href="/auth"
          params={{ route: "register" }}
        />
        <Link
          href={{
            pathname: "/auth",
            params: {
              route: "login",
            },
          }}
          className="mt-12 mx-auto"
        >
          <View className="flex flex-row justify-center items-center">
            <Text className="text-center mr-1 font-raleway text-lg">
              I already have an account
            </Text>
            <Ionicons
              name="arrow-forward-circle-outline"
              size={24}
              color="#008000"
            />
          </View>
        </Link>
      </View>
    </View>
  );
}
