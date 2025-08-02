import { Text, TouchableOpacity } from 'react-native';
import { MaterialIcons, FontAwesome6, Ionicons, FontAwesome5, AntDesign, Feather } from '@expo/vector-icons';
import styles from './styles';

const iconLibraries = {
  MaterialIcons,
  FontAwesome6,
  Ionicons,
  FontAwesome5,
  AntDesign,
  Feather,
};

type IconProps = {
  lib: keyof typeof iconLibraries;
  name: string;
  size?: number;
  color?: string;
};

const DynamicIcon = ({ lib, name, size, color }: IconProps) => {
  const IconComponent = iconLibraries[lib];
  return <IconComponent name={name as any} size={size} color={color} />;
};

const ActionCard = ({ iconLib, iconName, label, onPress }: { iconLib: IconProps['lib']; iconName: string, label: string, onPress: () => void; }) => {
  return (
    <TouchableOpacity style={styles.actionCard} onPress={onPress}>
      <DynamicIcon lib={iconLib} name={iconName} size={38} />
      <Text style={styles.actionLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

export default ActionCard;