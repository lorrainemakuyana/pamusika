import React from "react";
import { Pressable, Text, TouchableOpacity } from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";

function CustomButton({
  text,
  onClick,
  color,
  disabled = false,
}: {
  text: String;
  onClick: () => any;
  color: "violet" | "orange" | "green";
  disabled?: boolean;
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
    <TouchableOpacity
      disabled={disabled}
      style={{
        width: "100%",
        borderRadius: 15,
        padding: 15,
        backgroundColor: disabled ? "transparent" : buttonColor,
        borderColor: buttonColor,
        borderWidth: disabled ? 1 : 0,
      }}
      onPress={onClick}
    >
      <Text
        style={{
          color: disabled ? buttonColor : "white",
        }}
        className="text-center font-raleway text-lg"
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}

export default CustomButton;
