import { View, Text, useWindowDimensions, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
const Basketbottom = () => {
  const window = useWindowDimensions();
  const cartitems = useSelector((state) => state.cart.itemlist);
const navigation = useNavigation()
  const total_quantity = cartitems.reduce((x, y) => {
    return x + y.quantity;
  }, 0);

  const total_price = cartitems.reduce((x, y) => {
    return x + y.price;
  }, 0);
  return (
    <View style={{ width: window.width }}>
      <View className=" p-3 bg-red-100">
        <View className="flex-row justify-between item-center  py-1 ">
          <Text className="font-bold"> sub total </Text>
          <Text>{total_price} ₹ </Text>
        </View>
        <View className="flex-row justify-between item-center  py-1   ">
          <Text className="font-bold"> delivery cost </Text>
          <Text> 50 ₹ </Text>
        </View>
        <View className="flex-row justify-between item-center  py-1 ">
          <Text className="font-bold"> total </Text>
          <Text> {total_price + 50} ₹ </Text>
        </View>
        <TouchableOpacity  onPress={()=>navigation.navigate("Preparing") }>  
        <View className="py-2">
        
          <Text className="text-center bg-red-400 py-2 rounded-lg">place order now</Text>
        </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Basketbottom;
