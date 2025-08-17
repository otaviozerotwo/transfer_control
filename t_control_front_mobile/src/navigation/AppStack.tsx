import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../components/Header';
import { useState } from 'react';
import UserMenuModal from '../components/UserMenuModal';
import { BottomTabs } from './BottomTabs';
import ScanVolumeScreen from '../screens/ScanVolumeScreen';
import NFeList from '../screens/NFeList';

const Stack = createNativeStackNavigator();

export const AppStack = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name='Main'
          component={BottomTabs}
          options={{
            headerTitle: () => <Header onAvatarPress={() => setModalVisible(true)} />,
          }}
        />
        <Stack.Screen
          name='ScanVolume'
          component={ScanVolumeScreen}
        />
        <Stack.Screen
          name='NFeList'
          component={NFeList}
          options={{
            title: 'NFs Pendentes/Carregadas'
          }}
        />
      </Stack.Navigator>
      
      <UserMenuModal visible={modalVisible} onClose={() => setModalVisible(false)} />
    </>
  );
}