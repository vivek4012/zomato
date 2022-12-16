import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Basketcomponent from "../components/Basketcomponent";
import Basketbottom from "../components/Basketbottom";
const Basket = () => {
  return (
    <View style={styles.container}>
      <Basketcomponent />
      <View style={styles.bottom}>
        <Basketbottom/>
      </View>
    </View>
  );
};

export default Basket;
const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    
  },
  bottom:{
    position:"absolute",
    bottom:0,
    
  }
});
