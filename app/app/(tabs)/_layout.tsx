import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import { 
  Home, 
  Thermometer, 
  Settings, 
  User,
} from 'lucide-react-native';

interface QuizOption {
  id: number;
  text: string;
}

const quizOptions: QuizOption[] = [
  {
    id: 1,
    text: "Mudah dipahami dan bisa menggerti konsep dengan mudah"
  },
  {
    id: 2,
    text: "Mudah dipahami dan harus belajar lagi"
  },
  {
    id: 3,
    text: "Bisa dipahami namun butuh penjelasan lagi"
  },
  {
    id: 4,
    text: "Bisa dipahami namun butuh contoh pengaplikasian"
  },
  {
    id: 5,
    text: "Konsep susah dipahami"
  }
];

export default function LearningExperienceQuiz() {
  const [selectedOption, setSelectedOption] = useState<number>(2); // Default selection (option 2)
  const [progress] = useState(75); // Progress percentage

  const handleOptionSelect = (optionId: number) => {
    setSelectedOption(optionId);
  };

  const handleNext = () => {
    // Handle next button press - navigate to next question or submit
    console.log('Selected option:', selectedOption);
    // Add your navigation logic here
  };

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

      {/* Content */}
      <View style={styles.content}>
        {/* Progress Bar */}
        <View style={styles.progressContainer}>
          <View style={styles.progressBackground}>
            <View style={[styles.progressFill, { width: `${progress}%` }]} />
          </View>
        </View>

        {/* Question */}
        <Text style={styles.questionText}>
          Bagaimana pengalaman belajar tadi?
        </Text>

        {/* Options */}
        <ScrollView style={styles.optionsContainer} showsVerticalScrollIndicator={false}>
          {quizOptions.map((option) => (
            <TouchableOpacity
              key={option.id}
              style={[
                styles.optionButton,
                selectedOption === option.id && styles.selectedOption
              ]}
              onPress={() => handleOptionSelect(option.id)}
            >
              <Text style={[
                styles.optionText,
                selectedOption === option.id && styles.selectedOptionText
              ]}>
                {option.text}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Next Button */}
        <TouchableOpacity 
          style={styles.nextButton}
          onPress={handleNext}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Home size={24} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Thermometer size={24} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Settings size={24} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <User size={24} color="#666" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  header: {
    backgroundColor: '#F59E0B',
    paddingBottom: 20,
  },
  headerContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
    fontWeight: '600',
    color: '#000',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
    marginHorizontal: 8,
    marginTop: 8,
    borderRadius: 16,
    padding: 20,
    marginBottom: 8,
  },
  progressContainer: {
    marginBottom: 24,
  },
  progressBackground: {
    height: 8,
    backgroundColor: '#E5E7EB',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#F59E0B',
    borderRadius: 4,
  },
  questionText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 24,
    lineHeight: 28,
  },
  optionsContainer: {
    flex: 1,
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    minHeight: 60,
    justifyContent: 'center',
  },
  selectedOption: {
    backgroundColor: '#F59E0B',
    borderColor: '#F59E0B',
  },
  optionText: {
    fontSize: 14,
    color: '#374151',
    textAlign: 'center',
    lineHeight: 20,
  },
  selectedOptionText: {
    color: '#000',
    fontWeight: '600',
  },
  nextButton: {
    backgroundColor: '#F59E0B',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 'auto',
  },
  nextButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
});