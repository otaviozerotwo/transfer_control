import { CameraView, useCameraPermissions } from 'expo-camera';
import { useRef, useState } from 'react';
import { api } from '../../services/api';
import axios from 'axios';
import { Alert, Button, Modal, View } from 'react-native';
import styles from './styles';

const ScanVolumeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [permission, requestPermission] = useCameraPermissions();

  const qrCodeLock = useRef(false);

  // const handleBarCodeScanned = async ({ data }: { data: string }) => {
  //   setScanned(true);

  //   try {
  //     const response = await api.get(`/volumes/${data}`);

  //     const { volume } = response.data;

  //     setVolumeData(volume);
  //   } catch (error: any) {
  //     if (axios.isAxiosError(error)) {
  //       console.log('Erro ao escanear volume:', error.response?.data);

  //       const message = error.response?.data?.message || 'Erro ao escanear volume';
  //       Alert.alert('Erro ao escanear volume', message);

  //       setScanned(false);
  //     } else {
  //       Alert.alert('Erro', 'Algo inesperado aconteceu.');
  //     }
  //   }
  // };

  async function handleOpenCamera() {
    try {
      const { granted } = await requestPermission();

      if (!granted) {
        return Alert.alert('Camera', 'Você precisa habilitar o uso da câmera.');
      }

      setModalVisible(true);
      qrCodeLock.current = false;
    } catch (error) {
      console.log(error);
    }
  };

  function handleQRCodeRead(data: string) {
    setModalVisible(false);
    Alert.alert('QRCode', data);
  };

  return (
    <View style={styles.container}>
      <Button title='Ler Volume' onPress={handleOpenCamera}/>
      <Modal visible={modalVisible} style={{ flex: 1 }}>
        <CameraView 
          style={styles.camera} 
          facing='back'
          onBarcodeScanned={({ data }) => {
            if (data && !qrCodeLock.current) {
              qrCodeLock.current = true;
              setTimeout(() => handleQRCodeRead(data), 500);
            }
          }}
        />

        <View style={{ position: 'absolute', bottom: 32, left: 32, right: 32 }}>
          <Button title='Cancelar' onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

export default ScanVolumeScreen;