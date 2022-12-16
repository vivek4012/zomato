import React, { useLayoutEffect } from "react";
import { SafeAreaView, Text, View, Image,TextInput,ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  ChevronDownIcon,
  UserIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassCircleIcon,
} from "react-native-heroicons/outline";

import Categories from "../components/Categories";
import Resturants from "../components/Resturants";
const Home = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="mt-11 ">
      <View className=" flex-row items-center mx-4 space-x-4 ">
        <Image
          source={{
            uri: "https://images.prismic.io/dbhq-deliveroo-riders-website/ed825791-0ba4-452c-b2cb-b5381067aad3_RW_hk_kit_importance.png?auto=compress,format&rect=0,0,1753,1816&w=1400&h=1450",
          }}
          className="h-10 w-10 rounded-full p-6  bg-slate-300"
        />
        <View className="flex-1">
          <Text className=" font-bold text-gray-500 text-xs ">
            deliver now!
          </Text>
          <Text className="text-xl  font-bold  items-center ">
            current location
            <ChevronDownIcon size={20} color="#f87171"   />
          </Text>
        </View>
            <UserIcon size={35} color="#f87171" />
        
      </View>
      <View className="flex-row items-center p-2 space-x-2">
        <View className="flex-row space-x-2 flex-1 bg-slate-200 p-2 ">
      <MagnifyingGlassCircleIcon size={30}  color="#f87171"/>
      <TextInput placeholder="Resturants and cuisines"   /> 
        </View>
         <AdjustmentsVerticalIcon   color="#f87171"   />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} >
        {/* <Categories/> */}
      <Resturants/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
