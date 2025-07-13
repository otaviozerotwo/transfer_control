import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import { useAuth } from '../contexts/AuthContext';
import AppStack from './AppStack';

export default function AppNavigator() {
  const { isAuthenticated } = useAuth();

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}