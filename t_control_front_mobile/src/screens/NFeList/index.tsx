import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { RootStackParamList } from "../../types/rootStackParamList";
import { api } from "../../services/api";
import { ActivityIndicator, Alert, FlatList, Text, TouchableOpacity, View } from "react-native";
import axios from "axios";
import styles from "./styles";
import NFeCard from "../../components/NFeCard";
import ConfirmModal from "../../components/ConfirmModal";
import cameraPermission from "../../utils/cameraPermission";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
type NFeListRouteProp = RouteProp<RootStackParamList, 'NFeList'>;

const NFeList = () => {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<NFeListRouteProp>();
  const { statusFilter } = route.params;

  const [nfes, setNfes] = useState([]);
  const [loading, setLoading] = useState(true);

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    fetchNFes();
  }, []);

  const fetchNFes = async () => {
    try {
      const response = await api.get(`/nfes?status=${statusFilter}`);

      const nfes = response.data;

      setNfes(nfes);
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        console.log('Erro ao listar nfes:', error.response?.data);
        
        const message = error.response?.data.message || 'Erro ao listar nfes';
        Alert.alert('Erro ao listar nfes', message);
      } else {
        Alert.alert('Erro', 'Algo inesperado aconteceu.');
      }
    } finally {
      setLoading(false);
    }
  };

  const renderItem = ({ item }: any) => (
    <NFeCard 
      item={item}
      onInitScanVolume={() => setModalVisible(true)} 
    />
  );

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' />
      </View>
    );
  }

  const handleConfirm = () => {
    setModalVisible(false);
    cameraPermission();
    navigation.navigate('ScanVolume');
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Total de NFs Pendentes</Text>
        <Text style={styles.headerContent}>{nfes.length}</Text>
      </View>
      <FlatList
        data={nfes}
        keyExtractor={(item: any) => item.id.toString()}
        renderItem={renderItem}
        ListEmptyComponent={<Text style={{ textAlign: 'center', marginTop: 20 }}>Nenhuma nota disponível</Text>}
      />

      <ConfirmModal
        visible={modalVisible}
        title="Deseja iniciar conferência de volumes?"
        onCancel={() => setModalVisible(false)}
        onConfirm={handleConfirm}
      />
    </View>
  );
};

export default NFeList;