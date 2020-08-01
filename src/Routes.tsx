import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './pages/Home'
import CollectPoint from './pages/CollectPoint'
import Detail from './pages/Detail'
import App from '../App'

const AppStack = createStackNavigator()

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none" screenOptions={{ cardStyle: { backgroundColor: '#f0f0f5' } }}>
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="CollectPoint" component={CollectPoint} />
        <AppStack.Screen name="Detail" component={Detail} />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
