import { View, Text, StyleSheet } from "react-native";

export default function Tab() {
  return (
    <View style={styles.container}>
      <Text>This is home.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00FF00",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
