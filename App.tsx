import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './src/screens/Home'
import { RootStackParamList } from './src/types'
import { colors } from './src/theme'
import Cats from './src/screens/Cats'
import Liked from './src/screens/Liked'

const Stack = createStackNavigator<RootStackParamList>()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerMode: 'screen',
          headerTintColor: colors.cream,
          headerStyle: { backgroundColor: colors.coffee },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Daily cats',
          }}
        />
        <Stack.Screen
          name="Cats"
          component={Cats}
          options={{
            title: 'Your daily cat',
          }}
        />
        <Stack.Screen
          name="Liked"
          component={Liked}
          options={{
            title: 'Your favourite cats',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const animationConfig = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
}

export default App
