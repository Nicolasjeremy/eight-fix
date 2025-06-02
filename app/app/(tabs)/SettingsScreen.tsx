// import { View, Text, StyleSheet, SafeAreaView } from "react-native"

// export default function SettingsScreen() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.content}>
//         <Text style={styles.title}>Settings</Text>
//         <Text style={styles.subtitle}>Settings page coming soon...</Text>
//       </View>
//     </SafeAreaView>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F3F4F6",
//   },
//   content: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#333",
//     marginBottom: 8,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: "#666",
//   },
// })
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants"; // Import Constants to get the app version
import { useState } from "react"; // Import useState for managing component state

export default function SettingsScreen() {
  const appVersion = Constants.manifest?.version || "N/A"; // Get app version from expo-constants

  // State to control visibility of content
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTermsOfService, setShowTermsOfService] = useState(false);

  // Static content for Privacy Policy and Terms of Service
  const privacyPolicyContent = `
    Ini adalah Kebijakan Privasi aplikasi Eight. Kami sangat serius dalam melindungi privasi Anda.
    Kami mengumpulkan informasi minimal yang diperlukan untuk menyediakan layanan, seperti data presensi
    dan kondisi kelas. Data ini digunakan semata-mata untuk meningkatkan pengalaman belajar Anda
    dan efisiensi operasional kelas. Kami tidak membagikan informasi pribadi Anda kepada pihak ketiga
    tanpa persetujuan Anda, kecuali diwajibkan oleh hukum. Dengan menggunakan aplikasi ini, Anda
    menyetujui pengumpulan dan penggunaan informasi sesuai kebijakan ini.
  `;

  const termsOfServiceContent = `
    Selamat datang di Ketentuan Layanan aplikasi Eight. Dengan mengakses atau menggunakan aplikasi ini,
    Anda menyetujui untuk terikat oleh syarat dan ketentuan berikut. Aplikasi ini dirancang untuk
    memfasilitasi manajemen kelas dan efisiensi energi. Anda bertanggung jawab untuk menjaga
    kerahasiaan informasi akun Anda. Penggunaan aplikasi ini untuk tujuan ilegal atau tidak sah
    dilarang keras. Kami berhak mengubah ketentuan ini kapan saja, dan perubahan akan berlaku segera
    setelah dipublikasikan.
  `;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Settings</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>
          <View style={styles.settingItem}>
            <Text style={styles.settingText}>App Version</Text>
            <Text style={styles.settingValue}>{appVersion}</Text>
          </View>

          <TouchableOpacity
            style={styles.settingItem}
            onPress={() => setShowPrivacyPolicy(!showPrivacyPolicy)}
          >
            <Text style={styles.settingText}>Privacy Policy</Text>
          </TouchableOpacity>
          {showPrivacyPolicy && (
            <View style={styles.contentBar}>
              <Text style={styles.contentBarText}>
                {privacyPolicyContent.trim()}
              </Text>
            </View>
          )}

          <TouchableOpacity
            style={styles.settingItem}
            onPress={() => setShowTermsOfService(!showTermsOfService)}
          >
            <Text style={styles.settingText}>Terms of Service</Text>
          </TouchableOpacity>
          {showTermsOfService && (
            <View style={styles.contentBar}>
              <Text style={styles.contentBarText}>
                {termsOfServiceContent.trim()}
              </Text>
            </View>
          )}
        </View>

        {/* You can add a logout button or other settings here if needed later */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
  },
  scrollContent: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  section: {
    marginBottom: 20,
    backgroundColor: "white",
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingBottom: 5,
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f5f5f7",
  },
  settingText: {
    fontSize: 16,
    color: "#555",
  },
  settingValue: {
    fontSize: 16,
    color: "#888",
  },
  contentBar: {
    backgroundColor: "#F9F9F9", // Light gray background for the expanding bar
    borderRadius: 8,
    padding: 15,
    marginTop: 5,
    marginBottom: 10, // Add some margin after the bar
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  contentBarText: {
    fontSize: 14,
    color: "#333",
    lineHeight: 20, // Improve readability
  },
});
