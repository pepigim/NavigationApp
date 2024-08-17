import React, { useEffect } from 'react'
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { Pressable, View } from 'react-native';
import { IonIcon } from './IonIcon';
import { globalColors } from '../../theme/theme';


export const HamburguerMenu = () => {

   const navigation = useNavigation();

    useEffect(() => {
     navigation.setOptions({
      headerLeft: () => (
        <Pressable 
        style={{ marginLeft: 5 }}
          onPress={ () => navigation.dispatch( DrawerActions.toggleDrawer)}>
          <IonIcon name='menu-outline' color={ globalColors.primary}/>
        </Pressable>
      )
     })
    }, [])

  return (<></>)
}
