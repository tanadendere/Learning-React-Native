import { View, Text, StyleSheet } from "react-native";

export default function Tab() {
  return (
    <View style={styles.container}>
      <Text>This is my profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFF00",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
