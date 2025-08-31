import { StyleSheet, View, Text } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Entry Screen - Awesome</Text>

      <Text style={styles.largeText}>
        Typescript is great if you practice more
      </Text>
      <Text style={styles.mediumText}>
        React Native provides you a single codebase for cross platforms
      </Text>
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
    padding: 20,
  },
  mainText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  largeText: {
    fontSize: 18,
    color: "blue",
    marginBottom: 10,
  },
  mediumText: {
    fontSize: 16,
    color: "green",
    marginBottom: 10,
  },
  smallText: {
    fontSize: 14,
    color: "red",
  },
});
