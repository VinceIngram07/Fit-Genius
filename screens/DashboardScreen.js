import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DashboardScreen = ({ route }) => {
  const [caloriesBurned, setCaloriesBurned] = useState(0);

  const totalCalories = route.params?.totalCalories || 0;
  // const totalCaloriesBurned = route.params?.totalCaloriesBurned || 0;
  const netCalories = totalCalories - caloriesBurned;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calorie Intake Dashboard</Text>
      <View style={styles.metricContainer}>
        <Text style={styles.metricTitle}>Total Calorie Intake:</Text>
        <Text style={styles.metricValue}>{totalCalories}</Text>
      </View>
      <View style={styles.metricContainer}>
        <Text style={styles.metricTitle}>Calories Burned:</Text>
        <Text style={styles.metricValue}>{caloriesBurned}</Text>
      </View>
      <View style={styles.metricContainer}>
        <Text style={styles.metricTitle}>Net Calories:</Text>
        <Text style={styles.metricValue}>{netCalories}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  metricContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  metricTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  metricValue: {
    fontSize: 16,
  },
});

export default DashboardScreen;
