import { View, Text, Dimensions } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Carousal from "react-native-snap-carousel";
import TrendingCard from "./TrendingCard";

var { width } = Dimensions.get("window");

export default function TrendingNews({ data, label }) {
  // console.log("Trending Movies", data);
  const navigation = useNavigation();

  const handleClick = (item) => {
    navigation.navigate("NewsDetails", item);
  };

  return (
    <View className="mt-4 mb-4 ">
      <View className="px-4 mb-4 flex-row justify-between items-center">
        <Text
          className="text-xl "
          style={{
            fontFamily: "SpaceGroteskBold",
          }}
        >
          {label}
        </Text>

        <Text
          className="text-base text-green-800 "
          style={{
            fontFamily: "SpaceGroteskBold",
          }}
        >
          View all
        </Text>
      </View>
      {/* Carousal */}
      <Carousal
        data={data}
        renderItem={({ item }) => (
          <TrendingCard item={item} handleClick={handleClick} />
        )}
        firstItem={1}
        inactiveSlideScale={0.86}
        inactiveSlideOpacity={0.6}
        sliderWidth={width}
        itemWidth={width * 0.8}
        slideStyle={{ display: "flex", alignItems: "center" }}
      />
    </View>
  );
}
