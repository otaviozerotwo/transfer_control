import { CameraView, useCameraPermissions } from 'expo-camera';
import { useRef, useState } from 'react';
import { api } from '../../services/api';
import axios from 'axios';
import { Alert, Keyboard, KeyboardAvoidingView, Platform, ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native';
import styles from './styles';
import VolumeDetailsModal from '../../components/VolumeDetailsModal';
import Ionicons from '@expo/vector-icons/Ionicons';
import SafeArea from '../../components/SafeArea';

const ScanVolume = () => {
  // const [modalVisible, setModalVisible] = useState(false);
  const [permission, requestPermission] = useCameraPermissions();
  // const [volumeData, setVolumeData] = useState(null);
  // const [scanned, setScanned] = useState(false);

  const [manualCode, setManualCode] = useState('');

  const barCodeLock = useRef(false);

  const handleBarCodeScanned = async ({ data }: { data: string }) => {
    // setScanned(true);
    // setModalVisible(false);
    console.log('BarCode escaneado:', data);

    try {
      const response = await api.get(`/volumes/${data}`);

      const volume = response.data;

      console.log(volume);
      // Alert.alert('Dados Volume', JSON.stringify(volume, null, 2));
      // setVolumeData(volume);
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        console.log('Erro ao escanear volume:', error.response?.data);

        const message = error.response?.data?.message || 'Erro ao escanear volume';
        Alert.alert('Erro ao escanear volume', message);
      } else {
        Alert.alert('Erro', 'Algo inesperado aconteceu.');
        // setScanned(false);
      }
    }
  };

  const handleOpenCamera = async () => {
    try {
      const { granted } = await requestPermission();

      if (!granted) {
        return Alert.alert('Camera', 'Você precisa habilitar o uso da câmera.');
      }

      // setModalVisible(true);
      barCodeLock.current = false;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    // <View style={styles.container}>
    //   <Button title='Ler Volume' onPress={handleOpenCamera}/>
    //   <Modal visible={modalVisible} style={{ flex: 1 }}>
    //     <CameraView 
    //       style={styles.camera} 
    //       facing='back'
    //       barcodeScannerSettings={{
    //         barcodeTypes: ['code128'],
    //       }}
    //       onBarcodeScanned={({ data }) => {
    //         if (data && !barCodeLock.current) {
    //           barCodeLock.current = true;
    //           setTimeout(() => handleBarCodeScanned({ data }), 500);
    //         }
    //       }}
    //     />

    //     <View style={{ position: 'absolute', bottom: 32, left: 32, right: 32 }}>
    //       <Button title='Cancelar' onPress={() => setModalVisible(false)} />
    //     </View>

    //     {volumeData && (
    //       <VolumeDetailsModal
    //         visible={true}
    //         volume={volumeData}
    //         onClose={() => {
    //           setVolumeData(null);
    //           setScanned(false);
    //         }}
    //       />
    //     )}
    //   </Modal>
    // </View>
    
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