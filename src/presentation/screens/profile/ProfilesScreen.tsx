import React from 'react'
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { useNavigation, DrawerActions } from '@react-navigation/native';

export const ProfilesScreen = () => {


  const { top } = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <View style={{
      flex: 1,
      paddingHorizontal: 20,
      marginTop: top + 20,
    }}>
        <Text style={{ marginBottom: 10 }}>ProfilesScreen</Text>


        <PrimaryButton
          onPress={ () => navigation.dispatch( DrawerActions.toggleDrawer) }
          label="Abrir menú"
        />

    </View>
  )
}
