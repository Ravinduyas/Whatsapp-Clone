import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import { MaterialCommunityIcons } from 'react-native-vector-icons'
import Chat from './screens/Chat';
import Calls from './screens/Calls';
import Status from './screens/Status';
import Community from './screens/Community';

const Tab = createMaterialTopTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator
    initialRouteName='Chat'
    screenOptions={{
      tabBarIndicatorStyle: 'white',
      tabBarIndicatorStyle:{
        backgroundColor: 'white'
      },
      tabBarLabelStyle: {
        fontWeight: 'bold'
      },
      tabBarStyle: {
        backgroundColor: '#075e54'
      }
      
    }}
    >
      <Tab.Screen
        name='Community'
        component={Community}
        options={{
          tabBarIcon: ({ color }) => {
            <MaterialCommunityIcons name='account-group' size={24} color={color} />
          },
          tabBarLabelStyle: styles.tabBarLabelStyle
        }}
      />
      <Tab.Screen
        name='Chat'
        component={Chat}
      />
      <Tab.Screen
        name='Status'
        component={Status}
      />
      <Tab.Screen
        name='Calls'
        component={Calls}
      />
    </Tab.Navigator>
  )
}

export default Navigation

const styles = StyleSheet.create({
  tabBarLabel: {
    display: 'none',
    backgroundColor: 'yellow'
  }
});