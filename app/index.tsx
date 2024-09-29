import { Text, View, Image, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import Logo from "../assets/images/logo.webp";
import BlueButton from "@/components/buttons/BlueButton";

export default function Index() {
  return (
    <View
      style={{
        height: "100%",
        display: "flex",
      }}
    >
      <View
        style={{
          height: "70%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 50,
        }}
      >
        <View
          style={{
            width: 150,
            height: 150,
            backgroundColor: "#FFF",
            borderRadius: 9999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            shadowColor: "#000",
            shadowRadius: 25,
            shadowOpacity: 0.5,
          }}
        >
          <Image
            style={{
              width: "50%",
              resizeMode: "contain",
            }}
            source={Logo}
          />
        </View>
        <Text
          style={{
            fontWeight: 700,
            fontSize: 40,
            fontFamily: "RalewayBold",
            marginTop: 20,
          }}
        >
          Pamusika
        </Text>
        <Text
          style={{
            textAlign: "center",
            marginTop: 20,
            marginHorizontal: 60,
            fontFamily: "Raleway",
            fontSize: 18,
            lineHeight: 26,
          }}
        >
          Everything you need {"\n"}
          in one place {"\n"}
          from the comfort of your home!
        </Text>
      </View>
      <View
        style={{
          height: "30%",
          display: "flex",
          marginHorizontal: 20,
        }}
      >
        <BlueButton text="Let's get started!" onClick={() => {}} />
        <Pressable
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 50,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              marginRight: 5,
              fontFamily: "Raleway",
              fontSize: 16,
            }}
          >
            I already have an account
          </Text>
          <Ionicons
            name="arrow-forward-circle-outline"
            size={24}
            color="#004CFF"
          />
        </Pressable>
      </View>
    </View>
  );
}
