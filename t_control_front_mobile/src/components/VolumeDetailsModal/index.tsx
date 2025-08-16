import { Modal, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

const VolumeDetailsModal = ({ visible, volume, onClose }: any) => {
  return (
    <Modal
      visible={visible}
      animationType='slide'
      transparent
    >
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.title}>Volume #{volume.nrVolume}</Text>
          <Text>Nota Fiscal: {volume.nfe?.numNfe}</Text>
          <Text>Empresa: {volume.enterprise?.name}</Text>
          <Text>Status atual: {volume.status}</Text>

          <TouchableOpacity onPress={onClose}>
            <Text style={{ color: 'gray', marginTop: 10 }}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default VolumeDetailsModal;