import { Link } from "expo-router";
import React from "react";
import { Pressable, Text, TouchableOpacity } from "react-native";

function CustomButton({
  text,
  onClick = () => {},
  color,
  disabled = false,
  href = "",
  params = {}
}: {
  text: String;
  onClick?: () => any;
  color: "violet" | "orange" | "green";
  disabled?: boolean;
  href?: any;
  params?: {};
}) {
  const getColor = (color: string) => {
    switch (color) {
      case "violet":
        return "#67032F";
      case "orange":
        return "#FC6A03";
      case "green":
        return "#008000";
      case "black":
        return "#100D28";
      default:
        return "";
    }
  };

  const buttonColor = getColor(color);

  return (
    <Link href={{
      pathname: href,
      params: {
        route: "register",
      }
    }}
    asChild >
      <Pressable
        disabled={disabled}
        style={{
          width: "100%",
          borderRadius: 15,
          padding: 15,
          backgroundColor: disabled ? "gray" : buttonColor,
          borderColor: disabled ? "gray" : buttonColor,
          borderWidth: disabled ? 1 : 0,
        }}
        onPress={onClick}
      >
        <Text
          style={{
            color: "white",
          }}
          className="text-center font-raleway text-lg"
        >
          {text}
        </Text>
      </Pressable>
    </Link>
  );
}

export default CustomButton;
