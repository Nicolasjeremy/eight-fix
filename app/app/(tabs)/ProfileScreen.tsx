import { View, Text, StyleSheet, SafeAreaView } from "react-native"

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Profile</Text>
        <Text style={styles.subtitle}>Samuel's Profile</Text>
        <Text style={styles.info}>Student ID: 12345678</Text>
        <Text style={styles.info}>ITB Jatinangor</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: "#666",
    marginBottom: 16,
  },
  info: {
    fontSize: 16,
    color: "#666",
    marginBottom: 8,
  },
})
