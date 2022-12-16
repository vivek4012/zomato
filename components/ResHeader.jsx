import { View, Text, Image } from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/solid";
import Food from "./Food";

const ResHeader = ({ res }) => {
  const { title, url, recent, ratings_no, short, location, id, rating, food } =res;
  console.log(food[1].id2)
  const com = food.map((x) => {
    return (
      <View key={x.id2}>
        <Food
          name={x.name}
          image={x.image}
          price={x.price}
          type={x.type}
          best={x.best}
          id={x.id2}
        />
      </View>
    );
  });
  return (
    <View classname="">
      <Image source={{ uri: url }} className=" w-100 h-40  " />
      <View className="flex-row items-center justify-between ">
        <View>
          <Text className="font-bold text-3xl"> {title}</Text>
          <Text className=""> {short}</Text>
          <Text className="text-slate-400"> {location}</Text>
        </View>
        <View className="mr-4 items-center shadow-2xl border rounded">
          <Text className="bg-green-800 px-3 py-1 rounded-t text-white align-middle ">
            {rating} <StarIcon size={15} color="white" />
          </Text>
          <Text className=" px-2 ">{ratings_no} </Text>
          <Text>reviews</Text>
        </View>
      </View>
      <View className="pb-14">{com}</View>
    </View>
  );
};

export default ResHeader;
