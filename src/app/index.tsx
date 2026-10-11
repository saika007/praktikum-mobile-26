import React from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="information-circle" size={28} color="red" />
        <Text style={styles.title}>Hello World!</Text>
      </View>

      <View style={styles.card}>
        <TextInput placeholder="Type here..." style={styles.input} />
      </View>

      <View style={styles.buttonContainer}>
        <Ionicons name="hand-left" size={20} color="#007AFF" />
        <Button title="Press me" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0f2fe",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "red",
    textAlign: "center",
  },
  card: {
    borderWidth: 2,
    borderColor: "blue",
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    width: "100%",
  },
  input: {
    padding: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});