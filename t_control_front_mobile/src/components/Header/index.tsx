import { Text, TouchableOpacity, View } from 'react-native';
import { useAuth } from '../../contexts/AuthContext';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './styles';

type HeaderProps = {
  onAvatarPress: () => void;
};

const Header = ({ onAvatarPress }: HeaderProps) => {
  const { user } = useAuth();
  
  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <TouchableOpacity 
          onPress={onAvatarPress}
          style={styles.avatar}
        >
          <AntDesign name='user' size={24} color='black' />
        </TouchableOpacity>

        <View>
          <Text style={styles.greeting}>Olá, {user?.name}</Text>
          <Text style={styles.enterprise}>Farmácia XPTO LJ01</Text>
        </View>
      </View>
      <TouchableOpacity>
        <Ionicons name='notifications' size={24} color='black' />
      </TouchableOpacity>
    </View>
  );
};

export default Header;