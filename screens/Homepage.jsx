import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

import { Feather } from "@expo/vector-icons";

import { SafeAreaView } from "react-native-safe-area-context";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import Category from "../components/Category";
import axios from "axios";
import Recipes from "../components/Recipes";

const Homepage = () => {
  const navigation = useNavigation();

  const [activeCategory, setActiveCategory] = useState("Beef");

  const [categories, setCategories] = useState([]);
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getCategories();
    getRecipes();
  }, []);

  const handleChangeCategory = (category) => {
    getRecipes(category);
    setActiveCategory(category);
    setMeals([]);
  };

  const getCategories = async () => {
    try {
      const response = await axios.get(
        `https://themealdb.com/api/json/v1/1/categories.php`
      );
      // console.log("got categories: ", response.data);
      if (response && response.data) {
        setCategories(response.data.categories);
      }
    } catch (err) {
      console.log("error: ");
    }
  };
  const getRecipes = async (category = "Beef") => {
    try {
      const response = await axios.get(
        `https://themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      //  console.log("got recipes: ", response.data);
      if (response && response.data) {
        setMeals(response.data.meals);
      }
    } catch (err) {
      console.log("error: ");
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <SafeAreaView>
        <StatusBar style="dark" />
        <ScrollView
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 50 }}
          style={{ paddingTop: 14 }}
        >
          <View style={styles.top}>
            <View style={styles.header}>
              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}
              >
                <Image
                  alt=""
                  source={{
                    uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
                  }}
                  style={styles.avatar}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}
              >
                <Feather name="bell" size={24} color="orange" />
              </TouchableOpacity>
            </View>
            <View style={styles.greeting}>
              <Text style={styles.greetingTitle}>Hello, Recruiter!</Text>
              <Text style={styles.greetingText}>You have 3 New Recipes </Text>
            </View>

            <View
            //style={styles.search}
            >
              <TextInput
                placeholder="Search"
                placeholderTextColor="#9695b0"
                style={styles.searchInput}
              />
              <View style={styles.searchFloating}>
                <TouchableOpacity>
                  <View style={styles.searchButton}>
                    <Feather name="search" size={20} color="white" />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity style={{ paddingTop: 12, position: "relative" }}>
              <Image
                source={require("../assets/ban.webp")}
                style={{ height: 120, width: "100%", borderRadius: 12 }}
              />
              <Text
                style={{
                  color: "white",
                  fontSize: 15,
                  position: "absolute",
                  width: "60%",
                  top: "20%",
                  right: "0%",
                  fontWeight: "700",
                }}
              >
                Make Informed food choices when you make your meal
              </Text>
              <Text
                style={{
                  color: "white",
                  fontSize: 10,
                  position: "absolute",
                  width: "50%",
                  top: "50%",
                  right: "10%",
                }}
              >
                Get Nutritional recomendations on health eating
              </Text>
              <View
                style={{
                  position: "absolute",
                  fontSize: 10,
                  bottom: "10%",
                  right: "38%",
                }}
              >
                <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                  <View style={styles.btnXS}>
                    <Text style={styles.btnXSText}>Sign Up</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
            <Category
              categories={categories}
              activeCategory={activeCategory}
              handleChangeCategory={handleChangeCategory}
              // setActiveCategory={setActiveCategory}
            />
            <Recipes meals={meals} categories={categories} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  btnXS: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderWidth: 1,
    backgroundColor: "red",
    borderColor: "orange",
  },
  btnXSText: {
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "600",
    color: "#fff",
  },
  top: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  greeting: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.15)",
    marginBottom: 6,
  },
  greetingTitle: {
    fontSize: 32,
    fontWeight: "800",
    color: "#1a2525",
  },
  greetingText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#1a2525",
    marginTop: 2,
  },
  searchInput: {
    height: 56,
    backgroundColor: "#f3f3f6",
    paddingHorizontal: 16,
    color: "#1a2525",
    fontSize: 18,
    borderRadius: 9999,
  },
  searchFloating: {
    position: "absolute",
    top: 0,
    right: 0,
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
  },
  searchButton: {
    alignSelf: "center",
    width: 44,
    height: 44,
    borderRadius: 9999,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    paddingVertical: 8,
    paddingHorizontal: 22,
    flex: 1,
  },
  contentHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
  },
  contentTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#1a2525",
  },
  contentLink: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1a2525",
  },
  contentPlaceholder: {
    borderStyle: "dashed",
    borderWidth: 4,
    borderColor: "#e5e7eb",
    flex: 1,
    borderRadius: 8,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerImg: {
    width: 40,
    height: 40,
    borderRadius: 9999,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 9999,
  },
});
