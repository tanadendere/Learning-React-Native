// import { Stack, useLocalSearchParams, useRouter } from "expo-router";
// import { View, Text, StyleSheet } from "react-native";

// export default function Details() {
//   const router = useRouter();
//   const { name } = useLocalSearchParams();

//   return (
//     <View style={styles.container}>
//       <Stack.Screen
//         options={{
//           title: name,
//         }}
//       />
//       <Text
//         onPress={() => {
//           router.setParams({ name: "Updated" });
//         }}
//       >
//         Update the title
//       </Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
