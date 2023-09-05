import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";

import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

//import YouTubeIframe from "react-native-youtube-iframe";
import {
  StyleSheet,
  View,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Text,
  ImageBackground,
  Image,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Stats from "../components/Stats";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Loading from "../components/Loading";

export default function RecipeDetails(props) {
  let item = props.route.params;
  const [isFavourite, setIsFavourite] = useState(true);
  const navigation = useNavigation();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMealData(item.idMeal);
  }, []);

  const getMealData = async (id) => {
    try {
      const response = await axios.get(
        `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      //   console.log('got meal data: ',response.data);
      if (response && response.data) {
        setMeal(response.data.meals[0]);
        setLoading(false);
      }
    } catch (err) {
      console.log("error: ", err.message);
    }
  };

  const ingredientsIndexes = (meal) => {
    if (!meal) return [];
    let indexes = [];
    for (let i = 1; i <= 20; i++) {
      if (meal["strIngredient" + i]) {
        indexes.push(i);
      }
    }

    return indexes;
  };

  const getYoutubeVideoId = (url) => {
    const regex = /[?&]v=([^&]+)/;
    const match = url.match(regex);
    if (match && match[1]) {
      return match[1];
    }
    return null;
  };

  return (
    <ImageBackground
      source={require("../assets/orange.jpeg")}
      style={styles.backgroundImage}
    >
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" />

        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.container}>
            {/* Navigation////////////////////////////////////////////////////////////////////////////////////////////// */}
            <View style={styles.header}>
              <View style={styles.headerAction}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Feather name="arrow-left" size={24} />
                </TouchableOpacity>
              </View>

              <Text style={styles.headerTitle}>Recipe Details</Text>

              <View style={[styles.headerAction, { alignItems: "flex-end" }]}>
                <TouchableOpacity>
                  <Feather name="more-vertical" size={24} />
                </TouchableOpacity>
              </View>
            </View>

            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 100 }}
            >
              <View style={styles.photos}>
                <View style={styles.photosTop}>
                  <TouchableOpacity
                    onPress={() => {
                      setIsFavourite(!isFavourite);
                    }}
                    style={styles.photosTopItem}
                  >
                    <AntDesign
                      name="star"
                      size={24}
                      color={isFavourite ? "gray" : "red"}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      // handle onPress
                    }}
                    style={styles.photosTopItem}
                  >
                    <Feather color="#000" name="share" size={16} />
                  </TouchableOpacity>
                </View>

                <Image
                  alt=""
                  source={{ uri: item.strMealThumb }}
                  style={styles.photosImg}
                />
              </View>
              {/* Details////////////////////////////////////////////////////////////////////////////////// */}
              <View style={{ paddingTop: 8 }}>
                {loading ? (
                  <Loading size="large" style={{ marginTop: 8 }} />
                ) : (
                  <View
                    style={{
                      paddingVertical: 8,
                      flex: 1,
                      backgroundColor: "white",
                      borderRadius: 10,
                      height: "100%",
                    }}
                  >
                    {/* name and area */}
                    <View
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text style={styles.text1}>{meal?.strMeal}</Text>
                      <Text style={styles.text2}>{meal?.strArea}</Text>
                    </View>

                    {/* misc */}
                    <View style={styles.flexRow}>
                      <View style={styles.iconContainer}>
                        <View style={styles.iconCircle}>
                          <Ionicons
                            name="timer-outline"
                            size={24}
                            color="black"
                          />
                        </View>
                        <View style={styles.iconText}>
                          <Text style={styles.iconText1}>35</Text>
                          <Text style={styles.iconText2}>Mins</Text>
                        </View>
                      </View>
                      <View style={styles.iconContainer}>
                        <View style={styles.iconCircle}>
                          <Ionicons name="people" size={24} color="black" />
                        </View>
                        <View style={styles.iconText}>
                          <Text style={styles.iconText1}>3</Text>
                          <Text style={styles.iconText2}>Serving</Text>
                        </View>
                      </View>
                      <View style={styles.iconContainer}>
                        <View style={styles.iconCircle}>
                          <SimpleLineIcons
                            name="fire"
                            size={24}
                            color="black"
                          />
                        </View>
                        <View style={styles.iconText}>
                          <Text style={styles.iconText1}>102</Text>
                          <Text style={styles.iconText2}>Calories</Text>
                        </View>
                      </View>
                      <View style={styles.iconContainer}>
                        <View style={styles.iconCircle}>
                          <MaterialCommunityIcons
                            name="rotate-360"
                            size={24}
                            color="black"
                          />
                        </View>
                        <View style={styles.iconText}>
                          <Text style={styles.iconText1}>Difficult</Text>
                          <Text style={styles.iconText2}>Cooking Ease</Text>
                        </View>
                      </View>
                    </View>

                    {/* ingredients */}
                    <View style={{ display: "flex", alignItems: "center" }}>
                      <Text style={styles.ingredientsText}>Ingredients</Text>
                      <View style={{ gap: 2 }}>
                        {ingredientsIndexes(meal).map((i) => {
                          return (
                            <View
                              key={i}
                              style={{
                                paddingHorizontal: 8,
                                paddingVertical: 2,
                                backgroundColor: "#fba311",
                                display: "flex",
                                justifyContent: "space-evenly",
                                borderRadius: 6,
                                minWidth: 240,
                              }}
                            >
                              <View style={styles.amberCircle} />
                              <View
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  flexDirection: "row",
                                  //gap: "40%",
                                }}
                              >
                                <Text style={styles.ingredientsText1}>
                                  {meal["strMeasure" + i]}
                                </Text>
                                <Text style={styles.ingredientsText2}>
                                  {meal["strIngredient" + i]}
                                </Text>
                              </View>
                            </View>
                          );
                        })}
                      </View>
                    </View>

                    {/* instructions */}
                    <View
                      style={{
                        display: "flex",
                        alignItems: "center",
                        paddingHorizontal: 6,
                        paddingVertical: 6,
                        minHeight: "100%",
                        overflow: "scroll",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 19,
                          fontWeight: "500",
                        }}
                      >
                        Instructions
                      </Text>
                      <Text style={styles.instructions}>
                        {meal?.strInstructions}
                      </Text>
                    </View>

                    {/* recipe video */}
                    {/* {meal.strYoutube && (
                      <View style={styles.spaceY4}>
                        <Text style={styles.videoText}>Recipe Video</Text>
                        <View>
                          <YouTubeIframe
                            videoId={getYoutubeVideoId(meal.strYoutube)}
                            height={hp(30)}
                          />
                        </View>
                      </View>
                    )} */}
                  </View>
                )}
              </View>
            </ScrollView>
          </View>
        </SafeAreaView>

        {/* bottomsheet */}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1, // To fill the entire parent container
    resizeMode: "cover", // or 'contain' to control image sizing
    justifyContent: "center", // Align content vertically in the center
  },
  container: {
    paddingVertical: 0,
    paddingHorizontal: 16,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 12,
    paddingHorizontal: 16,
    paddingBottom: 48,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontSize: 19,
    fontWeight: "600",
    color: "#000",
  },
  headerAction: {
    width: 40,
    height: 40,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  photos: {
    marginTop: 12,
    position: "relative",
    height: 240,
    overflow: "hidden",
    borderRadius: 12,
  },
  photosTop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  photosTopItem: {
    width: 40,
    height: 40,
    borderRadius: 9999,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  photosImg: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    width: "100%",
    height: 240,
  },
  ////////

  spaceY2: {
    paddingTop: 8,
    paddingLeft: 8,
  },
  text1: {
    fontSize: 22,
    fontWeight: "500",
    flex: 1,
    color: "gray",
  },
  text2: {
    fontSize: 12,
    fontWeight: "200",
    flex: 1,
    color: "gray",
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "center",
  },
  iconContainer: {
    borderRadius: 50,
    padding: 6,
  },
  iconCircle: {
    height: 50,
    width: 50,
    backgroundColor: "yellow",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  iconText: {
    alignItems: "center",
    // paddingHorizontal: 4,
  },
  iconText1: {
    fontSize: 8,
    fontWeight: "200",
  },
  iconText2: {
    fontSize: 8,
    fontWeight: "300",
    color: "gray",
  },
  amberBg: {
    flex: 1,
    borderRadius: 50,
    padding: 2,
    backgroundColor: "#FFD700",
  },
  circle: {
    height: 16,
    width: 16,
    backgroundColor: "white",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  flex: {
    flexDirection: "row",
  },
  ingredientsText: {
    fontSize: 15,
    fontWeight: "bold",
    flex: 1,
    color: "#666",
  },
  ingredientsText1: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#666",
  },
  ingredientsText2: {
    fontSize: 17,
    fontWeight: "400",
    color: "#999",
  },
  spaceY4: {
    marginBottom: 16,
  },
  instructionsText: {
    fontSize: 17,
    fontWeight: "bold",
    flex: 1,
    color: "#666",
  },
  instructions: {
    fontSize: 16,
    color: "#666",
  },
  videoText: {
    fontSize: 25,
    fontWeight: "bold",
    flex: 1,
    color: "#666",
  },
});
