import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const Welcome = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => navigation.navigate("Homepage"), 2500);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "orange",
      }}
    >
      <StatusBar style="light" />
      <SafeAreaView>
        <View
          style={{
            width: "100%",
            paddingHorizontal: 1,
          }}
        >
          <View>
            <Image
              source={require("../assets/soul.png")}
              style={{ height: 330, maxWidth: "100%" }}
              resizeMode="contain"
            />
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontWeight: "700", fontSize: 35, color: "white" }}>
            Your Tasty Treat
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
