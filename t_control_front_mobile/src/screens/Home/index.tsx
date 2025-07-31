import { ScrollView, Text, View } from 'react-native';
import styles from './styles';
import SafeArea from '../../components/SafeArea';
import ActionCard from '../../components/ActionCard';
import StatusCard from '../../components/StatusCard';

const HomeScreen = () => {
  return (
    <SafeArea>
      <ScrollView style={styles.container}>
        <View style={styles.quickActions}>
          <ActionCard iconLib='FontAwesome6' iconName='barcode' label='Escanear Volume' />
          <ActionCard iconLib='MaterialIcons' iconName='local-shipping' label='Nova Entrega' />
        </View>

        <Text style={styles.title}>Status do Dia</Text>

        <View style={styles.statusContainer}>
          <StatusCard iconLib='Ionicons' iconName='time' title='Pendentes' count={12} />
          <StatusCard iconLib='FontAwesome6' iconName='check' title='Entregues' count={45} />
        </View>
        
        <Text style={styles.title}>Atividades Recentes</Text>
      </ScrollView>
    </SafeArea>
  );
};

export default HomeScreen;