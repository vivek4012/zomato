import { View, Text, TouchableOpacity, Image, ScrollView,StyleSheet } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { XCircleIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const Basketcomponent = () => {
  const res = useSelector((state) => state.cart.rest);
  const food = useSelector((state) => state.cart.itemlist);

  const Com = food.map((x) => {
    return (
      <View key= {x.id}>

      <Component
        image={x.image}
        name={x.name}
        quantity={x.quantity}
        price={x.price}
        key= {x.id}
        />
        </View>
    );
  });

  return (
    <View className=" " >
      <View className=" px-6 py-2 bg-slate-100 shadow-xl">
        <Text className="font-bold text-4xl text-center ">{res.title} </Text>
        <Text className=" text-center   text-gray-500  "> order summary </Text>
      </View>
      <ScrollView>{Com}</ScrollView>

   
    </View>
  );
};

export default Basketcomponent;

function Component({ image, name, quantity, price }) {
  return (
    <View> 
    <View className=" flex-row items-center justify-between px-4 py-2">
      <Image source={{ uri: image }} className="w-14 h-14 rounded-full " />
      <Text className=" font-bold"> {name}</Text>
      <Text className="  "> X {quantity} </Text>
      <Text className="  "> ₹{price} </Text>
      
    </View>
    <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
    </View>
  );
}
