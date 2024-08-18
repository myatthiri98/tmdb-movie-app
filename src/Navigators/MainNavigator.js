import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../Screens/HomeScreen'
import DetailsScreen from '../Screens/DetailsScreen'
import WatchVideoScreen from '../Screens/WatchVideoScreen'

const Stack = createNativeStackNavigator()

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      <Stack.Screen name="WatchVideoScreen" component={WatchVideoScreen} />
    </Stack.Navigator>
   
  )
}

export default MainNavigator

