import {
  View,
  Text,
  ScrollView,
  Image,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import Data from "../components/data";
import ResHeader from "../components/ResHeader";
import { useSelector } from "react-redux";
import Basketpop from "../components/Basketpop";

const Restaurant = () => {
  const {
    params: { id },
  } = useRoute();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const res = Data.find((x) => x.id === id);
  const cartitems = useSelector((state) => state.cart.itemlist);
  return (
    <SafeAreaView>
       { (cartitems.length>0) && <Basketpop />}
      <ScrollView style={styles.container}>
        <ResHeader res={res} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Restaurant;
const styles = StyleSheet.create({
  container: {
  marginTop: 35,    
  },
});
