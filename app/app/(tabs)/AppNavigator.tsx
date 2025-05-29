import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createStackNavigator } from "@react-navigation/stack"
import { Home, Thermometer, Settings, User } from "lucide-react-native"

// Import your screens
import ITBJatinangorApp from "./ITBJatinangorApp"
import ClassroomCondition from "./ClassroomCondition"
import LearningExperienceQuiz from "./LearningExperienceQuiz"
import SettingsScreen from "./SettingsScreen.tsx"
import ProfileScreen from "./ProfileScreen"

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

// Stack navigator for Home tab (includes quiz)
function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeMain" component={ITBJatinangorApp} />
      <Stack.Screen name="Quiz" component={LearningExperienceQuiz} />
    </Stack.Navigator>
  )
}

// Main tab navigator
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let IconComponent

          if (route.name === "Home") {
            IconComponent = Home
          } else if (route.name === "Conditions") {
            IconComponent = Thermometer
          } else if (route.name === "Settings") {
            IconComponent = Settings
          } else if (route.name === "Profile") {
            IconComponent = User
          }

          return <IconComponent size={size} color={color} />
        },
        tabBarActiveTintColor: "#F59E0B",
        tabBarInactiveTintColor: "#666",
        tabBarStyle: {
          backgroundColor: "white",
          borderTopWidth: 1,
          borderTopColor: "#E5E7EB",
          paddingVertical: 8,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} options={{ tabBarLabel: "Home" }} />
      <Tab.Screen name="Conditions" component={ClassroomCondition} options={{ tabBarLabel: "Conditions" }} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{ tabBarLabel: "Settings" }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarLabel: "Profile" }} />
    </Tab.Navigator>
  )
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  )
}
