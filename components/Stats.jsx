import React from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

const Stats = ({ setMeal, meal }) => {
  return (
    <View style={styles.stats}>
      <View style={styles.statsRow}>
        <View style={styles.statsItem}>
          <View style={styles.statsItemIcon}>
            <Ionicons name="people" size={24} color="black" />
          </View>

          <View>
            <Text style={styles.statsItemLabel}></Text>

            <Text style={styles.statsItemValue}></Text>
          </View>
        </View>

        <View style={styles.statsItem}>
          <View style={styles.statsItemIcon}>
            <Ionicons name="timer-outline" size={24} color="black" />
          </View>

          <View>
            <Text style={styles.statsItemLabel}>Mins</Text>

            <Text style={styles.statsItemValue}>8</Text>
          </View>
        </View>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statsItem}>
          <View style={styles.statsItemIcon}>
            <SimpleLineIcons name="fire" size={24} color="black" />
          </View>

          <View>
            <Text style={styles.statsItemLabel}>Calories</Text>

            <Text style={styles.statsItemValue}>22</Text>
          </View>
        </View>

        <View style={styles.statsItem}>
          <View style={styles.statsItemIcon}>
            <MaterialCommunityIcons name="rotate-360" size={24} color="black" />
          </View>

          <View>
            <Text style={styles.statsItemLabel}>Expert</Text>

            <Text style={styles.statsItemValue}>Difficulty</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Stats;
const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#1d1d1d",
    marginBottom: 12,
  },
  stats: {
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "center",
  },
  statsRow: {
    flexDirection: "row",
    marginHorizontal: -6,
  },
  statsItem: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: "#fff",
    marginHorizontal: 6,
    marginBottom: 12,
  },
  statsItemIcon: {
    backgroundColor: "#faad55",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 46,
    height: 46,
    marginRight: 8,
    borderRadius: 8,
  },
  statsItemLabel: {
    fontSize: 15,
    fontWeight: "500",
    color: "#8e8e93",
    marginBottom: 2,
  },
  statsItemValue: {
    fontSize: 19,
    fontWeight: "600",
    color: "#081730",
  },
});
