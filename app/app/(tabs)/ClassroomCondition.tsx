"use client"

import { useState, useEffect } from "react"
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView, SafeAreaView } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { StatusBar } from "expo-status-bar"

interface ConditionData {
  temperature: number
  lights: number
  humidity: number
}

const DEFAULT_CONDITIONS: ConditionData = {
  temperature: 28,
  lights: 90,
  humidity: 12,
}

export default function ClassroomCondition() {
  const [conditions, setConditions] = useState<ConditionData>(DEFAULT_CONDITIONS)
  const [dimensions, setDimensions] = useState({
    window: Dimensions.get("window"),
    screen: Dimensions.get("screen"),
  })

  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", ({ window, screen }) => {
      setDimensions({ window, screen })
    })
    return () => subscription.remove()
  }, [])

  const screenHeight = dimensions.window.height
  const screenWidth = dimensions.window.width
  const isSmallScreen = screenHeight < 600

  const barHeight = isSmallScreen ? screenHeight * 0.25 : screenHeight * 0.3
  const barWidth = Math.min(screenWidth * 0.22, 80)

  const restoreDefault = () => {
    setConditions(DEFAULT_CONDITIONS)
  }

  const changeValues = () => {
    const newValues = {
      temperature: Math.floor(Math.random() * 40),
      lights: Math.floor(Math.random() * 100),
      humidity: Math.floor(Math.random() * 100),
    }
    setConditions(newValues)
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Classroom Conditions</Text>
            <Text style={styles.subtitle}>Lecture Hall 1</Text>
          </View>

          <View style={styles.metricsContainer}>
            {/* Temperature Bar */}
            <View style={styles.metricColumn}>
              <Text style={styles.metricLabel}>Temperature</Text>
              <View style={[styles.barContainer, { height: barHeight, width: barWidth }]}>
                <View style={styles.barBackground}>
                  <LinearGradient
                    colors={["#FFA500", "#FF8C00"]}
                    style={[styles.barFill, { height: `${Math.min(100, (conditions.temperature / 50) * 100)}%` }]}
                  />
                </View>
              </View>
              <Text style={styles.metricValue}>{conditions.temperature}°C</Text>
            </View>

            {/* Lights Bar */}
            <View style={styles.metricColumn}>
              <Text style={styles.metricLabel}>Lights</Text>
              <View style={[styles.barContainer, { height: barHeight, width: barWidth }]}>
                <View style={styles.barBackground}>
                  <LinearGradient
                    colors={["#FFA500", "#FF8C00"]}
                    style={[styles.barFill, { height: `${conditions.lights}%` }]}
                  />
                </View>
              </View>
              <Text style={styles.metricValue}>{conditions.lights}%</Text>
            </View>

            {/* Humidity Bar */}
            <View style={styles.metricColumn}>
              <Text style={styles.metricLabel}>Humidity</Text>
              <View style={[styles.barContainer, { height: barHeight, width: barWidth }]}>
                <View style={styles.barBackground}>
                  <LinearGradient
                    colors={["#FFA500", "#FF8C00"]}
                    style={[styles.barFill, { height: `${conditions.humidity}%` }]}
                  />
                </View>
              </View>
              <Text style={styles.metricValue}>{conditions.humidity}%</Text>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.restoreButton} onPress={restoreDefault}>
              <Text style={styles.restoreButtonText}>Restore default</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.changeButton} onPress={changeValues}>
              <Text style={styles.changeButtonText}>Refresh</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f5f5f7",
  },
  scrollContainer: {
    flexGrow: 1,
    paddingVertical: 20,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "space-between",
  },
  header: {
    marginBottom: 20,
    alignItems: "center",
    width: "100%",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    color: "#555",
    marginTop: 5,
    textAlign: "center",
  },
  metricsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  metricColumn: {
    alignItems: "center",
  },
  metricLabel: {
    fontSize: 14,
    marginBottom: 8,
    color: "#555",
    fontWeight: "500",
    textAlign: "center",
  },
  barContainer: {
    justifyContent: "flex-end",
    marginBottom: 8,
  },
  barBackground: {
    height: "100%",
    width: "100%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "white",
    overflow: "hidden",
  },
  barFill: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  metricValue: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  buttonContainer: {
    width: "100%",
    marginTop: 20,
    paddingHorizontal: 20,
  },
  restoreButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 8,
    padding: 12,
    alignItems: "center",
    marginBottom: 12,
  },
  restoreButtonText: {
    color: "#333",
    fontSize: 16,
    fontWeight: "600",
  },
  changeButton: {
    backgroundColor: "#FFA500",
    borderRadius: 8,
    padding: 12,
    alignItems: "center",
  },
  changeButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
  },
})
