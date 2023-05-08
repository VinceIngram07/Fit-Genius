import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FoodLogScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [caloriesText, setCaloriesText] = useState('');
  const [foods, setFoods] = useState([]);
  const navigation = useNavigation();

  const handleSearch = () => {
    // Call API to search for foods based on searchText
    // and update the foods state with the search results
    setFoods([
      { name: 'Apple', calories: 95 },
      { name: 'Banana', calories: 105 },
      { name: 'Chicken Breast', calories: 165 },
      { name: 'Salmon', calories: 206 },
      { name: 'Broccoli', calories: 55 },
      { name: 'Sweet Potato', calories: 90 },
    ]);
  };

  const handleAddFood = () => {
    // Add the selected food to the list of logged foods
    const newFood = { name: searchText, calories: parseInt(caloriesText) };
    setFoods([...foods, newFood]);
    setSearchText('');
    setCaloriesText('');
    navigation.navigate('Dashboard', { foodLogData });
  };

  const handleDeleteFood = (index) => {
    // Remove the food at the specified index from the list of logged foods
    setFoods(foods.filter((_, i) => i !== index));
  };
  const getTotalCalories = () => {
    // Calculate the total number of calories logged
    return foods.reduce((total, food) => total + food.calories, 0);
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Food Log</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for a food..."
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.recentTitle}>Recently Logged</Text>
      <FlatList
        data={foods}
        keyExtractor={(item, index) => `${item.name}-${index}`}
        renderItem={({ item, index }) => (
          <View style={styles.foodItem}>
            <Text style={styles.foodName}>{item.name}</Text>
            <Text style={styles.foodCalories}>{item.calories} Calories</Text>
            <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeleteFood(index)}>
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <View style={styles.addContainer}>
        <TextInput
          style={styles.addInput}
          placeholder="Add a food item..."
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
        <TextInput
          style={styles.caloriesInput}
          placeholder="Cal."
          value={caloriesText}
          onChangeText={(text) => setCaloriesText(text)}
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddFood}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.totalCaloriesContainer}>
        <Text style={styles.totalCaloriesText}>Total Calories: {getTotalCalories()}</Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    marginRight: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  searchButton: {
    padding: 10,
    backgroundColor: '#007AFF',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  recentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  foodItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
  },
  foodName: {
    flex: 1,
    fontSize: 16,
  },
  foodCalories: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  deleteButton: {
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  addContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  addInput: {
    flex: 1,
    marginRight: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
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
  calorieInput: {
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  calorieButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#007AFF',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  calorieButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default FoodLogScreen;