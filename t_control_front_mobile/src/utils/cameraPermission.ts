import { useCameraPermissions } from "expo-camera";
import { Alert } from "react-native";

const cameraPermission = async () => {
  const [permission, requestPermission] = useCameraPermissions();
  try {
    const { granted } = await requestPermission();

    if (!granted) {
      return Alert.alert('Camera', 'Você precisa habilitar o uso da câmera.');
    }

  } catch (error) {
    console.log(error);
  }
};

export default cameraPermission;