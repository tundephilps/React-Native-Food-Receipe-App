import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import Feather from "react-native-vector-icons";
import FontAwesome from "react-native-vector-icons";

const Ingredents = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Ingredients</Text>
        </View>

        <View
        //   style={[styles.radioWrapper, { borderTopWidth: 0 }]}
        >
          <TouchableOpacity>
            <View style={[styles.radio, styles.radioActive]}>
              {/* <View style={styles.radioIcon}>
                <Feather color="#fff" name="twitter" size={20} />
              </View> */}

              {/* <Text style={styles.radioLabel}>Beans</Text> */}

              {/* <View
               style={[styles.radioCheck, styles.radioCheckActive]}
              >
                <FontAwesome
                  color="#fff"
                  name="check"
                  style={{ display: "none" }}
                  size={12}
                />
              </View> */}
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Ingredents;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
  },
  header: {
    paddingLeft: 24,
    paddingRight: 24,
    marginBottom: 12,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#1d1d1d",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "500",
    color: "#929292",
  },
  radio: {
    position: "relative",
    paddingTop: 12,
    paddingRight: 24,
    paddingBottom: 12,
    paddingLeft: 0,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  radioWrapper: {
    marginLeft: 24,
    borderTopWidth: 1,
    borderColor: "#e8e8e8",
  },
  radioIcon: {
    width: 32,
    height: 32,
    borderRadius: 12,
    backgroundColor: "#000",
    marginRight: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  radioLabel: {
    fontSize: 17,
    fontWeight: "600",
    color: "#222222",
    marginBottom: 2,
  },
  radioCheck: {
    width: 24,
    height: 24,
    borderRadius: 9999,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "auto",
    borderWidth: 1,
    borderColor: "#007bff",
  },
  radioCheckActive: {
    backgroundColor: "#007bff",
  },
});
