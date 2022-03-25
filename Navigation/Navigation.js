
import React from 'react'
import { NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import PaginaInicial from '../Screens/PaginaInicial'

const Tab = createBottomTabNavigator()

export default function Navigation() {
  return (
    <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
              name = "paginainicial"
              component = {PaginaInicial}
          />
        </Tab.Navigator>
    </NavigationContainer>
  )
}