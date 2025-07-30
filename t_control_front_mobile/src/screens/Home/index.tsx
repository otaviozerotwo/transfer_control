import { ScrollView, Text, View } from 'react-native';
import styles from './styles';
import SafeArea from '../../components/SafeArea';
import ActionCard from '../../components/ActionCard';

const HomeScreen = () => {
  return (
    <SafeArea>
      <ScrollView style={styles.container}>
        <View style={styles.quickActions}>
          <ActionCard iconLib='FontAwesome6' iconName='barcode' label='Escanear Volume' />
          <ActionCard iconLib='MaterialIcons' iconName='local-shipping' label='Nova Entrega' />
        </View>
        
      </ScrollView>
    </SafeArea>
  );
};

export default HomeScreen;