import { View, Text } from "react-native";
import { type ErrorBoundaryProps } from "expo-router";

export function ErrorBoundary({ error, retry }: ErrorBoundaryProps) {
  return (
    <View style={{ flex: 1, backgroundColor: "red" }}>
      <Text>{error.message}</Text>
      <Text onPress={retry}>Try Again?</Text>
    </View>
  );
}
// You can also use the default ErrorBoundary component for a quick UI:
// export { ErrorBoundary } from 'expo-router';

export default function Page() {}
