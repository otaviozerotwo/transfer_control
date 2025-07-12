import { Text, View } from 'react-native';
import styles from './styles';
import SafeArea from '../../components/SafeArea';

const HomeScreen = () => {
  return (
    <SafeArea>
      <View style={styles.container}>
        <Text style={styles.title}>Tela Home</Text>
      </View>
    </SafeArea>
  );
};

export default HomeScreen;