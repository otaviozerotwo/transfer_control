import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cameraWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  camera: {
    margin: 16,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#0D1B2A',
    justifyContent: 'flex-end',
    alignItems: 'center',
    ...StyleSheet.absoluteFillObject,
  },
  hint: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 36,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  frame: {
    width: '80%',
    height: 150,
    borderWidth: 2.5,
    borderColor: '#CCC',
    borderRadius: 10,
  },
});

export default styles;