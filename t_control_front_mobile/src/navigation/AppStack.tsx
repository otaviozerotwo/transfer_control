import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import Header from '../components/Header';
import { useState } from 'react';
import UserMenuModal from '../components/UserMenuModal';

const Stack = createNativeStackNavigator();

export default function AppStack() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name='HomeScreen'
          component={HomeScreen}
          options={{
            headerTitle: () => <Header onAvatarPress={() => setModalVisible(true)} />,
          }}
        />
      </Stack.Navigator>
      
      <UserMenuModal visible={modalVisible} onClose={() => setModalVisible(false)} />
    </>
  );
}