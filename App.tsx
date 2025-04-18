import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from './types/navigation'
import HomeScreen from './screens/HomeScreen'
import CheckIn from './screens/CheckIn'

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}

        />
        <Stack.Screen
          name="CheckIn"
          component={CheckIn}

        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
