import React, { useEffect } from 'react'
import { Pressable, Text, View } from 'react-native';
import { globalStyles } from '../../theme/theme';
import { type  NavigationProp, useNavigation, DrawerActions } from '@react-navigation/native';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import type { RootStackParams } from '../../routes/StackNavigator';

export const HomeScreen = () => {

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable onPress={ ()=> navigation.dispatch(DrawerActions.toggleDrawer)}>
          <Text>Menu</Text>
        </Pressable>
      )
    })
  }, [])
  

  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
      <View style={ globalStyles.container}>
          {/* <Pressable 
            onPress={ () => navigation.navigate('Products' as never)}
            style={ globalStyles.primaryButton}>
            <Text style={ globalStyles.buttonText}>Productos</Text>
          </Pressable> */}
          <PrimaryButton
            onPress={ () => navigation.navigate('Products') }
            label="Productos"
          />

          <PrimaryButton
            onPress={ () => navigation.navigate('Settings') }
            label="Settings"
          />  
      </View>
  )
}
