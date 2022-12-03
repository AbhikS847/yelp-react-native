import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import ResultsShowScreen from './Screens/ResultsShowScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Yelp help" component={HomeScreen} options={{headerStyle:{
        backgroundColor:'#0080ff'
      },
      headerTintColor:"#fff"}}></Stack.Screen>
      <Stack.Screen name="ResultsShow" component={ResultsShowScreen} options={{headerStyle:{
        backgroundColor:'#0080ff'
      },
      headerTintColor:"#fff"}}></Stack.Screen>
    </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({

});
