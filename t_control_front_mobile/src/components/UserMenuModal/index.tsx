import { Modal, Pressable, Text, TouchableOpacity, View } from 'react-native';
import { useAuth } from '../../contexts/AuthContext';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './styles';

type Props = {
  visible: boolean;
  onClose: () => void;
};

const UserMenuModal = ({ visible, onClose }: Props) => {
  const { signOut, user } = useAuth();

  return (
    <Modal
      visible={visible}
      animationType='slide'
      transparent
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay}>
        <Pressable style={styles.container}>
          <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
            <Ionicons name='close' size={36} color='black' />
          </TouchableOpacity>
          <View style={styles.header}>
            <Text style={styles.name}>{user?.name}</Text>
            <Text style={styles.details}>Farmácia XPTO LJ01</Text>
          </View>

          <View style={styles.actions}>
            <TouchableOpacity style={styles.logoutBtn} onPress={signOut}>
              <Ionicons name='return-down-back-outline' size={24} color='#FFF' />
              <Text style={styles.logoutText}>Sair do aplicativo</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default UserMenuModal;