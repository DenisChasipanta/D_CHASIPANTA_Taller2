import React from "react";
import { View,Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/screens/Home";
import MyCart from "./components/screens/MyCart";
import ProductoInfo from "./components/screens/ProductoInfo";
import LoginScreen from "./components/screens/LoginScreen";

const App= ()=>{
  const Stack =createNativeStackNavigator();
  return(
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="MyCart" component={MyCart}/>
        <Stack.Screen name="ProductoInfo" component={ProductoInfo}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App