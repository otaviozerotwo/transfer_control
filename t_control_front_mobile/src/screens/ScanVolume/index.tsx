import { CameraView } from 'expo-camera';
import { useRef } from 'react';
import { api } from '../../services/api';
import axios from 'axios';
import { Alert, Text, View } from 'react-native';
import styles from './styles';

const ScanVolume = () => {
  const barCodeLock = useRef(false);

  const handleBarCodeScanned = async ({ data }: { data: string }) => {
    console.log('BarCode escaneado:', data);

    try {
      const response = await api.get(`/volumes/${data}`);

      const volume = response.data;

      console.log(volume);
      Alert.alert('Dados Volume', JSON.stringify(volume, null, 2));
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        console.log('Erro ao escanear volume:', error.response?.data);

        const message = error.response?.data?.message || 'Erro ao escanear volume';
        Alert.alert('Erro ao escanear volume', message);
      } else {
        Alert.alert('Erro', 'Algo inesperado aconteceu.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.cameraWrapper}>
        <CameraView 
          style={styles.camera}
          facing='back'
          barcodeScannerSettings={{
            barcodeTypes: ['code128'],
          }}
          onBarcodeScanned={({ data }) => {
            if (data && !barCodeLock.current) {
              barCodeLock.current = true;
              setTimeout(() => handleBarCodeScanned({ data }), 500);
            }
          }}
        />
        <Text style={styles.hint}>Posicione o código de barras dentro da moldura</Text>
        <View style={styles.overlay}>
          <View style={styles.frame}/>
        </View>
      </View>
    </View>
  );
};

export default ScanVolume;