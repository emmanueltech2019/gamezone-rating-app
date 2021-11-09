import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={Home}
          options={{ 
            headerStyle: { 
              backgroundColor: "#eee" 
            },
            headerTintColor:"#444",
            headerShown: false
          }}
        />
        <Stack.Screen
          name="ReviewDetails"
          component={ReviewDetails}
          options={{ 
            headerStyle: { 
              backgroundColor: "#eee", 
              height: 60 
            }, 
            headerTintColor:"#444",
          }}
        />
      </Stack.Navigator>
  );
}

export default HomeStack;
