import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ProfilesScreen } from '../screens/profile/ProfilesScreen';
import { AboutScreen } from '../screens/about/AboutScreen';
import { HamburguerMenu } from '../components/shared/HamburguerMenu';

const Tab = createMaterialTopTabNavigator();

export const TopTabsNavigator = () => {
  return (
    <>
      <HamburguerMenu/>
      <Tab.Navigator>
        <Tab.Screen name="Perfil" component={ProfilesScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
      </Tab.Navigator>
    </>
  );
}