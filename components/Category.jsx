import {
  StyleSheet,
  View,
  ScrollView,
  StatusBar,
  Animated,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import React from "react";

const Category = ({ categories, activeCategory, handleChangeCategory }) => {
  return (
    <View style={styles.categories}>
      <View style={styles.categoriesHeader}>
        <Text style={styles.categoriesTitle}>Food categories</Text>

        <TouchableOpacity
          onPress={() => {
            // handle onPress
          }}
          style={styles.categoriesAction}
        >
          <Text style={styles.categoriesActionText}>View All</Text>

          <Feather color="#706F7B" name="chevron-right" size={16} />
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.categoriesContent}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {categories.map((cat, index) => {
          let isActive = cat.strCategory == activeCategory;

          let activeButtonClass = isActive ? "orange" : "blue";
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                handleChangeCategory(cat.strCategory);
              }}
            >
              <View style={[styles.card, { backgroundColor: "#F7EDD0" }]}>
                <Image
                  source={{ uri: cat.strCategoryThumb }}
                  style={styles.cardImg}
                />

                <Text style={styles.cardLabel}>{cat.strCategory}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  categories: {
    marginTop: 20,
  },
  categoriesContent: {
    paddingVertical: 12,
  },
  categoriesHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  categoriesTitle: {
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 28,
    color: "#323142",
  },
  categoriesAction: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  categoriesActionText: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
    color: "#706f7b",
    marginRight: 2,
  },
  card: {
    width: 80,
    paddingVertical: 16,
    paddingHorizontal: 6,
    borderRadius: 12,
    flexDirection: "column",
    alignItems: "center",
    marginHorizontal: 6,
  },

  cardImg: {
    width: 40,
    height: 40,
    marginBottom: 12,
  },
  cardLabel: {
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 18,
    color: "#252117",
  },
});
