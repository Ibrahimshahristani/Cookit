import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import RecipeDetailScreen from './src/screens/RecipeDetailScreen';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="CookIt" component={HomeScreen} />
      <Stack.Screen name="RecipeDetails" component={RecipeDetailScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
