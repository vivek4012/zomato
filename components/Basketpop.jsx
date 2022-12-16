import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { ShoppingBagIcon  } from "react-native-heroicons/solid"
import { useNavigation } from "@react-navigation/native";
const Basketpop = () => {
  
  const navigation = useNavigation()

  const cartitems = useSelector((state) => state.cart.itemlist);

  const total_quantity = cartitems.reduce((x, y) => {
    return x + y.quantity;
  }, 0);

  const total_price = cartitems.reduce((x, y) => {
    return x + y.price;
  }, 0);
  
  return (
    <View className=" absolute  bottom-5 w-full z-10 px-10" >
      <View className=" bg-red-400 z-10 rounded  py-2 px-8 ">
        <TouchableOpacity onPress={()=>navigation.navigate("Basket") } >
          <View className="flex-row justify-between">
            <Text className="text-white bg-red-600 rounded  px-2">{total_quantity}</Text>
            <Text className="text-white"> {total_price}₹</Text>
            <Text className="text-white">view cart <ShoppingBagIcon size={12} color="white" /></Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Basketpop;
