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
    <Tab.Navigator>
      <Tab.Screen
        name='Community'
        component={Community}
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});