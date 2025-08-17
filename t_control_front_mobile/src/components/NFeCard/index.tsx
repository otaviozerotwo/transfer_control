import { Alert, Text, TouchableOpacity, View } from "react-native";
import { format } from 'date-fns';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import styles from "./styles";
import nfeStatusMap from "../../utils/nfeStatusMap";
import ConfirmModal from "../ConfirmModal";
import { useState } from "react";

interface NFeCardProps {
  item: any;
  onInitScanVolume: () => void;
};

const NFeCard = ({ item, onInitScanVolume }: NFeCardProps) => {
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
        <View style={styles.nfDestinationContainer}>
          <Text style={styles.nfDestinationLabel}>Origem:</Text> 
          <Text>{item.issuer}</Text>
        </View>
        <View style={styles.nfDestinationContainer}>
          <Text style={styles.nfDestinationLabel}>Destino:</Text> 
          <Text>{item.destination}</Text>
        </View>
      </View>
      <View style={styles.nfInfoContainer}>
        <Text style={styles.nfInfoContent}>{item.volumesCount} volumes</Text>
        <View style={styles.bulletSeparator}></View>
        <Text style={styles.nfInfoContent}>Emissão em {formattedDate}</Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={onInitScanVolume}
        >
          <MaterialIcons name="play-arrow" size={24} color="#FFF" />
          <Text style={styles.buttonText}>Conferência de volumes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NFeCard;