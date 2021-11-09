import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "../screens/About";

const Stack = createNativeStackNavigator();

function App() {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="About"
          component={About}
          options={{ 
            headerStyle: { 
              backgroundColor: "#eee" 
            },
            headerTintColor:"#444",
            headerShown: false
          }}
        />
        
      </Stack.Navigator>
  );
}

export default App;
