import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/Home';
import DeliveriesScreen from '../screens/Deliveries';
import ReportsScreen from '../screens/Reports';
import SettingsScreen from '../screens/Settings';

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          const icons: any = {
            Início: 'home-sharp',
            Entregas: 'cube',
            Relatórios: 'bar-chart',
            Ajustes: 'settings',
          };
          return <Ionicons name={icons[route.name]} size={size} color={color} />
        },
        tabBarActiveTintColor: '#000'
      })}
    >
      <Tab.Screen name='Início' component={HomeScreen} />
      <Tab.Screen name='Entregas' component={DeliveriesScreen} />
      <Tab.Screen name='Relatórios' component={ReportsScreen} />
      <Tab.Screen name='Ajustes' component={SettingsScreen} />
    </Tab.Navigator>
  );
}