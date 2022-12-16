import {
  View,
  Text,
  SafeAreaView,
  useWindowDimensions,
  Image,
  StyleSheet,
} from "react-native";
import React from "react";
import { XCircleIcon } from "react-native-heroicons/outline";
import * as Progress from "react-native-progress";
import { useSelector } from "react-redux";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
const Deliverycomponent = () => {
  const window = useWindowDimensions();
  const selector = useSelector((state) => state.cart.rest);

  return (
    <View style={{ width: window.width, marginTop: 40 }}>
      <View className="flex-row justify-between p-5 items-center">
        <Text className="font-bold text-xl underline ">order help</Text>
        <XCircleIcon size={35} color="white" />
      </View>
      <View className="pb-1 px-5"> 
      <View className="p-5  bg-white  rounded-xl">
        <View className="flex-row justify-between ">
          <View>
            <Text className="text-gray-400">Estimated Arrival </Text>
            <Text className="font-bold text-3xl py-2 ">30-40 Minutes </Text>
            <Progress.Bar
              size={30}
              color="#f87171"
              indeterminate={true}
              className=" "
            />
          </View>
          <View>
            <Image
              source={require("../assets/rider.png")}
              className="h-20 w-20 z-10"
            />
          </View>
        </View>
        <Text className="py-2">
          your order at {selector.title} is being prepared
        </Text>
        <Text className="py-1">
          please be relaxed while we assign you a delivery partner
        </Text>
      </View>
      </View>
      {/* <MapView
        initialRegion={{
          latitude: selector.lat,
          longitude: selector.lon,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        style={{ width: window.width, height: window.height }}
        mapType="mutedStandard"
      >
        <Marker
          coordinate={{ latitude: selector.lat, longitude: selector.lon }}
          title={selector.title}
          identifier="origin"
          pinColor="red"
        />
      </MapView> */}
    </View>
  );
};

export default Deliverycomponent;

const styles = StyleSheet.create({
  map: {
    width: 100,
    height: 100,
  },
});
