import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React from "react";

const Loading = (props) => {
  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator {...props} />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({});
