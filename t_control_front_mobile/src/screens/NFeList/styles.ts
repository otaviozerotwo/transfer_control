import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingVertical: 24,
    borderBottomWidth: 0.5,
    borderBottomColor: '#CCC'
  },
  headerTitle: {
    fontSize: 16,
    color: '#666',
    marginLeft: 12
  },
  headerContent: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 12,
  },
});

export default styles;