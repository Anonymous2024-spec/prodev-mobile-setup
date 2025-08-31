import { StyleSheet, View, Text } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Entry Screen - Awesome</Text>
      <Text style={styles.largeText}>Typescript is great if you practice more</Text>
      <Text style={styles.mediumText}>React Native provides you a single codebase for cross platforms</Text>
      <Text style={styles.smallText}>ALX is awesome</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  largeText: {
    fontSize: 20,
    color: "blue",
  },
  mediumText: {
    fontSize: 16,
    color: "green",
  },
  smallText: {
    fontSize: 14,
    color: "red",
  },
});
