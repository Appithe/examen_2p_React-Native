import { StatusBar } from "expo-status-bar";
import React from "react";
import Login from "./src/components/login";
import Registro from "./src/components/registro";
import Resumen from "./src/components/resumen";
import Prestamos from "./src/components/fo";

import { createStackNavigator } from "@react-navigation/stack";

import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
          />
          <Stack.Screen
            name="Register"
            component={Registro}
          />
          <Stack.Screen
            name="Summary"
            component={Resumen}
          />
          <Stack.Screen
            name="Quotation"
            component={Prestamos}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}