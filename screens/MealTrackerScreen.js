import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const MealTrackerScreen = () => {
  const [meals, setMeals] = useState([]);

  const addMeal = () => {
    const newMeal = {
      id: meals.length + 1,
      name: `Meal ${meals.length + 1}`,
      calories: Math.floor(Math.random() * 500) + 200,
    };
    setMeals([...meals, newMeal]);
  };

  const deleteMeal = (id) => {
    const updatedMeals = meals.filter((meal) => meal.id !== id);
    setMeals(updatedMeals);
  };

  const renderMealItem = ({ item }) => (
    <TouchableOpacity
      style={styles.mealItem}
      onPress={() => deleteMeal(item.id)}
    >
      <View>
        <Text style={styles.mealName}>{item.name}</Text>
        <Text style={styles.mealCalories}>{item.calories} calories</Text>
      </View>
      <Text style={styles.deleteButtonText}>Delete</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Meal Tracker</Text>
        <TouchableOpacity style={styles.addButton} onPress={addMeal}>
          <Text style={styles.addButtonText}>Add Meal</Text>
        </TouchableOpacity>
      </View>
      {meals.length > 0 ? (
        <FlatList
          data={meals}
          renderItem={renderMealItem}
          keyExtractor={(item) => item.id.toString()}
          style={styles.mealList}
        />
      ) : (
        <Text style={styles.noMeals}>No meals logged yet.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  addButton: {
    padding: 10,
    backgroundColor: '#007AFF',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  mealList: {
    flex: 1,
  },
  mealItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
  },
  mealName: {
    fontSize: 16,
  },
  mealCalories: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  deleteButtonText: {
    color: 'red',
    fontWeight: 'bold',
  },
  noMeals: {
    textAlign: 'center',
    fontSize: 16,
  },
});

export default MealTrackerScreen;
