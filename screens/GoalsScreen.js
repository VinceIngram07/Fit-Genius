import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

const GoalsScreen = () => {
  const [weightLossGoal, setWeightLossGoal] = useState('');
  const [muscleGainGoal, setMuscleGainGoal] = useState('');
  const [fitnessGoal, setFitnessGoal] = useState('');

  const handleSaveGoals = () => {
    // Here you could add your logic to save the goals to your data source
    console.log(`Saved goals: Weight loss - ${weightLossGoal} lbs, Muscle gain - ${muscleGainGoal} lbs, Fitness - ${fitnessGoal}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Goals</Text>
      <TextInput
        style={styles.input}
        placeholder="Weight loss goal (lbs)"
        keyboardType="numeric"
        value={weightLossGoal}
        onChangeText={setWeightLossGoal}
      />
      <TextInput
        style={styles.input}
        placeholder="Muscle gain goal (lbs)"
        keyboardType="numeric"
        value={muscleGainGoal}
        onChangeText={setMuscleGainGoal}
      />
      <TextInput
        style={styles.input}
        placeholder="Fitness goal"
        value={fitnessGoal}
        onChangeText={setFitnessGoal}
      />
      <Button title="Save Goals" onPress={handleSaveGoals} />
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
});

export default GoalsScreen;
