import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { RootStackParamList } from "../../types/rootStackParamList";
import { api } from "../../services/api";
import { ActivityIndicator, Alert, FlatList, Text, TouchableOpacity, View } from "react-native";
import axios from "axios";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const NFeList = () => {
  const navigation = useNavigation<NavigationProp>();

  const [nfes, setNfes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNFes();
  }, []);

  const fetchNFes = async () => {
    try {
      const response = await api.get(`/nfes`);

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
    <TouchableOpacity
      style={{ padding: 15, borderBottomWidth: 1, borderBlockColor: '#CCC' }}
      onPress={() => navigation.navigate('ScanVolume')}
    >
      <Text style={{ fontWeight: 'bold' }}>NFe:</Text>
      <Text>Status:</Text>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' />
      </View>
    );
  }
  
  return (
    <FlatList
      data={nfes}
      keyExtractor={(item) => item}
      renderItem={renderItem}
      ListEmptyComponent={<Text style={{ textAlign: 'center', marginTop: 20 }}>Nenhuma nota encontrada</Text>}
    />
  );
};

export default NFeList;