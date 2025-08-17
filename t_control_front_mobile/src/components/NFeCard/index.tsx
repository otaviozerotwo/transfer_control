import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

interface NFeCardProps {
  item: any;
};

const NFeCard = ({ item }: NFeCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.nfNumber}>#NF-{item.numNfe}</Text>
        <View style={styles.nfStatusContainer}>
          <Text style={styles.nfStatus}>{item.status}</Text>
        </View>
      </View>
      <View style={{ marginBottom: 4 }}>
        <Text>Origem: {item.issuer}</Text>
        <Text>Destino: {item.destination}</Text>
      </View>
      <View style={styles.nfInfoContainer}>
        <Text style={styles.nfInfoContent}>{item.volumesCount} volumes</Text>
        <View style={styles.bulletSeparator}></View>
        <Text style={styles.nfInfoContent}>Emissão em {item.dtEmission}</Text>
      </View>
      <View>
        <TouchableOpacity>
          <Text>Iniciar conferência de volumes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NFeCard;