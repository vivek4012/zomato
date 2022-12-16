import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { StarIcon, ArrowTrendingUpIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { cartActions } from "../features/CartSlice";
const ResturantCard = ({ id, url, title, short, rating, recent,lat,lon,location }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  function res() {
    navigation.navigate("Restaurant", { id });
    dispatch(
      cartActions.addres({
        title,
        short,
        lat,
        lon,
        location,
        id
      })
    );
  }

  return (
    <TouchableOpacity className="  bg-white rounded" onPress={res}>
      <Image
        source={{
          uri: url,
        }}
        className="h-40 w-100 rounded-t-[5]  "
      />
      <View className="p-2">
        <View className="flex-row justify-between my-3 ">
          <View>
            <Text className="font-bold text-lg">{title}</Text>
            <Text>{short}</Text>
          </View>
          <View className="flex-row">
            <Text className="mx-1"> {rating} </Text>
            <StarIcon size={20} color="green" />
          </View>
        </View>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <View className="flex-row my-2">
          <View className="bg-sky-800 rounded-full">
            <ArrowTrendingUpIcon size={20} color="white" />
          </View>
          <Text> {recent}+ orders placed here recently </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ResturantCard;
