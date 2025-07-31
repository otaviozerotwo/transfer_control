import { Text, View } from "react-native";
import { MaterialIcons, FontAwesome6, Ionicons, FontAwesome5, AntDesign, Feather } from '@expo/vector-icons';
import styles from "./styles";

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

const StatusCard = ({ iconLib, iconName, title, count }: { iconLib: IconProps['lib']; iconName: string, title: string, count: number }) => {
  return (
    <View style={styles.statusCard}>
      <View style={styles.statusHeader}>
        <Text style={styles.statusTitle}>{title}</Text>
        <DynamicIcon lib={iconLib} name={iconName} size={20} />
      </View>
      <Text style={styles.statusCount}>{count}</Text>
    </View>
  );
};

export default StatusCard;