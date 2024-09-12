import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Ball from "./Ball";
import {
  GestureHandlerRootView,
  gestureHandlerRootHOC,
} from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import SignIn from "./screens/SignIn";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack.Navigator initialRouteName="Sign In">
          <Stack.Screen name="Home" component={gestureHandlerRootHOC(Home)} />
          <Stack.Screen
            name="Sign In"
            component={gestureHandlerRootHOC(SignIn)}
            options={{ headerStyle: { backgroundColor: "plum" } }}
            style={{ height: "100%" }}
          />
        </Stack.Navigator>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
