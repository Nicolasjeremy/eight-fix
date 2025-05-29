import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, StatusBar } from "react-native"
import { Clock } from "lucide-react-native"
import { useNavigation } from "@react-navigation/native"

export default function ITBJatinangorApp() {
  const navigation = useNavigation()

  const handleQuizPress = () => {
    navigation.navigate("Quiz")
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F59E0B" />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.logoContainer}>
            <View style={styles.logo}>
              <Text style={styles.logoText}>🏛️</Text>
            </View>
            <Text style={styles.instituteName}>ITB Jatinangor</Text>
          </View>
          <Text style={styles.welcomeText}>Welcome, Samuel</Text>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Course Card */}
        <View style={styles.courseCard}>
          <View style={styles.courseHeader}>
            <Text style={styles.courseCode}>#3240 Information Systems and Technology Engineering</Text>
          </View>
          <TouchableOpacity style={styles.moduleTag} onPress={handleQuizPress}>
            <Text style={styles.moduleText}>Module 3 Quiz</Text>
          </TouchableOpacity>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.absentButton}>
            <Text style={styles.absentButtonText}>Izin tidak hadir</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.notPresentButton}>
            <Text style={styles.notPresentButtonText}>Belum Hadir</Text>
          </TouchableOpacity>
        </View>

        {/* Time Schedule */}
        <View style={styles.timeSchedule}>
          <View style={styles.timeSlot}>
            <Clock size={20} color="#666" />
            <Text style={styles.timeText}>9:00 am</Text>
            <Text style={styles.timeLabel}>Masuk</Text>
          </View>
          <View style={styles.timeSlot}>
            <Clock size={20} color="#666" />
            <Text style={styles.timeText}>11:00 am</Text>
          </View>
        </View>

        {/* Mindmap Button */}
        <TouchableOpacity style={styles.mindmapButton}>
          <Text style={styles.mindmapButtonText}>Lihat Mindmap kelas</Text>
        </TouchableOpacity>

        {/* Attendance Section */}
        <View style={styles.attendanceSection}>
          <Text style={styles.attendanceTitle}>
            Kehadiran Mata kuliah{"\n"}
            #3240 Information Systems and Technology Engineering
          </Text>

          <View style={styles.attendanceCards}>
            <View style={styles.attendanceCard}>
              <Text style={styles.attendanceLabel}>Hadir</Text>
              <Text style={styles.attendanceNumber}>20</Text>
            </View>
            <View style={styles.attendanceCard}>
              <Text style={styles.attendanceLabel}>Tidak hadir</Text>
              <Text style={styles.attendanceNumber}>08</Text>
            </View>
            <View style={styles.attendanceCard}>
              <Text style={styles.attendanceLabel}>Izin</Text>
              <Text style={styles.attendanceNumber}>01</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
  },
  header: {
    backgroundColor: "#F59E0B",
    paddingBottom: 20,
  },
  headerContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  logo: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  logoText: {
    fontSize: 16,
  },
  instituteName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  courseCard: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    marginTop: 20,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  courseHeader: {
    marginBottom: 12,
  },
  courseCode: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    lineHeight: 22,
  },
  moduleTag: {
    backgroundColor: "#F59E0B",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    alignSelf: "flex-start",
  },
  moduleText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#000",
  },
  actionButtons: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 20,
  },
  absentButton: {
    flex: 1,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
  },
  absentButtonText: {
    fontSize: 14,
    color: "#374151",
    fontWeight: "500",
  },
  notPresentButton: {
    flex: 1,
    backgroundColor: "#F59E0B",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
  },
  notPresentButtonText: {
    fontSize: 14,
    color: "#000",
    fontWeight: "600",
  },
  timeSchedule: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "white",
    borderRadius: 12,
    paddingVertical: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  timeSlot: {
    alignItems: "center",
    gap: 4,
  },
  timeText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  timeLabel: {
    fontSize: 12,
    color: "#666",
  },
  mindmapButton: {
    backgroundColor: "#F59E0B",
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: "center",
    marginBottom: 24,
  },
  mindmapButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  attendanceSection: {
    marginBottom: 20,
  },
  attendanceTitle: {
    fontSize: 14,
    color: "#374151",
    marginBottom: 16,
    lineHeight: 20,
  },
  attendanceCards: {
    flexDirection: "row",
    gap: 12,
  },
  attendanceCard: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  attendanceLabel: {
    fontSize: 12,
    color: "#666",
    marginBottom: 8,
    textAlign: "center",
  },
  attendanceNumber: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
})
