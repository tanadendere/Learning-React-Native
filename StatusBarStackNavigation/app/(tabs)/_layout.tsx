import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "blue",
        // headerStyle: {
        //   backgroundColor: "#f4511e",
        // },
        // headerTintColor: "#fff",
        // headerTitleStyle: {
        //   fontWeight: "bold",
        // }, SOOO this affects all of the tabs
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerStyle: { backgroundColor: "#00FF00" },
          headerTintColor: "#000",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          headerStyle: { backgroundColor: "#FF00FF" },
          headerTintColor: "#000",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerStyle: { backgroundColor: "#FFFF00" },
          headerTintColor: "#000",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="user" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
