import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Screens/Home';
import Profile from './components/Screens/Profile';
import StackNav from './components/StackNav';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Options from './components/Screens/Options';
import Icon from 'react-native-ionicons';

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function TabNav() {

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => {
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        switch (route.name) {
                            case 'Inicio':
                                iconName = focused ? 'home' : 'home-outline';
                                break;
                            case 'Perfil':
                                iconName = focused ? 'person-circle-sharp' : 'person-circle-outline'
                                break;
                            case 'Opciones':
                                iconName = focused ? 'options' : 'options-outline'
                                break;
                            default: return;
                        }

                        return <Icon name={iconName} />
                    }
                }}
            >
                <Tab.Screen name='Inicio' component={Home} />
                <Tab.Screen name='Perfil' component={Profile} />
                <Tab.Screen name='Opciones' component={Options} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}