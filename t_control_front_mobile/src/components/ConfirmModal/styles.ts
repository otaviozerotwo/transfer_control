import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'flex-end',
  },
  container: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  buttonCancel: {
    flex: 1,
    padding: 12,
    alignItems: 'center',
    backgroundColor: '#666',
    borderRadius: 12,
    marginRight: 10,
  },
  buttonConfirm: {flex: 1,
    padding: 12,
    alignItems: 'center',
    backgroundColor: '#000',
    borderRadius: 12,
    marginRight: 10,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: '600'
  },
});

export default styles;