import { Text, TouchableOpacity, View } from "react-native";
import { format } from 'date-fns';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import styles from "./styles";
import nfeStatusMap from "../../utils/nfeStatusMap";

interface NFeCardProps {
  item: any;
};

const NFeCard = ({ item }: NFeCardProps) => {
  const formattedDate = format(new Date(item.dtEmission), 'dd/MM/yyyy');
  const formattedNfNumber = item.numNfe.toString().padStart(8, '0');
  const translattedNfStatus = nfeStatusMap(item.status);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.nfNumber}>#NF-{formattedNfNumber}</Text>
        <View style={styles.nfStatusContainer}>
          <Text style={styles.nfStatus}>{translattedNfStatus}</Text>
        </View>
      </View>
      <View style={{ marginBottom: 4 }}>
        <Text>Origem: {item.issuer}</Text>
        <Text>Destino: {item.destination}</Text>
      </View>
      <View style={styles.nfInfoContainer}>
        <Text style={styles.nfInfoContent}>{item.volumesCount} volumes</Text>
        <View style={styles.bulletSeparator}></View>
        <Text style={styles.nfInfoContent}>Emissão em {formattedDate}</Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
        >
          <MaterialIcons name="play-arrow" size={24} color="#FFF" />
          <Text style={styles.buttonText}>Iniciar conferência de volumes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NFeCard;