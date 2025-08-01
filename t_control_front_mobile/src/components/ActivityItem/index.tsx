import { Text, View } from 'react-native'
import styles from './styles'

const ActivityItem = ({ volume, status, hour }: any) => {
  return (
    <View style={styles.activityItem}>
      <Text style={styles.volume}>{volume}</Text>
      <Text style={styles.status}>{status}</Text>
      <Text style={styles.hour}>{hour}</Text>
    </View>
  );
};

export default ActivityItem;