import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Restaurant from "./screens/Restaurant";
import Basket from "./screens/Basket";
import Preparing from "./screens/Preparing";
import Delivery from "./screens/Delivery";
import {store} from "./Store"
import { Provider } from "react-redux";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Provider store={store} >
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Restaurant" component={Restaurant} />
          <Stack.Screen name="Basket" component={Basket} 
          options={{presentation:"modal",headerShown:false}} />
           <Stack.Screen name="Preparing" component={Preparing} 
          options={{presentation:"modal",headerShown:false}} />
          <Stack.Screen name="Delivery" component={Delivery} 
          options={{presentation:"modal",headerShown:false}} />
        </Stack.Navigator>
        </Provider>
    </NavigationContainer>
  );
}
