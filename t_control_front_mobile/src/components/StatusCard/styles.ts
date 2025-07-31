import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  statusCard: {
    width: '48%',
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 16,
    borderWidth: 0.5,
    borderColor: '#CCC'
  },
  statusHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8
  },
  statusTitle: {
    marginTop: 4,
    color: '#666',
  },
  statusCount: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default styles;