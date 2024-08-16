import React, { useEffect } from 'react'
import { Pressable, Text, View } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { HamburguerMenu } from '../../components/shared/HamburguerMenu';

export const Tab1Screen = () => {


  return (
    <View>
    <HamburguerMenu />

    <Text>Tab1Screen</Text>
    </View>
  )
}
