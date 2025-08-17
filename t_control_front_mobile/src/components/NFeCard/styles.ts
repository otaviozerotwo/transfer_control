import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    margin: 12,
    padding: 12,
    backgroundColor: '#FFF',
    borderWidth: 0.5,
    borderColor: '#CCC',
    borderRadius: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  nfNumber: {
    fontSize: 16,
    fontWeight: '500'
  },
  nfStatusContainer: {
    padding: 6,
    backgroundColor: '#CCC',
    borderRadius: 12
  },
  nfStatus: {
    fontSize: 12,
    color: '#666'
  },
  nfInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  nfInfoContent: {
    fontSize: 12,
    color: '#666'
  },
  bulletSeparator: {
    width: 6,
    height: 6,
    backgroundColor: '#666',
    borderRadius: 9999
  },
  button: {
    width: 264,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    padding: 12,
    backgroundColor: '#000',
    borderRadius: 12,
    gap: 4,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold'
  },
  nfDestinationContainer: {
    width: 264,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nfDestinationLabel: {
    fontSize: 12,
    color: '#666'
  },
});

export default styles;