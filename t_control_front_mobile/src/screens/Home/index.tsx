import { Button, Text, View } from 'react-native';
import styles from './styles';
import SafeArea from '../../components/SafeArea';
import { useAuth } from '../../contexts/AuthContext';

const HomeScreen = () => {
  const { signOut } = useAuth();
  return (
    <SafeArea>
      <View style={styles.container}>
        <Text style={styles.title}>Tela Home</Text>
        <Button title='Sair' onPress={signOut}></Button>
      </View>
    </SafeArea>
  );
};

export default HomeScreen;