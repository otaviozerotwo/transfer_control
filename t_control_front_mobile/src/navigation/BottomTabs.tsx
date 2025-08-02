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
            Home: 'home-sharp',
            Deliveries: 'cube',
            Reports: 'bar-chart',
            Settings: 'settings',
          };
          return <Ionicons name={icons[route.name]} size={size} color={color} />
        },
        tabBarActiveTintColor: '#000'
      })}
    >
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Deliveries' component={DeliveriesScreen} />
      <Tab.Screen name='Reports' component={ReportsScreen} />
      <Tab.Screen name='Settings' component={SettingsScreen} />
    </Tab.Navigator>
  );
}