import { Modal, Pressable, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

type Props = {
  visible: boolean;
  title: string;
  onConfirm: () => void;
  onCancel: () => void;
};

const ConfirmModal = ({ visible, title, onConfirm, onCancel }: Props) => {
  return (
    <Modal 
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={onCancel}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>Deseja iniciar conferência de volumes?</Text>
          <View style={styles.buttons}>
            <TouchableOpacity
              style={styles.buttonCancel}
              onPress={onCancel}
            >
              <Text style={styles.buttonText}>Não</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.buttonConfirm}
              onPress={onConfirm}
            >
              <Text style={styles.buttonText}>Sim</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmModal;