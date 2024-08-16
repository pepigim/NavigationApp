import React, { useEffect } from 'react'
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { Pressable, Text, View } from 'react-native';


export const HamburguerMenu = () => {

   const navigation = useNavigation();

    useEffect(() => {
     navigation.setOptions({
      headerLeft: () => (
        <Pressable onPress={ () => navigation.dispatch( DrawerActions.toggleDrawer)}>
          <Text>Menú</Text>
        </Pressable>
      )
     })
    }, [])

  return (<></>)
}
