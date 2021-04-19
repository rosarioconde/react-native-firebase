import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

import  UserList  from './screen/UserList';
import  CreateUser  from './screen/CreateUser';
import  UserDetails  from './screen/UserDetails';


//varias pantallas
function MyStack() {
  return (
    <Stack.Navigator>      
      <Stack.Screen name="CreateUser" component={CreateUser} />
      <Stack.Screen name="UserList" component={UserList} />
      <Stack.Screen name="UserDetails" component={UserDetails} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack></MyStack>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
