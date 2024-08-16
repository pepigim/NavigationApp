import React from 'react'
import { Text, View } from 'react-native';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { globalStyles } from '../../theme/theme';
import { StackActions, useNavigation } from '@react-navigation/native';

export const SettingsScreen = () => {

  const navigator = useNavigation();

  return (
    <View style={ globalStyles.container}>

        <Text style={{ marginBottom: 10 }}>SettingsScreen</Text>

        <PrimaryButton
          onPress={ () => navigator.goBack() }
          label='Regresar'
        />

        <PrimaryButton
          onPress={ () => navigator.dispatch( StackActions.popToTop ) }
          label='Regresar al Home'
        />
    </View>
  )
}
