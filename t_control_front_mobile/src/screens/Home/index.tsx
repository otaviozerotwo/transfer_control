import { useState } from 'react';
import { FlatList, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import SafeArea from '../../components/SafeArea';
import ActionCard from '../../components/ActionCard';
import StatusCard from '../../components/StatusCard';
import ActivityItem from '../../components/ActivityItem';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/rootStackParamList';
import styles from './styles';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Início'>;

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  
  const recentActivities = [
    { id: '1', volume: '#VOL-2025', status: 'Entrega realizada - Farmácia XPTO LJ01', hour: '10:30' },
    { id: '2', volume: '#VOL-2024', status: 'Em trânsito - Farmácia XPTO LJ35', hour: '09:45' },
    { id: '3', volume: '#VOL-2024', status: 'Em trânsito - Farmácia XPTO LJ35', hour: '09:45' },
    { id: '4', volume: '#VOL-2024', status: 'Em trânsito - Farmácia XPTO LJ35', hour: '09:45' },
    { id: '5', volume: '#VOL-2024', status: 'Em trânsito - Farmácia XPTO LJ35', hour: '09:45' },
    { id: '6', volume: '#VOL-2024', status: 'Em trânsito - Farmácia XPTO LJ35', hour: '09:45' },
    { id: '7', volume: '#VOL-2024', status: 'Em trânsito - Farmácia XPTO LJ35', hour: '09:45' },
    { id: '8', volume: '#VOL-2024', status: 'Em trânsito - Farmácia XPTO LJ35', hour: '09:45' },
    { id: '9', volume: '#VOL-2024', status: 'Em trânsito - Farmácia XPTO LJ35', hour: '09:45' },
    { id: '10', volume: '#VOL-2024', status: 'Em trânsito - Farmácia XPTO LJ35', hour: '09:45' },
  ];

  const [showAll, setShowAll] = useState(false);
  
  const visibleActivities = showAll ? recentActivities : recentActivities.slice(0, 3);

  const toggleShowAll = () => setShowAll(!showAll);

  return (
    <SafeArea>
      <ScrollView style={styles.container}>
        <View style={styles.quickActions}>
          <ActionCard 
            iconLib='FontAwesome6' 
            iconName='barcode' 
            label='Escanear Volume' 
            onPress={() => navigation.navigate('ScanVolume')} 
          />
          <ActionCard 
            iconLib='MaterialIcons' 
            iconName='local-shipping' 
            label='Nova Entrega' 
            onPress={() => navigation.navigate('ScanVolume')} 
          />
        </View>

        <Text style={styles.title}>Status do Dia</Text>

        <View style={styles.statusContainer}>
          <StatusCard iconLib='Ionicons' iconName='time' title='Pendentes' count={12} />
          <StatusCard iconLib='FontAwesome6' iconName='check' title='Entregues' count={45} />
        </View>
        
        <View style={styles.activitiesHeader}>
          <Text style={styles.title}>Atividades Recentes</Text>
          <TouchableOpacity onPress={toggleShowAll}>
            <Text style={styles.viewAll}>{showAll ? 'Ver menos' : 'Ver todas'}</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={visibleActivities}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ActivityItem {...item} />}
          scrollEnabled={false}
        />
      </ScrollView>
    </SafeArea>
  );
};

export default HomeScreen;