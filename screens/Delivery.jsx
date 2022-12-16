import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Deliverycomponent from "../components/Deliverycomponent"
const Delivery = () => {
  return (
    <View style={styles.container}>
      <Deliverycomponent/>
    </View>
  )
}

export default Delivery

const styles = StyleSheet.create({
    container: {
   flex:1,
   backgroundColor:"#f87171"    
    },
  });
  