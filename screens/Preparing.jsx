 import { View, Text,Image,StyleSheet} from 'react-native'
 import React, { useEffect } from 'react'
 import * as Animatable from 'react-native-animatable';
import * as Progress from "react-native-progress"
import { useNavigation } from '@react-navigation/native';
 const Preparing = () => {
  const navigation =useNavigation()
useEffect(()=>{
setTimeout(()=>{
    navigation.navigate("Delivery")
},4000)
},[])
   return (
     <View style={styles.container}>
       
       <Animatable.Image
       source={require("../assets/cars.gif")}
       animation="slideInUp"
       iterationCount={1}
       />
     <Animatable.Text
       iterationCount={1}
style={styles.text}
       animation="slideInUp"
       >waiting for resturant to coform your order!</Animatable.Text>
       <Progress.Circle size={40} indeterminate={true} color="white"/>
     </View>
   )
 }
 
 export default Preparing
 const styles = StyleSheet.create({
    container: {
   flex:1,
  backgroundColor:"#f87171",
      justifyContent:"center",
      alignItems:"center"
    },
   text:{
     fontWeight:"bold",
     fontSize:20,
     color:"white"
   }
  });