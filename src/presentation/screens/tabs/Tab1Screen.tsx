import React from 'react'
import { Text, View } from 'react-native';

import { HamburguerMenu } from '../../components/shared/HamburguerMenu';
//import Icon from 'react-native-vector-icons/Ionicons';
import { IonIcon } from '../../components/shared/IonIcon';


export const Tab1Screen = () => {


  return (
    <View>
    <HamburguerMenu />

    <Text>Tab1Screen</Text>

    <IonIcon name="rocket-outline" />

    </View>
  )
}
