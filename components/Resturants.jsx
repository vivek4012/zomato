import { View, Text, ScrollView } from "react-native";
import React from "react";
import ResturantCard from "./ResturantCard";
import Data from "./data";
const Resturants = () => {
  const com = Data.map((x) => {
    return (
      
      <View key={x.id}
        className="p-2  rounded-lg shadow-2xl my-2"
        style={{
          shadowColor: "#171717",
          shadowOffset: { width: -2, height: 3 },
          shadowOpacity: 0.2,
          shadowRadius: 3,
        }}
      >
        <ResturantCard
          id={x.id}
          title={x.title}
          short={x.short}
          url={x.url}
          rating={x.rating}
          recent={x.recent}
          key={x.id}
          lat={x.lat}
          lon={x.lon}
          location={x.location}
        />
      </View>
    );
  });
  return <View className="pb-12">{com}</View>;
};

export default Resturants;
