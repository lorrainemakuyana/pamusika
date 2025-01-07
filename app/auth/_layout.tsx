import { Tabs, useLocalSearchParams, useNavigation } from "expo-router";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

interface TabLayoutProps {
  route: string;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const { route } = useLocalSearchParams();

  console.log({ route });
  return (
    <Tabs
      initialRouteName={(route as string) || "login"}
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="login"
        options={{
          title: "Login",
          tabBarIcon: ({ color, focused, size }) => (
            <MaterialIcons size={size} name="login" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="register"
        options={{
          title: "Register",
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? "account-edit" : "account-edit-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
