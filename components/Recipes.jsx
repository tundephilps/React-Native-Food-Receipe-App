import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import MasonryList from "@react-native-seoul/masonry-list";
import Loading from "./Loading";
import { useNavigation } from "@react-navigation/native";

const Recipes = ({ categories, meals }) => {
  const navigation = useNavigation();

  return (
    <View>
      <Text style={{ fontSize: 22, fontWeight: "600", color: "gray" }}>
        Recipes
      </Text>
      <View>
        {categories.length == 0 || meals.length == 0 ? (
          <Loading size="large" style={{ marginTop: 20 }} />
        ) : (
          <MasonryList
            data={meals}
            keyExtractor={(item) => item.idMeal}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, i }) => (
              <RecipeCard item={item} index={i} navigation={navigation} />
            )}
            // refreshing={isLoadingNext}
            // onRefresh={() => refetch({ first: ITEM_CNT })}
            onEndReachedThreshold={0.1}
          />
        )}
      </View>
    </View>
  );
};

export default Recipes;

const RecipeCard = ({ item, index, navigation }) => {
  let isEven = index % 2 == 0;
  return (
    <View>
      <TouchableOpacity
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: 8,
          gap: 4,
          width: "100%",
          paddingLeft: isEven ? 0 : 8,
          paddingRight: isEven ? 8 : 0,
        }}
        onPress={() => navigation.navigate("RecipeDetails", { ...item })}
      >
        <Image
          source={{ uri: item.strMealThumb }}
          style={{
            width: "100%",
            height: index % 3 == 0 ? 220 : 300,
            borderRadius: 35,
          }}
        />

        <Text style={{ fontSize: 13, fontWeight: "400", color: "gray" }}>
          {item.strMeal.length > 20
            ? item.strMeal.slice(0, 20) + "..."
            : item.strMeal}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});
