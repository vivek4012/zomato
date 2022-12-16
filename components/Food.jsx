import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState,useEffect } from "react";
import { StopIcon, PlusIcon, MinusIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../features/CartSlice";
const Food = ({ name, id, image, price, type, best }) => {
  
  const dispatch = useDispatch();
  const cartitems = useSelector((state) => state.cart.itemlist);
  const current = cartitems.find((item) => item.id == id);

  function handel1() {
    dispatch(
      cartActions.add({
        id,
        name,
        image,
        price,
      })
    );
  }

  function add() {
    dispatch(
      cartActions.add({
        id,
        name,
        image,
        price,
      })
    );
  }
  function remove() {
    dispatch(
      cartActions.remove({
        id,
        price
      })
    );
  
  }

  
  return (
    <View className=" flex-row justify-between p-2 ">
      <View>
        <Text className="text-xl font-bold">{name}</Text>
        {best && (
          <View>  
          <Text style={{backgroundColor: '#f87171', alignSelf: 'flex-start', color:"white" ,paddingHorizontal:5, paddingVertical:1, borderRadius:4}}>
            Bestseller{" "}
          </Text>
          </View>
        )}
        <Text>{price}₹</Text>
        <View className=" flex-row items-center ">
          <StopIcon size={25} color={type} />
        </View>
      </View>
      <View className="relative">
        <Image source={{ uri: image }} className=" h-20 w-20  rounded" />
        {!current && (
          <TouchableOpacity
            className="absolute bottom-0 left-3"
            onPress={handel1}
          >
            <Text className=" text-red-500 border-black bg-red-200 px-2 py-1 rounded  ">
              ADD <PlusIcon size={10} color="red" />
            </Text>
          </TouchableOpacity>
        )}
        {current && (
          <View className="absolute bottom-0 flex-row items-center content-center bg-red-300 rounded px-2 py-1 left-1 border-black">
            <TouchableOpacity className=" " onPress={remove}>
              <MinusIcon size={10} color="red" className="py-1" />
            </TouchableOpacity>
            <Text className="px-3"> {current && current.quantity}</Text>
            <TouchableOpacity className="  " onPress={add}>
              <PlusIcon size={10} color="red" className="py-1" />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default Food;
