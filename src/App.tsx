// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { Text, View } from 'react-native';
import { StackNavigator } from './presentation/routes/StackNavigator';
import { SideMenuNavigator } from './presentation/routes/SideMenuNavigator';
import { BottoMTabsNavigator } from './presentation/routes/BottomTabsNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator/> */}
      <SideMenuNavigator/>
      {/* <BottoMTabsNavigator/> */}
    </NavigationContainer>
  )
}
