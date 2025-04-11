import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Loginscreen from './src/screen/LoginScreen';
import SignupScreen from './src/screen/SignupScreen';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Login" component={Loginscreen} />
    <Stack.Screen name="Signup" component={SignupScreen} />
  </Stack.Navigator>
  );
}
const App = () => {
  return (
    <NavigationContainer> 
      <RootStack />
      </NavigationContainer>
  )
}

export default App;

const styles = StyleSheet.create({})