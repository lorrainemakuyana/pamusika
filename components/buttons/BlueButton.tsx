import React from "react";
import { Pressable, Text } from "react-native";
import { TouchableWithoutFeedback } from "react-native";

function BlueButton({ text, onClick }: { text: String; onClick: () => any }) {
  return (
    <Pressable
      style={{
        backgroundColor: "#004CFF",
        padding: 16,
        width: "100%",
        borderRadius: 10,
      }}
      onPress={onClick}
    >
      <Text
        style={{
          color: "white",
          textAlign: "center",
          fontFamily: "Raleway",
          fontSize: 18,
        }}
      >
        {text}
      </Text>
    </Pressable>
  );
}

export default BlueButton;
