import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MealTrackerScreen from './screens/MealTrackerScreen';
import DetailedScreen from './screens/testScreen';
import DashboardScreen from './screens/DashboardScreen';
import FoodLogScreen from './screens/FoodLogScreen';
// import LoginScreen from './screens/LoginScreen';
import ExerciseLogScreen from './screens/ExerciseLogScreen';
import GoalsScreen from './screens/GoalsScreen';
// import ChatBotScreen from './screens/ChatBotScreen';
// import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons,Fontisto } from '@expo/vector-icons';
// import YouTube from 'react-native-youtube';
import YouTube from './screens/Youtube';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
<Tab.Navigator>
  <Tab.Screen
    name="Meal Track"
    component={MealTrackerScreen}
    options={{
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="ios-fast-food-outline" size={size} color={color} />
      ),
    }}
  />
  <Tab.Screen
    name="Food Log"
    component={FoodLogScreen}
    options={{
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="ios-stats-chart-outline" size={size} color={color} />
      ),
    }}
  />
  <Tab.Screen
    name="DashBoard"
    component={DashboardScreen}
    initialParams={{ foodLogData: [] }}
    options={{
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="ios-home-outline" size={size} color={color} />
      ),
    }}
  />
  <Tab.Screen
    name="Exercise Log"
    component={ExerciseLogScreen}
    options={{
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="ios-barbell-outline" size={size} color={color} />
      ),
    }}
  />
    <Tab.Screen
    name="Goals"
    component={GoalsScreen}
    options={{
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="reader-outline" size={size} color={color} />
        
      ),
    }}
  />
    {/* <Tab.Screen
  name="video"
  component={WorkoutGuide}
  options={{
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="reader-outline" size={size} color={color} />
      
    ),
  }}
/> */}
<Tab.Screen
  name="Videos"
  component={YouTube}
  options={{
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="reader-outline" size={size} color={color} />
      
    ),
  }}
/>
  {/* <Tab.Screen
    name="Account"
    component={LoginScreen}
    options={{
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="ios-person-outline" size={size} color={color} />
      ),
    }}
  /> */}
</Tab.Navigator>

    </NavigationContainer>
  );
}