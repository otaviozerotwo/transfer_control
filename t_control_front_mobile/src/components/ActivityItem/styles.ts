import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  activityItem: {
    backgroundColor: '#FFF',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 0.5,
    borderColor: '#CCC',
  },
  volume: {
    fontWeight: 'bold',
  },
  status: {
    color: '#666',
    marginTop: 4,
  },
  hour: {
    position: 'absolute',
    right: 10,
    top: 10,
    fontSize: 12,
    color: '#666',
  },
});

export default styles;