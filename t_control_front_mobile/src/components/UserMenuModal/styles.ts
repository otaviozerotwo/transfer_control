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
  header: {
    marginBottom: 24,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 14,
    color: '#CCC',
  },
  actions: {
    borderTopWidth: 1,
    borderRadius: 8,
    paddingTop: 16,
  },
  logoutBtn: {
    flexDirection: 'row',
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: '#2C2C2C',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8
  },
  logoutText: {
    color: '#FFF',
    fontSize: 16,
  },
  closeBtn: {
    width: 36,
    position: 'absolute',
    top: 24,
    right: 24,
    zIndex: 1,
  }
});

export default styles;