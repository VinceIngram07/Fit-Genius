import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const ExerciseLogScreen = () => {
  const [exerciseLogs, setExerciseLogs] = useState([]);
  const [exercise, setExercise] = useState('');
  const [duration, setDuration] = useState('');
  const [caloriesBurned, setCaloriesBurned] = useState('');

  const handleAddExercise = () => {
  // Calculate the total calories burned
  const totalCaloriesBurned = parseInt(caloriesBurned) * parseInt(duration);

  // Navigate to the other screen and pass the total calories burned as a parameter
  navigation.navigate('Dashboard', { totalCaloriesBurned });
  
    // Create a new exercise log object with the input data
    const newExerciseLog = {
      exercise: exercise,
      duration: duration,
      caloriesBurned: caloriesBurned,
    };

    // Add the new exercise log to the array of exercise logs
    setExerciseLogs([...exerciseLogs, newExerciseLog]);

    // Reset the input fields
    setExercise('');
    setDuration('');
    setCaloriesBurned('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exercise Log</Text>
      <TextInput
        style={styles.input}
        placeholder="Exercise type"
        value={exercise}
        onChangeText={setExercise}
      />
      <TextInput
        style={styles.input}
        placeholder="Duration (minutes)"
        keyboardType="numeric"
        value={duration}
        onChangeText={setDuration}
      />
      <TextInput
        style={styles.input}
        placeholder="Calories burned"
        keyboardType="numeric"
        value={caloriesBurned}
        onChangeText={setCaloriesBurned}
      />
      <Button title="Add Exercise" onPress={handleAddExercise} />
      <Text style={styles.subtitle}>Exercise Log:</Text>
      <FlatList
        data={exerciseLogs}
        renderItem={({ item }) => (
          <View style={styles.exerciseLog}>
            <Text style={styles.exerciseLogItem}>Exercise: {item.exercise}</Text>
            <Text style={styles.exerciseLogItem}>Duration: {item.duration} minutes</Text>
            <Text style={styles.exerciseLogItem}>Calories burned: {item.caloriesBurned}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
    fontSize: 18,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  exerciseLog: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 8,
  },
  exerciseLogItem: {
    fontSize: 16,
  },
});

export default ExerciseLogScreen;
