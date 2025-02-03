import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e",
  },
  text: {
    color: "#FFFFFF",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Link href="/about" style={styles.button}>
        About
      </Link>
    </View>
  );
}
