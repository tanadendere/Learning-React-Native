import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Keyboard,
} from "react-native";

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    navigation.navigate("Home");
  };

  const scrollToEndReference = useRef<ScrollView>(null);

  useEffect(() => {
    const scrollToEnd = () => {
      if (scrollToEndReference && scrollToEndReference.current) {
        scrollToEndReference.current.scrollToEnd({ animated: true });
      }
    };

    Keyboard.addListener("keyboardDidShow", scrollToEnd);

    // cleanup listener on unmount
    return () => {
      Keyboard.removeAllListeners("keyboardDidShow");
    };
  }, []);
  return (
    <>
      {/* this keyboard avoiding view could also be added using a screen wrapper so you do not have to keep doing it for every single page */}

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        enabled
        keyboardVerticalOffset={100}
        style={styles.container}
      >
        <ScrollView style={styles.scrollView} ref={scrollToEndReference}>
          <View style={styles.image} />
          <View style={styles.innerContainer}>
            <Text style={styles.title}>Let's get you inside the app</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <TouchableOpacity style={styles.button} onPress={handleSignIn}>
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",

    flexDirection: "column",
  },
  innerContainer: {
    padding: 20,
  },
  image: {
    flex: 1,
    width: "100%",
    height: 200,
    backgroundColor: "plum",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#007BFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  scrollView: {
    width: "100%",
  },
});
